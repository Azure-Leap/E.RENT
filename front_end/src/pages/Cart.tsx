import CartSection from "@/components/Cart/cartSection";
import { AuthContext } from "@/context/AuthContext";
import NavLayout from "@/Layout/NavLayout";
import React, { useContext } from "react";
import { useRouter } from "next/router";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  // if (!user) {
  //   router.push("/");
  // }

  return (
    <NavLayout>
      <div className="container mx-auto pt-5">
        <CartSection />
      </div>
    </NavLayout>
  );
};

export default Cart;
