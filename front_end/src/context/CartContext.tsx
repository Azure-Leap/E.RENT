import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

import { toast } from "react-toastify";
// import jwt_decode from "jwt-decode";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/router";
import axios from "axios";

export const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cartItems, setCartItems] = useState<any>(null);
  const { user, setUserData } = useContext(AuthContext);

  const router = useRouter();

  const updateCard = (product: { _id: any; price: any }, type: string) => {
    console.log("USER", user);
    console.log("PR", product);
    const localCard = localStorage.getItem("card") as string;
    const prev = JSON.parse(localCard);
    let items: any[] = [];
    if (prev) {
      items = [...prev];
    }
    const prevProductIdx = items?.findIndex(
      (item) => item?.product._id === product?._id
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

  useEffect(() => {
    const localCard = localStorage.getItem("card") as string;
    const prev = JSON.parse(localCard);
    setCartItems(prev);
  }, []);

  const deleteCard = (item: any) => {
    const cards = localStorage.getItem("card") as string;
    const parse = JSON.parse(cards);
    let list: any[] = [];
    if (parse) {
      list = [...parse];
    }
    const idx = list?.findIndex((el) => el.product?._id === item.product?._id);
    list.splice(idx, 1);
    localStorage.setItem("card", JSON.stringify(list));
    setCartItems(list);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCard,
        deleteCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
