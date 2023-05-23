import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
// import { useContext } from "react"
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
// import { AuthContext } from "./AuthContext";
import { useRouter } from "next/router";

export const CartContext = createContext({});

export function CartContextProvider({ children }: any) {
  const [cartItems, setCartItems] = useState<any[]>([]);
  // const { user } = useContext(UserConte);
  const user = null;
  const router = useRouter();

  const updateCard = (product: { _id: any; price: any }, type: string) => {
    const localCard = localStorage.getItem("card") as string;
    const prev = JSON.parse(localCard);
    let items: any[] = [];
    if (prev) {
      items = [...prev];
    }

    const prevProductIdx = items?.findIndex(
      (item) => item?.product?._id === product?._id
    );

    console.log(type);
    if (prevProductIdx > -1) {
      const cnt =
        type === "inc"
          ? items[prevProductIdx].quantity + 1
          : items[prevProductIdx].quantity - 1;
      if (cnt < 0) return;
      items[prevProductIdx].quantity = cnt;
      items[prevProductIdx].totalPrice =
        cnt * items[prevProductIdx].product.price;
    } else {
      items.push({ product, quantity: 1, totalPrice: product.price });
    }
    localStorage.setItem("card", JSON.stringify(items));
    setCartItems(items);
  };

  const removeItemFromCart = async (pId: string, userId: string) => {
    // setUserId(userId);
    try {
      const res = await axios.post(
        "http://localhost:9000/carts/",
        {
          pId,
          userId,
        },
        { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }
      );
      console.log("RES", res.data.cartList.productList);
      setCartItems(res.data.cartList.productList);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    const localCard = localStorage.getItem("card") as string;
    const prev = JSON.parse(localCard);
    setCartItems(prev);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        // addItemToCart,
        removeItemFromCart,
        updateCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
