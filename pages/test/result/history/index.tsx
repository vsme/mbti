import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Option, AsyncData, Result } from "@swan-io/boxed";
import { Flex, Text } from "@chakra-ui/react";

import MainLayout from "../../../../components/layouts/main-layout";
import TestResultHistory from "../../../../components/test/test-result-history";
import {
  TestResult,
  getAllSavedTestResult,
} from "../../../../lib/personality-test";

export default function TestResultHistoryPage() {
  const router = useRouter();

  const [testResults, setTestResults] = useState<
    AsyncData<Result<Option<TestResult[]>, Error>>
  >(AsyncData.NotAsked());

  useEffect(() => {
    if (router.isReady) {
      setTestResults(AsyncData.Loading());

      getAllSavedTestResult().tap((result) =>
        setTestResults(AsyncData.Done(result))
      );
    }
  }, [router.isReady]);

  return (
    <MainLayout
      title="测试历史记录"
      description="查看你所有的 MBTI 性格测试历史记录，回顾和比较不同时间的测试结果。"
    >
      {testResults.match({
        NotAsked: () => <Text>加载中</Text>,
        Loading: () => <Text>加载中</Text>,
        Done: (result) =>
          result.match({
            Error: () => <Text>出现错误！请刷新页面！</Text>,
            Ok: (value) =>
              value.match({
                Some: (data) => <TestResultHistory testResults={data} />,
                None: () => <Text>没有数据</Text>,
              }),
          }),
      })}
    </MainLayout>
  );
}
