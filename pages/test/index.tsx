import MainLayout from "../../components/layouts/main-layout";
import TestDisplay from "../../components/test/test-display";

export default function TestPage() {
  return (
    <MainLayout
      title="开始 MBTI 性格测试"
      description="开始你的免费 MBTI 性格测试，通过 70+ 道专业题目，快速了解你属于 16 种人格类型中的哪一种。测试仅需约 15 分钟。"
    >
      <TestDisplay />
    </MainLayout>
  );
}
