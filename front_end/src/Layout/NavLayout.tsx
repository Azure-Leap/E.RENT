import React from "react";
import Tnavbar from "@/components/Tnavbar/tnavbar";
import Dele from "@/components/Tnavbar/dele";
import Navbar from "@/components/Nav/Navbar";
import Megamenu from "@/components/MegaMenu/megamenu";

const NavLayout = ({ children,user }: any) => {
  return (
    <div style={{ background: "#EFF5F5" }}>
      <Dele />

      {children}
    </div>
  );
};

export default NavLayout;
