import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

import { toast } from "react-toastify";
// import jwt_decode from "jwt-decode";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/router";
import axios from "axios";

export const CartContext = createContext({});

export function CartContextProvider({ children }: any) {
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
      items = [...prev.productList];
    } else {
      items = [...cartItems.productList];
    }
    const prevProductIdx = items?.findIndex((item) => item?.product?._id === product?._id);
    if (prevProductIdx > -1) {
      const cnt = type === "inc" ? items[prevProductIdx].quantity + 1 : items[prevProductIdx].quantity - 1;
      if (cnt < 0) return;
      items[prevProductIdx].quantity = cnt;
      items[prevProductIdx].price = cnt * items[prevProductIdx].product.price;
    } else {
      items.push({ product, quantity: 1, price: product.price * 1 });
    }
    const niilberShirheg = items?.reduce((acc: any, item: any) => acc + item.quantity, 0);
    console.log(niilberShirheg, "shirheg");
    const niilberUne = items?.reduce((acc: any, item: any) => acc + item.quantity * item.price, 0);
    console.log(niilberUne, "niilberune");
    const cardData = { productList: items, totalQuantity: niilberShirheg, totalPrice: niilberUne };
    if (!user) {
      localStorage.setItem("card", JSON.stringify(cardData)); //{pList:[{produ,tota,qty},{produ,tota,qty}]}
      setCartItems(cardData);
    } else {
      addItemToCardToServer(user._id, cardData);
    }

    // addItemToCart();
  };
  // const deleteItemFromCart = (product:{_id:any}) => {
  //   const newCartItems = cartItems?.filter((item) => item?.product?._id !== _id);

  //   localStorage.setItem("card", JSON.stringify({ items: newCartItems }));
  //   setCartItems(items);
  // };

  // backEnd ruu cartItems yabuulah huselt
  const addItemToCart = async () => {
    if (!user) {
      toast.warn("Нэвтэрнэ үү");
      return router.replace("/login");
    }

    const getCard = localStorage.getItem("card") as string;
    const value = JSON.parse(getCard);
    if (value) {
      addItemToCardToServer(user._id, value);
    }
  };

  const addItemToCardToServer = async (uid: string, value: object) => {
    try {
      // console.log("SERVER START", uid);
      // console.log("SERVER START", value);
      console.log("SERVER TRY");
      const res2 = await axios.post(
        "http://localhost:9000/carts/",
        {
          cartItems: value,
          userId: uid,
        },
        { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }
      );
      console.log("RES", res2.data);
      setCartItems(res2.data.cartList);
      localStorage.removeItem("card");
      console.log("SERVER END");
      toast.success("Amjilttai ");
    } catch (error) {
      console.log("Error", error);
      console.log("SERVER ERROR");
    }
  };

  const getCartList = async () => {
    if (!user) {
      const getCard = localStorage.getItem("card") as string;
      const value = JSON.parse(getCard);
      setCartItems(value);
    }

    if (!cartItems) {
      const res: any = await axios.get(`http://localhost:9000/carts/carts/${user._id}`);
      console.log("RES", res?.data?.cartItems[0]);
      setCartItems(res?.data?.cartItems[0]);
    }
  };

  useEffect(() => {
    if (user) {
      addItemToCart();
      getCartList();
    }
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     // addItemToCart();
  //   }
  // }, []);

  // const removeItemFromCart = async (pId: string, userId: string) => {
  //   // setUserId(userId);
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:9000/carts/",
  //       {
  //         pId,
  //         userId,
  //       },
  //       { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }
  //     );
  //     console.log("RES", res.data.cartList.productList);
  //     setCartItems(res.data.cartList.productList);
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };

  useEffect(() => {
    const localCard = localStorage.getItem("card") as string;
    const prev = JSON.parse(localCard);
    setCartItems(prev);
  }, []);

  // const getCartList = async () => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     const decoded = jwt_decode(token);
  //     const res: any = await fetch(`http://localhost:9000/carts/${decoded.id}`).then((res) => res.json());
  //     console.log("RES", res.cartItem.productList);
  //   }
  // };
  // getCartList();

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        getCartList,
        // removeItemFromCart,
        updateCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );

  // const removeItem = (index: any) => {
  //   setCartItems((old) => old.filter((item, idx) => idx !== index));
  // };
}
