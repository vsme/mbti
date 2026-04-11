import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import Script from "next/script";

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MBTI 性格测试",
    description:
      "免费在线 MBTI 性格测试，快速准确地了解你的 16 型人格类型。通过专业的迈尔斯-布里格斯类型指标测试，深入探索你的性格特质、优势和职业发展方向。",
    url: "https://mbti.yaavi.me",
    applicationCategory: "HealthApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CNY",
    },
    inLanguage: "zh-CN",
  };

  return (
    <Html lang="zh-CN">
      <Head>
        <Script
          id="baidu-hm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?922e7991abd659d219be3e5932ec15c9";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode="light" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
