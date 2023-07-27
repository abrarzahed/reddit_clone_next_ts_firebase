import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/modals/auth/AuthModal";

type RootRightContentProps = {
  // user
};

const RootRightContent: React.FC<RootRightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex justify={`center`} align={`center`}>
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RootRightContent;
