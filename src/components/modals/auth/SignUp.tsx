import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  // form state
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    if (!signUpForm.email.includes("@")) {
      return setError("Please enter a valid email");
    }

    if (signUpForm.password !== signUpForm.confirmPassword) {
      return setError("Passwords do not match");
    }

    // Valid form inputs
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
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
      {(error || userError) && (
        <Text my={2} textAlign={`center`} color={`red`} fontSize={`10pt`}>
          {error ||
            FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button w={`100%`} h={`36px`} my={2} type="submit" isLoading={loading}>
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
