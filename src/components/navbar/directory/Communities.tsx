import CreateCommunityModal from "@/components/modals/createCommunity/CreateCommunityModal";
import React, { useState } from "react";
import { MenuItem, Flex, Icon } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CreateCommunityModal open={open} handleClose={handleClose} />
      <MenuItem
        width={`100%`}
        fontSize={`10pt`}
        _hover={{ bg: "gray.100" }}
        onClick={() => setOpen(true)}
      >
        <Flex align={`center`}>
          <Icon fontSize={20} mr={2} as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
