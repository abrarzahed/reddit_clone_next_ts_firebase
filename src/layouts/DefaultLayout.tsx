import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const DefaultLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Navbar />
      <Box
        as="main"
        width={`100%`}
        bg={colorMode === "light" ? "gray.200" : ""}
        minHeight={`calc(100vh - 44px)`}
      >
        {children}
      </Box>
    </>
  );
};
export default DefaultLayout;
