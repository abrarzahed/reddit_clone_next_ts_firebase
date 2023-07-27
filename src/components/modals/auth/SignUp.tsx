import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  // form state
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => {
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
      <Input
        required
        name="confirmPassword"
        placeholder="Confirm Password"
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
        Sign Up
      </Button>
      <Flex fontSize={`9pt`} justify={`center`}>
        <Text mr={1}>Already have an account?</Text>{" "}
        <Text
          color={`blue.500`}
          fontWeight={700}
          cursor={`pointer`}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
