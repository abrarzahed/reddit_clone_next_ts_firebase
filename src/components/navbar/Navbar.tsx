"use client";
import { Flex, Image, Icon } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import NavbarRightContent from "./rightContent/NavbarRightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import NavbarDirectory from "./directory/NavbarDirectory";
import { useColorMode } from "@chakra-ui/react";
import { theme } from "@/chakra/theme";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [user, loading, error] = useAuthState(auth);
  // decide what to render
  let content = null;
  if (loading) {
    content = <></>;
  } else {
    content = (
      <>
        <Icon
          fontSize={{ base: "15pt", md: "22px" }}
          as={BsSun}
          colorScheme="brand"
          onClick={toggleColorMode}
          cursor={`pointer`}
        >
          Toggle Theme
        </Icon>
        {user && <NavbarDirectory colorMode={colorMode} />}
        <SearchInput user={user} colorMode={colorMode} />
        <NavbarRightContent user={user} colorMode={colorMode} />
      </>
    );
  }
  return (
    <Flex
      bg={`base`}
      height={`44px`}
      padding={`6px 12px`}
      justify={{ md: `space-between` }}
      align={`center`}
    >
      <Flex
        align={`center`}
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
      >
        <Image src="/images/redditFace.svg" height={`30px`} />
        <Image
          src="/images/redditText.svg"
          height={`46px`}
          display={{ base: "none", md: "unset" }}
          sx={{ filter: colorMode === "light" ? `invert(0%)` : `invert(100%)` }}
        />
      </Flex>
      {content}
    </Flex>
  );
};
export default Navbar;
