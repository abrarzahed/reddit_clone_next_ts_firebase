import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/modals/auth/AuthModal";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";

type RootRightContentProps = {
  user: any;
};

const RootRightContent: React.FC<RootRightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify={`center`} align={`center`}>
        {user ? (
          <Button onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
export default RootRightContent;
