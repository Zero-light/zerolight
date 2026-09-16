import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Spotlight from "@/components/spotlight";
import BackToTop from "@/components/back-to-top";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zerolight.fun"),
  title: {
    default: "zerolight — 以光为尺的极简设计工作室",
    template: "%s — zerolight",
  },
  description:
    "zerolight（零光）是一个极简主义数字设计工作室。我们相信最好的设计是一种克制：在信息爆炸的时代，留白是最有力的声明。",
  keywords: ["zerolight", "极简设计", "界面设计", "设计工作室", "动效研究"],
  openGraph: {
    type: "website",
    url: "https://www.zerolight.fun",
    siteName: "zerolight",
    title: "zerolight — 以光为尺的极简设计工作室",
    description:
      "以光为尺，设计克制。极简主义数字设计工作室。",
    locale: "zh_CN",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "zerolight — 以光为尺的极简设计工作室",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "zerolight",
    description: "以光为尺，设计克制。",
    images: ["/opengraph-image.png"],
  },
  appleWebApp: {
    title: "zerolight",
    statusBarStyle: "black-translucent",
  },
  applicationName: "zerolight",
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="grain relative min-h-screen">
        {/* 背景光晕 */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
          <div
            className="absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full animate-slow-pulse"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(240,201,138,0.07), transparent 65%)",
            }}
          />
          <div
            className="absolute -left-40 top-[42%] h-[440px] w-[440px] rounded-full animate-slow-drift"
            style={{
              background:
                "radial-gradient(circle, rgba(160,180,255,0.04), transparent 65%)",
            }}
          />
          <div
            className="absolute -right-48 top-[58%] h-[520px] w-[520px] rounded-full animate-slow-drift"
            style={{
              background:
                "radial-gradient(circle, rgba(140,220,200,0.035), transparent 65%)",
              animationDelay: "-8s",
            }}
          />
        </div>

        <Spotlight />
        <div className="grid-lines pointer-events-none fixed inset-0 z-0" aria-hidden />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <BackToTop />
      </body>
    </html>
  );
}
