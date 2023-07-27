import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction={`column`} width={`100%`} mb={2}>
      <Button variant={`oauth`} mb={2}>
        <Image src="/images/googlelogo.png" height={`22px`} mr={4} />
        Continue with Google
      </Button>
      <Button variant={`disabled`} mb={2}>
        Other Provider
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
