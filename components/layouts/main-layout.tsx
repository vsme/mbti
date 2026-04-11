import Head from "next/head";
import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

import Nav from "../common/nav";
import Footer from "../common/footer";

interface MainLayoutProps {
  children: ReactNode;
  hideBackground?: boolean;
  title?: string;
  description?: string;
}

const SITE_NAME = "MBTI 性格测试 - 免费在线迈尔斯-布里格斯性格类型测试";
const DEFAULT_DESCRIPTION =
  "免费在线 MBTI 性格测试，快速准确地了解你的 16 型人格类型。通过专业的迈尔斯-布里格斯类型指标测试，深入探索你的性格特质、优势、人际关系和职业发展方向。";
const SITE_URL = "https://mbti.yaavi.me";

export default function MainLayout(props: MainLayoutProps) {
  const title = props.title ? `${props.title} | MBTI 性格测试` : SITE_NAME;
  const description = props.description || DEFAULT_DESCRIPTION;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />

        {/* Keywords */}
        <meta
          name="keywords"
          content="MBTI,性格测试,人格测试,16型人格,迈尔斯布里格斯,MBTI测试,性格类型,INFJ,INFP,INTJ,INTP,ENFJ,ENFP,ENTJ,ENTP,ISFJ,ISFP,ISTJ,ISTP,ESFJ,ESFP,ESTJ,ESTP,免费测试"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MBTI 性格测试" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:locale" content="zh_CN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="vsme" />
        <meta httpEquiv="Content-Language" content="zh-CN" />
      </Head>
      <Flex
        direction="column"
        w="full"
        minH="100vh"
        bg={
          props.hideBackground
            ? "gray.50"
            : undefined
        }
        background={
          props.hideBackground
            ? undefined
            : "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #fda085 100%)"
        }
      >
        <Nav />
        <Flex
          as="main"
          w="100%"
          flex="1"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          {props.children}
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
