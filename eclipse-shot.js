const fs = require("fs");
const path = require("path");

async function main() {
  const list = await fetch(`http://localhost:9222/json`).then((r) => r.json());
  const page = list.find((t) => t.type === "page");
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const mid = ++id;
      pending.set(mid, { resolve, reject });
      ws.send(JSON.stringify({ id: mid, method, params }));
    });
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id).resolve(msg.result);
      pending.delete(msg.id);
    }
  };
  await new Promise((r) => (ws.onopen = r));

  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 780,
    deviceScaleFactor: 1,
    mobile: true,
  });
  await send("Page.navigate", { url: "http://localhost:3100/works/eclipse-tide" });
  await new Promise((r) => setTimeout(r, 2500));
  const evalRes = await send("Runtime.evaluate", {
    expression: "document.documentElement.scrollHeight",
    returnByValue: true,
  });
  const total = evalRes.result.value;
  for (let sy = 0; sy < total; sy += 500) {
    await send("Runtime.evaluate", {
      expression: `window.scrollTo(0, ${sy}); true`,
      returnByValue: true,
    });
    await new Promise((r) => setTimeout(r, 200));
  }
  await send("Runtime.evaluate", {
    expression: `window.scrollTo(0, ${total}); true`,
    returnByValue: true,
  });
  await new Promise((r) => setTimeout(r, 600));
  const SEG = 2200;
  let y = 0;
  let idx = 0;
  while (y < total) {
    await send("Runtime.evaluate", {
      expression: `window.scrollTo(0, ${Math.max(0, y - 200)}); true`,
      returnByValue: true,
    });
    await new Promise((r) => setTimeout(r, 1200));
    const h = Math.min(SEG, total - y);
    const shot = await send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: true,
      clip: { x: 0, y, width: 390, height: h, scale: 1 },
    });
    fs.writeFileSync(
      path.join(__dirname, "shots", `seg_eclipse_m_${String(idx).padStart(2, "0")}.png`),
      Buffer.from(shot.data, "base64")
    );
    idx++;
    y += SEG - 80;
  }
  console.log("ECLIPSE_M_TOTAL", total, "SEGS", idx);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
