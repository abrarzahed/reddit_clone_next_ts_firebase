import AuthModal from "@/components/modals/auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RootRightContentProps = {
  user?: User | null;
  colorMode?: string;
};

const RootRightContent: React.FC<RootRightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify={`center`} align={`center`}>
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RootRightContent;
