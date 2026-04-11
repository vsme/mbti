import { Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

interface TestInstructionsProps {
  onCloseTestInstructions: () => void;
}

export default function TestInstructions(props: TestInstructionsProps) {
  return (
    <Flex
      w="full"
      bg="white"
      rounded="2xl"
      shadow="xl"
      p={{ base: 6, md: 10 }}
      mx={{ base: 2, md: 0 }}
      my={8}
      border="1px solid"
      borderColor="gray.100"
      direction="column"
      gap={6}
    >
      <Heading size="lg" color="primary.600">
        测试说明
      </Heading>
      <Text color="gray.600" fontSize="md">
        完成测试大约只需要 15 分钟。以下是一些提示：
      </Text>
      <Flex direction="column" gap={4}>
        {[
          "这些问题没有正确答案，请放心作答。",
          "快速回答问题，不要过度分析。选择你感觉最合适的答案。",
          "根据\u201C你实际的情况\u201D回答问题，而不是\u201C你希望别人如何看待你\u201D。",
        ].map((tip, i) => (
          <Flex key={i} alignItems="flex-start" gap={3}>
            <Icon as={FiCheckCircle} color="green.400" mt={1} boxSize={5} />
            <Text color="gray.700">{tip}</Text>
          </Flex>
        ))}
      </Flex>
      <Button
        colorScheme="primary"
        size="lg"
        alignSelf="flex-end"
        rounded="full"
        px={8}
        rightIcon={<FiArrowRight />}
        onClick={props.onCloseTestInstructions}
      >
        好的，开始吧！
      </Button>
    </Flex>
  );
}
