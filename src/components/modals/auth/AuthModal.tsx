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
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleClose = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign={`center`}
            pb={0}
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
              />
            </Flex>
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
              <Text color={`gray.500`} fontWeight={700}>
                OR
              </Text>
              <AuthInputs />
              {/* <ResetPassword/> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
