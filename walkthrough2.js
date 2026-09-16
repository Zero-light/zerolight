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
  const evalJs = async (expr) => {
    const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true });
    return r.result?.value;
  };
  const nav = async (url) => {
    await send("Page.navigate", { url });
    await new Promise((r) => setTimeout(r, 2200));
  };
  const assert = (name, cond) => console.log(`${cond ? "PASS" : "FAIL"} ${name}`);

  // 1. 首页 → 导航到作品
  await nav("http://localhost:3100/");
  await evalJs(`document.querySelector('a[href="/works"]').click(); true`);
  await new Promise((r) => setTimeout(r, 800));
  assert("首页→作品 页面过渡动画", (await evalJs(`getComputedStyle(document.querySelector('main')).animationName`)) === "page-fade");
  assert("作品页标题", (await evalJs(`document.title`)).includes("作品"));

  // 2. 作品 → 详情
  await evalJs(`document.querySelector('a[href^="/works/"]').click(); true`);
  await new Promise((r) => setTimeout(r, 800));
  assert("作品→详情 JSON-LD", await evalJs(`document.querySelector('script[type="application/ld+json"]') !== null`));

  // 3. 详情 → 相关词汇锚点
  await evalJs(`(()=>{const l=document.querySelector('a[href^="/glossary#"]'); if(l){l.click(); return true} return false})()`);
  await new Promise((r) => setTimeout(r, 1000));
  assert("详情→词汇锚点", (await evalJs(`location.pathname`)) === "/glossary");

  // 4. 词汇 → 日志筛选 ?tag=
  await nav("http://localhost:3100/journal?tag=%E5%8A%A8%E6%95%88");
  const n = await evalJs(`[...document.querySelectorAll('main a[href^="/journal/"] h3')].map(h=>h.textContent.trim()).length`);
  assert("日志?tag=动效 过滤数=2", n === 2);

  // 5. 文章 → 下一篇
  await evalJs(`document.querySelector('main a[href^="/journal/"]').click(); true`);
  await new Promise((r) => setTimeout(r, 900));
  const hasNext = await evalJs(`[...document.querySelectorAll('a')].some(a=>a.textContent.includes('下一篇')||a.textContent.includes('下一个'))`);
  assert("文章页有下一篇导航", hasNext);
  const bodyLen = await evalJs(`document.querySelector('main').textContent.length`);
  assert("文章正文非空(>500字)", bodyLen > 500);

  // 6. 日志 → RSS
  await nav("http://localhost:3100/journal");
  await evalJs(`document.querySelector('a[href="/feed.xml"]').click(); true`);
  await new Promise((r) => setTimeout(r, 1200));
  assert("RSS 可达且为 XML", (await evalJs(`document.contentType`)) === "text/xml");

  // 7. 404
  await nav("http://localhost:3100/nonexistent-page");
  assert("404 页", (await evalJs(`document.querySelector('main').textContent`)).includes("404") || (await evalJs(`document.title`)).includes("404"));

  console.log("WALKTHROUGH DONE");
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
