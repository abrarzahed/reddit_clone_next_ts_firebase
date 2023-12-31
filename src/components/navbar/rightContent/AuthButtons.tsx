import { authModalState } from "@/atoms/authModalAtom";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { theme } from "@/chakra/theme";

const AuthButtons: React.FC = () => {
  const { colorMode } = useColorMode();
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant={`outline`}
        height={`28px`}
        display={{
          base: "none",
          sm: "flex",
        }}
        width={{
          base: "70px",
          md: "110px",
        }}
        mr={2}
        onClick={() => {
          setAuthModalState({ open: true, view: "login" });
        }}
      >
        Log IN
      </Button>
      <Button
        height={`28px`}
        display={{
          base: "none",
          sm: "flex",
        }}
        width={{
          base: "70px",
          md: "110px",
        }}
        mr={2}
        onClick={() => {
          setAuthModalState({ open: true, view: "signup" });
        }}
        bg={`primary`}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
