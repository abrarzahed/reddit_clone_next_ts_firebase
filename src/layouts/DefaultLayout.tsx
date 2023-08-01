"use client";
import React, { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
interface DefaultLayoutProps {
  children?: ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Navbar />
      <Box
        px={`20px`}
        as="main"
        bg={`background`}
        minHeight={`calc(100vh - 44px)`}
      >
        <Box mx={`auto`} maxWidth={`containerWidth`}>
          {children}
        </Box>
      </Box>
    </>
  );
};
export default DefaultLayout;
