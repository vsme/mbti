import Link from "next/link";
import { Flex, Text, SimpleGrid, Heading } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex as="footer" bg="gray.900" color="gray.300" direction="column">
      <Flex
        maxW="1200px"
        mx="auto"
        w="full"
        px={{ base: 6, md: 8 }}
        py={10}
        direction={{ base: "column", md: "row" }}
        gap={8}
        justifyContent="space-between"
      >
        {/* Brand */}
        <Flex direction="column" gap={3} maxW="300px">
          <Heading as="h3" size="md" color="white">
            MBTI 性格测试
          </Heading>
          <Text fontSize="sm" lineHeight="1.7">
            免费在线迈尔斯-布里格斯类型指标测试，帮助你深入了解自己的性格类型、优势与发展方向。
          </Text>
        </Flex>

        {/* Quick Links */}
        <SimpleGrid columns={2} spacing={8}>
          <Flex direction="column" gap={2}>
            <Text fontWeight="bold" color="white" fontSize="sm" mb={1}>
              快速链接
            </Text>
            <Link href="/">
              <Text
                fontSize="sm"
                _hover={{ color: "primary.300" }}
                cursor="pointer"
              >
                首页
              </Text>
            </Link>
            <Link href="/test">
              <Text
                fontSize="sm"
                _hover={{ color: "primary.300" }}
                cursor="pointer"
              >
                开始测试
              </Text>
            </Link>
            <Link href="/test/result/history">
              <Text
                fontSize="sm"
                _hover={{ color: "primary.300" }}
                cursor="pointer"
              >
                测试历史
              </Text>
            </Link>
          </Flex>
          <Flex direction="column" gap={2}>
            <Text fontWeight="bold" color="white" fontSize="sm" mb={1}>
              关于
            </Text>
            <Link href="/MBTI-personality-test.pdf" target="_blank">
              <Text
                fontSize="sm"
                _hover={{ color: "primary.300" }}
                cursor="pointer"
              >
                测试来源 (PDF)
              </Text>
            </Link>
            <a
              href="https://github.com/vsme/mbti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text
                fontSize="sm"
                _hover={{ color: "primary.300" }}
                cursor="pointer"
              >
                GitHub 开源
              </Text>
            </a>
          </Flex>
        </SimpleGrid>
      </Flex>

      {/* Bottom bar */}
      <Flex
        borderTop="1px solid"
        borderColor="gray.700"
        py={4}
        w="full"
        justifyContent="center"
      >
        <Flex
          maxW="1200px"
          w="full"
          px={{ base: 6, md: 8 }}
          justifyContent="space-between"
          alignItems="center"
          fontSize="xs"
          color="gray.500"
          direction={{ base: "column", sm: "row" }}
          gap={2}
        >
          <Text>
            Made by{" "}
            <a
              href="https://github.com/vsme"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#a5b4fc" }}
            >
              vsme
            </a>
          </Text>
          <Text>MBTI 是迈尔斯-布里格斯类型指标的注册商标</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
