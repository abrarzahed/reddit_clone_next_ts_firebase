import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Divider,
  Text,
  Input,
} from "@chakra-ui/react";

import React, { useState } from "react";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 21) return;
    //  calculate how many characters remaining in the name
    setCommunityName(value);
    setCharsRemaining(21 - value.length);
  };
  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display={`flex`} fontSize={15} padding={3}>
            Create a Community
          </ModalHeader>
          <Box pl={3} pr={3}>
            <Divider />
            <ModalCloseButton />
            <ModalBody
              display={`flex`}
              flexDirection={`column`}
              padding={`10px 0px`}
            >
              <Text fontWeight={600} fontSize={15}>
                Name
              </Text>
              <Text color={`gray.500`} fontSize={11}>
                Community names including capitalization cannot be changed
              </Text>
              <Text
                position={`relative`}
                top={`28px`}
                left={`10px`}
                width={`20px`}
                color={`gray.400`}
              >
                r/
              </Text>
              <Input
                position={`relative`}
                value={communityName}
                size={`sm`}
                pl={`22px`}
                onChange={() => handleInputChange}
              />
              <Text>{charsRemaining} Characters remaining</Text>
            </ModalBody>
          </Box>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button variant="ghost">Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
