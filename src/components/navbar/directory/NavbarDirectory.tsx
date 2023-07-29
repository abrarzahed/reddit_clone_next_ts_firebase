import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Menu, MenuButton, MenuList, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";

const NavbarDirectory: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor={`pointer`}
        padding={`0px 6px`}
        borderRadius={4}
        _hover={{
          outline: "1px solid",
          outlineColor: "gray.200",
        }}
        mx={2}
      >
        <Flex align={`center`} justify={`space-between`}>
          <Flex align={`center`} width={{ base: "auto", lg: "150px" }}>
            <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome} />
            <Text
              fontSize={`10pt`}
              fontWeight={700}
              color={`gray.600`}
              display={{ base: "none", lg: "unset" }}
            >
              Home
            </Text>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default NavbarDirectory;
