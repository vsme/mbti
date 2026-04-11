import { Flex, Button } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

import TestTimer from "./test-timer";

interface TestMenuProps {
  onShowInstructionsButtonClick: () => void;
}

export default function TestMenu(props: TestMenuProps) {
  return (
    <Flex
      width="full"
      my={2}
      px={{ base: 2, md: 4 }}
      justifyContent="flex-end"
      alignItems="center"
      gap={2}
    >
      <TestTimer />
      <Button
        aria-label="instructions"
        variant="ghost"
        size="sm"
        color="gray.500"
        leftIcon={<RiInformationLine size={18} />}
        _hover={{ bg: "gray.100" }}
        onClick={props.onShowInstructionsButtonClick}
      >
        说明
      </Button>
    </Flex>
  );
}
