import { auth } from "@/firebase/clientApp";
import { Text, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "@/firebase/errors";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction={`column`} width={`100%`} mb={2}>
      <Button
        variant={`oauth`}
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" height={`22px`} mr={4} />
        Continue with Google
      </Button>
      <Button variant={`disabled`} mb={2}>
        Other Provider
      </Button>
      {error && <Text>{error?.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
