"use client";

import { useRouter } from "next/navigation";
import React,{ createContext, useState, useEffect } from "react";

const CartItemContext = createContext({});

export const CartItemProvider = ({ children }:any) => {
  const [cart, setCart] = useState([]);

  const router = useRouter;

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")as string) : []);
  };

  const addItemToCart = async (product:{ _id:string, price:any},type:string) => {
    const item = {
      product,
      price,
    
    }

    const isItemExist = cart?.cartItems?.find((i: { product: any; }) => i.product === item.product);

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i: { product: any; }) => (i.product === isItemExist.product ? item : i));
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id: any) => {
    const newCartItems = cart?.cartItems?.filter((i:any) => i.product !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartItemContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartItemContext.Provider>
  );
};

export default CartItemContext;
