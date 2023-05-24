import React from "react";

import Dele from "@/components/Tnavbar/dele";

const NavLayout = ({ children }: any) => {
  return (
    <div style={{ background: "#EFF5F5" }}>
      <Dele />

      {children}
    </div>
  );
};

export default NavLayout;
