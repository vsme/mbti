import Link from "next/link";
import {
  Heading,
  Text,
  Flex,
  Button,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { FiArrowRight, FiClock, FiAward, FiShield } from "react-icons/fi";
import Image from "next/image";

import MainLayout from "../components/layouts/main-layout";

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      p={6}
      bg="whiteAlpha.200"
      backdropFilter="blur(12px)"
      rounded="2xl"
      border="1px solid"
      borderColor="whiteAlpha.300"
      gap={3}
      transition="all 0.3s"
      _hover={{ transform: "translateY(-4px)", bg: "whiteAlpha.300" }}
    >
      <Icon as={icon} boxSize={7} color="white" />
      <Text fontWeight="bold" color="white" fontSize="md">
        {title}
      </Text>
      <Text color="whiteAlpha.800" fontSize="sm" textAlign="center">
        {desc}
      </Text>
    </Flex>
  );
}

export default function HomePage() {
  return (
    <MainLayout>
      <Flex
        position="relative"
        w={{ base: "full", lg: "60%" }}
        alignSelf="center"
        px={{ base: 6, md: 8 }}
        pt={{ base: 12, md: 20 }}
        pb={8}
        gap={8}
        minH="calc(100vh - 72px)"
        direction="column"
        justifyContent="center"
        alignItems="center"
        zIndex={1}
      >
        {/* Badge */}
        <Flex
          px={4}
          py={1.5}
          bg="whiteAlpha.200"
          backdropFilter="blur(8px)"
          rounded="full"
          border="1px solid"
          borderColor="whiteAlpha.400"
          alignItems="center"
        >
          <Text color="white" fontSize="sm" fontWeight="600">
            免费 · 专业 · 70+ 道题目
          </Text>
        </Flex>

        {/* Title */}
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          lineHeight="1.2"
          textAlign="center"
          color="white"
          textShadow="0 2px 4px rgba(0,0,0,0.1)"
        >
          探索你的
          <Text
            as="span"
            display="inline-block"
            bg="white"
            color="primary.600"
            px={4}
            py={1}
            mx={2}
            rounded="xl"
            fontWeight="800"
            fontSize="inherit"
          >
            MBTI
          </Text>
          人格类型
        </Heading>

        {/* Subtitle */}
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          textAlign="center"
          color="whiteAlpha.900"
          maxW="500px"
          lineHeight="1.8"
        >
          通过专业的迈尔斯-布里格斯类型指标测试，深入了解你的性格特质、优势与发展方向
        </Text>

        {/* CTA Button */}
        <Link href="/test">
          <Button
            size="lg"
            bg="white"
            color="primary.600"
            px={10}
            py={7}
            fontSize="lg"
            fontWeight="bold"
            rounded="full"
            shadow="xl"
            rightIcon={<FiArrowRight size={20} />}
            _hover={{
              transform: "translateY(-2px)",
              shadow: "2xl",
              bg: "gray.50",
            }}
            transition="all 0.3s"
          >
            开始免费测试
          </Button>
        </Link>

        {/* Feature Cards */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={4}
          w="full"
          maxW="700px"
          mt={4}
        >
          <FeatureCard
            icon={FiClock}
            title="约15分钟"
            desc="快速完成全部测试题目"
          />
          <FeatureCard
            icon={FiAward}
            title="16种人格"
            desc="精准匹配你的性格类型"
          />
          <FeatureCard
            icon={FiShield}
            title="隐私安全"
            desc="数据仅保存在本地浏览器"
          />
        </SimpleGrid>
      </Flex>

      <Image
        alt="MBTI 性格测试插图"
        src="/images/home-bottom.png"
        width={100}
        height={100}
        style={{
          position: "absolute",
          zIndex: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          opacity: 0.3,
        }}
      />
    </MainLayout>
  );
}
