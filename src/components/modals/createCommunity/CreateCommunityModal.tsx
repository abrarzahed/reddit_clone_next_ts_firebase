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
  Stack,
  Checkbox,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { theme } from "@/chakra/theme";

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
  const [communityType, setCommunityType] = useState("public");

  const { colorMode } = useColorMode();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 21) return;
    //  calculate how many characters remaining in the name
    setCommunityName(value);
    setCharsRemaining(21 - value.length);
  };

  const onCommunityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCommunityType(value);
  };
  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display={`flex`} padding={3}>
            <Heading variant={`heading4`}>Create a Community</Heading>
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
                onChange={handleInputChange}
              />
              <Text
                mt={1}
                color={charsRemaining === 0 ? "red.500" : ""}
                variant={`bodyS`}
              >
                {charsRemaining} Characters remaining
              </Text>
              <Box my={4}>
                <Text fontWeight={600} fontSize={15}>
                  Community Type
                </Text>
                {/* <Checkbox/> */}
                <Stack>
                  <Checkbox
                    name="communityType"
                    onChange={onCommunityTypeChange}
                    value="public"
                    isChecked={communityType === "public"}
                  >
                    Public
                  </Checkbox>
                  <Checkbox
                    name="communityType"
                    onChange={onCommunityTypeChange}
                    value="restricted"
                    isChecked={communityType === "restricted"}
                  >
                    Restricted
                  </Checkbox>
                  <Checkbox
                    name="communityType"
                    onChange={onCommunityTypeChange}
                    value="private"
                    isChecked={communityType === "private"}
                  >
                    Private
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>

          <ModalFooter>
            <Button
              bg={
                colorMode === "light"
                  ? theme.colors[colorMode].primary
                  : theme.colors[colorMode].primary
              }
              mr={3}
              onClick={handleClose}
            >
              {/* <Text variant={`btn`}>Close</Text> */}Close
            </Button>
            <Button variant="ghost">Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
