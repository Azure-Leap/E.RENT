import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import NavLayout from "@/Layout/NavLayout";
import CartSection from "@/components/Cart/cartSection";

const Cart = () => {
  return (
    <NavLayout>
      <CartSection />
    </NavLayout>
  );
};

export default Cart;
