import { posts } from "@/lib/posts";

const BASE = "https://www.zerolight.fun";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = posts
    .map((p) => {
      const body = p.body.join("\n\n");
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${BASE}/journal/${p.slug}</link>
      <guid>${BASE}/journal/${p.slug}</guid>
      <pubDate>${new Date(p.date + "-01T00:00:00+08:00").toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
      <content:encoded><![CDATA[${body}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>zerolight — 设计随笔</title>
    <link>${BASE}/journal</link>
    <description>zerolight（零光）极简数字设计工作室的设计随笔。</description>
    <language>zh-CN</language>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
