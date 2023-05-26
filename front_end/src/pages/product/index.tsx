import NavLayout from "@/Layout/NavLayout";
import SideLayout from "@/Layout/SideLayout";
import React from "react";
import { Sidebar1 } from "@/components/Sidebar/sidebar";

const Product = () => {
  return (
    <NavLayout>
      <SideLayout>
        <Sidebar1 />
      </SideLayout>
    </NavLayout>
  );
};

export default Product;
