import Link from "next/link";
import { MouseEvent, useState, useEffect } from "react";
import { Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";

import useHeadingsObserver from "../../hooks/use-headings-observer";

export default function TestResultTableOfContent() {
  const { activeId, setActiveId } = useHeadingsObserver();

  const [headings, setHeadings] = useState<
    {
      id: string;
      text: string;
    }[]
  >([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (element) => ({
        id: element.id,
        text: element.textContent!,
      })
    );

    setHeadings(elements);
  }, []);

  function handleTableOfContentLinkClick(
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    id: string
  ) {
    event.preventDefault();
    setActiveId(id);
  }

  return (
    <Flex
      mx={4}
      my={4}
      w={{ base: "25%" }}
      h="min-content"
      top="90px"
      direction="column"
      pos="sticky"
      alignSelf="flex-start"
    >
      <Flex
        bg="white"
        rounded="2xl"
        shadow="lg"
        border="1px solid"
        borderColor="gray.100"
        p={5}
        direction="column"
        gap={3}
      >
        <Text fontWeight="bold" fontSize="sm" color="gray.500" mb={1}>
          目录导航
        </Text>
        <UnorderedList spacing={1} listStyleType="none" ml={0}>
          {headings.map((heading, index) => (
            <ListItem
              key={index}
              fontSize="sm"
              cursor="pointer"
              py={1.5}
              px={3}
              rounded="lg"
              transition="all 0.2s"
              borderLeft="3px solid"
              borderColor={
                heading.id === activeId ? "primary.500" : "transparent"
              }
              bg={heading.id === activeId ? "primary.50" : "transparent"}
              color={heading.id === activeId ? "primary.600" : "gray.600"}
              fontWeight={heading.id === activeId ? "600" : "400"}
              _hover={{
                bg: "gray.50",
                color: "primary.500",
              }}
              onClick={(event) =>
                handleTableOfContentLinkClick(event, heading.id)
              }
            >
              <Link href={`#${heading.id}`}>{heading.text}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  );
}
