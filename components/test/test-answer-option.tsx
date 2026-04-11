import { useRadio, Flex } from "@chakra-ui/react";

export default function TestAnswerOption(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Flex w="full" as="label" direction="column">
      <input {...input} />
      <Flex
        px={6}
        py={4}
        cursor="pointer"
        borderWidth={2}
        borderRadius="xl"
        borderColor="gray.200"
        bg="white"
        userSelect="none"
        fontSize="md"
        fontWeight="500"
        transition="all 0.2s"
        _hover={{
          borderColor: "primary.300",
          bg: "primary.50",
          transform: "translateY(-1px)",
          shadow: "md",
        }}
        _checked={{
          bg: "primary.500",
          color: "white",
          borderColor: "primary.500",
          shadow: "lg",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        {...checkbox}
      >
        {props.children}
      </Flex>
    </Flex>
  );
}
