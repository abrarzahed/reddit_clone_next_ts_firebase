import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import NavbarRightContent from "./rightContent/NavbarRightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import NavbarDirectory from "./directory/NavbarDirectory";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  // decide what to render
  let content = null;
  if (loading) {
    content = <></>;
  } else {
    content = (
      <>
        {user && <NavbarDirectory />}
        <SearchInput user={user} />
        <NavbarRightContent user={user} />
      </>
    );
  }
  return (
    <Flex
      bg="white"
      height={`44px`}
      padding={`6px 12px`}
      justify={{ md: `space-between` }}
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
        />
      </Flex>
      {content}
    </Flex>
  );
};
export default Navbar;
