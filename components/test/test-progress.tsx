import { Progress, Text, Flex } from "@chakra-ui/react";

import { personalityTest } from "../../data/personality-test";
import useUserTestAnswersStore from "../../store/use-user-test-answers";

export default function TestProgress() {
  const { userTestAnswers } = useUserTestAnswersStore();

  const progress = (userTestAnswers.length / personalityTest.length) * 100;

  return (
    <Flex w="full" direction="column" gap={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xs" color="gray.500" fontWeight="600">
          答题进度
        </Text>
        <Text fontSize="xs" color="primary.500" fontWeight="700">
          {Math.round(progress)}%
        </Text>
      </Flex>
      <Progress
        w="full"
        size="sm"
        rounded="full"
        colorScheme="primary"
        value={progress}
        bg="gray.200"
      />
    </Flex>
  );
}
