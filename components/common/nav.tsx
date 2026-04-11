import Link from "next/link";
import { Flex, Button, Text } from "@chakra-ui/react";
import { BiHistory } from "react-icons/bi";

export default function Nav() {
  return (
    <Flex
      as="nav"
      py={2}
      px={{ base: 4, md: 8 }}
      w="full"
      h="72px"
      justifyContent="space-between"
      alignItems="center"
      overflowX="hidden"
      backdropFilter="blur(12px)"
      bg="whiteAlpha.200"
      borderBottom="1px solid"
      borderColor="whiteAlpha.300"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Flex gap={4} alignItems="center" overflowX="hidden">
        <Link href="/">
          <Flex alignItems="center" gap={2} cursor="pointer">
            <Flex
              w="36px"
              h="36px"
              bg="white"
              rounded="xl"
              alignItems="center"
              justifyContent="center"
              shadow="md"
            >
              <Text fontSize="lg" fontWeight="800" color="primary.600">
                M
              </Text>
            </Flex>
            <Text
              fontWeight="bold"
              fontSize="lg"
              color="white"
              display={{ base: "none", md: "block" }}
              textShadow="0 1px 2px rgba(0,0,0,0.1)"
            >
              MBTI 性格测试
            </Text>
          </Flex>
        </Link>
        <a
          href="https://github.com/vsme/mbti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="//img.shields.io/github/stars/vsme/mbti"
            alt="GitHub Repo stars"
          />
        </a>
      </Flex>
      <Link href="/test/result/history">
        <Button
          variant="solid"
          size="sm"
          bg="whiteAlpha.300"
          color="white"
          _hover={{ bg: "whiteAlpha.400" }}
          backdropFilter="blur(8px)"
          leftIcon={<BiHistory size={18} />}
          borderRadius="full"
        >
          测试历史
        </Button>
      </Link>
    </Flex>
  );
}
