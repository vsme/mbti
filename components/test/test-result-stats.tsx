import { Flex, Text, Heading } from "@chakra-ui/react";

import { personalityClasses } from "../../data/personality-classes";
import { PersonalityClass, TestResult } from "../../lib/personality-test";

interface TestResultStatsProps {
  testResult: TestResult;
}

function ScoreStats(props: {
  testScores: PersonalityClass["type"][];
  targetScore: PersonalityClass["type"];
}) {
  const testScoresFiltered = props.testScores.filter(
    (score) => score === props.targetScore
  );

  return (
    <Flex
      py={1}
      px={3}
      gap={2}
      rounded="lg"
      justifyContent="space-between"
      bg="white"
      shadow="sm"
    >
      <Text fontWeight="bold" fontSize="sm">
        {((testScoresFiltered.length / props.testScores.length) * 100)
          .toFixed(1)
          .replace(/\.0$/, "")}
        %
      </Text>
      <Text fontSize="sm" color="gray.500">
        ({testScoresFiltered.length})
      </Text>
    </Flex>
  );
}

export default function TestResultStats(props: TestResultStatsProps) {
  const statsColorScheme = [
    "red",
    "blue",
    "yellow",
    "purple",
    "orange",
    "green",
    "pink",
    "teal",
  ];

  return (
    <Flex
      direction="column"
      my={4}
      mx={{ base: 4, lg: 4 }}
      w={{ base: "full", lg: "25%" }}
      h="min-content"
      top="90px"
      pos={{ base: "static", lg: "sticky" }}
      alignSelf="flex-start"
    >
      <Flex
        direction="column"
        bg="white"
        rounded="2xl"
        shadow="lg"
        border="1px solid"
        borderColor="gray.100"
        p={5}
      >
        <Heading
          as="h2"
          textAlign="center"
          fontSize="md"
          mb={4}
          color="gray.600"
        >
          维度得分
        </Heading>
        <Flex direction="column" gap={3}>
          {personalityClasses.map((personalityClass, index) => (
            <Flex
              key={index}
              p={2.5}
              rounded="xl"
              justifyContent="space-between"
              alignItems="center"
              bg={`${statsColorScheme[index]}.500`}
              transition="all 0.2s"
              _hover={{ transform: "translateX(2px)" }}
            >
              <Text fontWeight="600" color="white" fontSize="sm">
                {personalityClass.description}
              </Text>
              <ScoreStats
                testScores={props.testResult.testScores}
                targetScore={personalityClass.type}
              />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
