import React from "react";
import Navbar from "@/components/navbar/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default DefaultLayout;
