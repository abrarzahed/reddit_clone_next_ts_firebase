import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import NavbarRightContent from "./rightContent/NavbarRightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  // decide what to render
  let content = null;
  if (loading) {
    content = <></>;
  } else {
    content = (
      <>
        <SearchInput />
        {/* <NavbarDirectory/> */}
        <NavbarRightContent user={user} />
      </>
    );
  }
  return (
    <Flex bg="white" height={`44px`} padding={`6px 12px`}>
      <Flex align={`center`}>
        <Image src="/images/redditFace.svg" height={`30px`} />
        <Image
          src="/images/redditText.svg"
          height={`46px`}
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {content}
    </Flex>
  );
};
export default Navbar;
