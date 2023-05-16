import React from "react";
import Tnavbar from "@/components/Tnavbar/tnavbar";
import Dele from "@/components/Tnavbar/dele";
import Navbar from "@/components/Nav/Navbar";

const NavLayout = ({ children,user }: any) => {
  return (
    <div className="">
      {/* <Tnavbar /> */}
      {/* <Dele /> */}
      <Navbar user={user}/>
      {children}
    </div>
  );
};

export default NavLayout;
