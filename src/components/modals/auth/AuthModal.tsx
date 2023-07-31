import { authModalState } from "@/atoms/authModalAtom";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import ResetPassword from "./ResetPassword";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleClose = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };
  const [user, loading, error] = useAuthState(auth);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (user) {
      handleClose();
      console.log(user);
    }
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign={`center`}
            pb={2}
            display={`flex`}
            alignItems={`center`}
            justifyContent={`center`}
          >
            <Flex align={`center`}>
              <Image src="/images/redditFace.svg" height={`30px`} />
              <Image
                src="/images/redditText.svg"
                height={`46px`}
                display={{ base: "none", md: "unset" }}
                sx={{
                  filter: colorMode === "light" ? `invert(0%)` : `invert(100%)`,
                }}
              />
            </Flex>
            <Text mx={2}> - </Text>

            <div>
              {modalState.view === "login" && "Login"}
              {modalState.view === "signup" && "Sign Up"}
              {modalState.view === "resetPassword" && "Reset Password"}
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={`flex`}
            flexDirection={`column`}
            alignItems={`center`}
            justifyContent={`center`}
            pb={6}
          >
            <Flex
              direction={`column`}
              align={`center`}
              justify={`center`}
              width={`95%`}
            >
              <OAuthButtons />
              {modalState.view !== "resetPassword" && (
                <Text fontWeight={700}>OR</Text>
              )}

              <AuthInputs />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
