import SupplierProfile from "@/components/SupplierComp/SupplierProfile";
import NavLayout from "@/Layout/NavLayout";
import React, { useState } from "react";

const Supplier = () => {
  return (
    <NavLayout>
      <div className="pt-5">
        <div
          style={{
            background:
              "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
          }}
          className="container mx-auto "
        >
          <SupplierProfile />
        </div>
      </div>
    </NavLayout>
  );
};

export default Supplier;
