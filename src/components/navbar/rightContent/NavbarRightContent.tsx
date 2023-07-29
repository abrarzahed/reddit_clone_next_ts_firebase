import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/modals/auth/AuthModal";
import { User, signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import Icons from "./Icons";

type RootRightContentProps = {
  user?: User | null;
};

const RootRightContent: React.FC<RootRightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify={`center`} align={`center`}>
        {user ? <Icons /> : <AuthButtons />}
        {/* <Menu/> */}
      </Flex>
    </>
  );
};
export default RootRightContent;
