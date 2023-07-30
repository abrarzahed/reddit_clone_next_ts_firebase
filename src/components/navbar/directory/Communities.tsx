import CreateCommunityModal from "@/components/modals/createCommunity/CreateCommunityModal";
import React, { useState } from "react";
import { MenuItem, Flex, Icon } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CreateCommunityModal open={open} handleClose={handleClose} />
      <MenuItem width={`100%`} fontSize={`10pt`} onClick={() => setOpen(true)}>
        <Flex align={`center`}>
          <Icon fontSize={20} mr={2} as={IoMdAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
