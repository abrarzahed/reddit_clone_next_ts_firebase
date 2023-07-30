import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { useColorMode } from "@chakra-ui/react";
import { theme } from "@/chakra/theme";

const Icons: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex>
      <Flex
        display={{
          base: "none",
          md: "flex",
        }}
        align={`center`}
        borderRight={`1px solid`}
        borderColor={`gray.200`}
      >
        <Flex
          mx={1.5}
          padding={1}
          cursor={`pointer`}
          _hover={{
            bg:
              colorMode === "light"
                ? "gray.200"
                : theme.colors.dark.neutral.layer1,
          }}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>
        <Flex
          mx={1.5}
          padding={1}
          cursor={`pointer`}
          _hover={{
            bg:
              colorMode === "light"
                ? "gray.200"
                : theme.colors.dark.neutral.layer1,
          }}
        >
          <Icon as={IoFilterCircleOutline} fontSize={22} />
        </Flex>
        <Flex
          mx={1.5}
          padding={1}
          cursor={`pointer`}
          _hover={{
            bg:
              colorMode === "light"
                ? "gray.200"
                : theme.colors.dark.neutral.layer1,
          }}
        >
          <Icon as={IoVideocamOutline} fontSize={22} />
        </Flex>
      </Flex>
      <>
        <Flex
          mx={1.5}
          padding={1}
          cursor={`pointer`}
          _hover={{
            bg:
              colorMode === "light"
                ? "gray.200"
                : theme.colors.dark.neutral.layer1,
          }}
        >
          <Icon as={BsChatDots} fontSize={22} />
        </Flex>
        <Flex
          mx={1.5}
          padding={1}
          cursor={`pointer`}
          _hover={{
            bg:
              colorMode === "light"
                ? "gray.200"
                : theme.colors.dark.neutral.layer1,
          }}
        >
          <Icon as={IoNotificationsOutline} fontSize={22} />
        </Flex>
        <Flex
          display={{
            base: "none",
            md: "flex",
          }}
          mx={1.5}
          padding={1}
          cursor={`pointer`}
          _hover={{
            bg:
              colorMode === "light"
                ? "gray.200"
                : theme.colors.dark.neutral.layer1,
          }}
        >
          <Icon as={IoMdAdd} fontSize={22} />
        </Flex>
      </>
    </Flex>
  );
};
export default Icons;
