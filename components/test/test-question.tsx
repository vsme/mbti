import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useRadioGroup, Flex, Text, Button } from "@chakra-ui/react";

import TestProgress from "./test-progress";
import TestAnswerOption from "./test-answer-option";

import { personalityTest } from "../../data/personality-test";
import {
  TestAnswerOption as TestAnswer,
  getQuestionAnswerScore,
  saveTestResult,
} from "../../lib/personality-test";
import useUserTestAnswersStore from "../../store/use-user-test-answers";

export default function TestQuestion() {
  const router = useRouter();

  const { userTestAnswers, setUserTestAnswers } = useUserTestAnswersStore();

  const [currentPersonalityTestIndex, setCurrentPersonalityTestIndex] =
    useState(0);

  const isUserAlreadyPickAnswer =
    userTestAnswers[currentPersonalityTestIndex] !== undefined;

  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "answer",
    defaultValue: userTestAnswers[currentPersonalityTestIndex],
    onChange: (value) => {
      const newUserTestAnswers = [...userTestAnswers];

      newUserTestAnswers[currentPersonalityTestIndex] =
        value as TestAnswer["type"];

      setUserTestAnswers(newUserTestAnswers);

      handleNextButtonClick();
    },
  });

  const group = getRootProps();

  useEffect(() => {
    if (userTestAnswers[currentPersonalityTestIndex] === undefined) {
      setValue("");
      return;
    }

    setValue(userTestAnswers[currentPersonalityTestIndex]);
  }, [currentPersonalityTestIndex, userTestAnswers, setValue]);

  function handleNextButtonClick() {
    setCurrentPersonalityTestIndex((currentPersonalityTestIndex) => {
      if (currentPersonalityTestIndex + 1 > personalityTest.length - 1) {
        return currentPersonalityTestIndex;
      }

      return currentPersonalityTestIndex + 1;
    });
  }

  function handlePreviousButtonClick() {
    setCurrentPersonalityTestIndex((currentPersonalityTestIndex) => {
      if (currentPersonalityTestIndex - 1 < 0) {
        return currentPersonalityTestIndex;
      }

      return currentPersonalityTestIndex - 1;
    });
  }

  function handleSeeResultButtonClick() {
    const timestamp = Date.now();
    const testScores = userTestAnswers.map((answer, index) =>
      getQuestionAnswerScore(index + 1, answer)
    );

    saveTestResult({
      testAnswers: userTestAnswers,
      testScores,
      timestamp,
    })
      .tap(() => {
        setUserTestAnswers([]);
      })
      .tapOk((id) => {
        router.replace(`/test/result/?testResultId=${id}`);
      })
      .tapError((error) => {
        console.error(error);
      });
  }

  return (
    <Flex
      py={6}
      px={{ base: 2, md: 0 }}
      w="full"
      h="full"
      gap={6}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <TestProgress />
      <Flex
        direction="column"
        bg="white"
        w="full"
        p={8}
        rounded="2xl"
        shadow="lg"
        border="1px solid"
        borderColor="gray.100"
        gap={3}
        alignItems="center"
      >
        <Text
          fontWeight="bold"
          align="center"
          color="primary.500"
          fontSize="sm"
        >
          第 {currentPersonalityTestIndex + 1} / {personalityTest.length} 题
        </Text>
        <Text fontSize="lg" align="center" fontWeight="500" color="gray.700">
          {personalityTest[currentPersonalityTestIndex].question}
        </Text>
      </Flex>
      <Flex w="full" gap={3} direction="column" {...group}>
        {personalityTest[currentPersonalityTestIndex].answerOptions.map(
          (answerOption) => {
            const radio = getRadioProps({ value: answerOption.type });

            return (
              <TestAnswerOption key={answerOption.type} {...radio}>
                {answerOption.answer}
              </TestAnswerOption>
            );
          }
        )}
      </Flex>
      <Flex direction="row" w="full" gap={3}>
        <Button
          w="full"
          variant="outline"
          rounded="xl"
          size="lg"
          borderColor="gray.300"
          color="gray.600"
          _hover={{ bg: "gray.100" }}
          {...(currentPersonalityTestIndex === 0 && {
            disabled: true,
          })}
          onClick={handlePreviousButtonClick}
        >
          上一题
        </Button>
        {isUserAlreadyPickAnswer &&
        currentPersonalityTestIndex === personalityTest.length - 1 ? (
          <Button
            w="full"
            colorScheme="primary"
            rounded="xl"
            size="lg"
            shadow="md"
            _hover={{ shadow: "lg", transform: "translateY(-1px)" }}
            transition="all 0.2s"
            onClick={handleSeeResultButtonClick}
          >
            查看结果
          </Button>
        ) : (
          <Button
            w="full"
            colorScheme="primary"
            variant="solid"
            rounded="xl"
            size="lg"
            {...(!isUserAlreadyPickAnswer && {
              disabled: true,
            })}
            onClick={handleNextButtonClick}
          >
            下一题
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
