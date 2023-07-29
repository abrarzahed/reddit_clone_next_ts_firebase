import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
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
  const [signInWithEmailAndPassword, user, loading, userError] =
    useSignInWithEmailAndPassword(auth);

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (error) setError("");
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };
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
      {userError && (
        <Text my={2} textAlign={`center`} color={`red`} fontSize={`10pt`}>
          {FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button w={`100%`} h={`36px`} my={2} type="submit" isLoading={loading}>
        Log In
      </Button>
      <Flex justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "resetPassword",
            }))
          }
        >
          Reset
        </Text>
      </Flex>
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
