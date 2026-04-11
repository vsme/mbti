import Link from "next/link";
import { Flex, Heading, Text, Icon } from "@chakra-ui/react";
import dayjs from "dayjs";
import { FiChevronRight, FiCalendar } from "react-icons/fi";

import { TestResult } from "../../lib/personality-test";

interface TestResultHistoryProps {
  testResults: TestResult[];
}

export default function TestResultHistory(props: TestResultHistoryProps) {
  return (
    <Flex
      my={8}
      w={{ base: "full", lg: "50%" }}
      h="full"
      px={{ base: 4, md: 8 }}
      gap={6}
      alignSelf="flex-start"
      alignItems="center"
      direction="column"
    >
      <Heading as="h1" textAlign="center" size="lg" color="gray.700">
        测试历史
      </Heading>
      <Flex w="full" gap={3} direction="column">
        {props.testResults.map((testResult) => (
          <Flex
            key={testResult.timestamp}
            as={Link}
            href={`/test/result/?testResultId=${testResult.timestamp}`}
            py={4}
            px={5}
            w="full"
            rounded="xl"
            cursor="pointer"
            alignItems="center"
            justifyContent="space-between"
            bg="white"
            border="1px solid"
            borderColor="gray.100"
            shadow="sm"
            transition="all 0.2s"
            _hover={{
              shadow: "md",
              borderColor: "primary.200",
              transform: "translateY(-1px)",
            }}
          >
            <Flex alignItems="center" gap={3}>
              <Flex
                p={2}
                bg="primary.50"
                rounded="lg"
                color="primary.500"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FiCalendar} boxSize={4} />
              </Flex>
              <Text fontWeight="500" color="gray.700">
                {dayjs(testResult.timestamp).format("YYYY年MM月DD日 HH:mm")}
              </Text>
            </Flex>
            <Icon as={FiChevronRight} color="gray.400" />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
