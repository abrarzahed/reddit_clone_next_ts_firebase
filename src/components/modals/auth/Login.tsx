import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  // form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // handle submit
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        name="email"
        placeholder="Email"
        type="email"
        mb={2}
        onChange={handleInputChange}
        fontSize={`10pt`}
        _placeholder={{
          color: "gray.500",
        }}
        _focus={{
          outline: "none",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Input
        required
        name="password"
        placeholder="Password"
        type="password"
        mb={2}
        onChange={handleInputChange}
        fontSize={`10pt`}
        _placeholder={{
          color: "gray.500",
        }}
        _focus={{
          outline: "none",
        }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Button w={`100%`} h={`36px`} my={2} type="submit">
        Log In
      </Button>
      <Flex fontSize={`9pt`} justify={`center`}>
        <Text mr={1}>New here?</Text>{" "}
        <Text
          color={`blue.500`}
          fontWeight={700}
          cursor={`pointer`}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
