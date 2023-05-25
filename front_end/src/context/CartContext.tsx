import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

import { toast } from "react-toastify";
// import jwt_decode from "jwt-decode";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL_API } from "@/util/variables";

export const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const { user } = useContext(AuthContext);
  console.log("U++++++>", user);
  const [cartItems, setCartItems] = useState<any>(null);
  const [favItems, setFavItems] = useState<any>(user?.favProduct);

  const router = useRouter();

  const updateCardToUser = (product: { _id: any; price: any }, type: string) => {
    console.log("USER", user);
    if (user) {
      console.log(cartItems);
      // const data = calculateCard(product, type);
      // addItemToCardToServer(user._id, data);
      localStorage.removeItem("card");
    } else {
      console.log("LOC", product);
      const data = calculateCard(product, type);
      localStorage.setItem("card", JSON.stringify(data));
      setCartItems(data);
      toast.success(" Амжилттай нэмлээ", {
        autoClose: 1000,
        position: "top-right",
      });
    }
  };

  const calculateCard = (product: any, type: string) => {
    const localCard = JSON.parse(localStorage.getItem("card") as string);
    let items: any = [];
    if (localCard) {
      items = [...localCard.productList];
    }
    const findProductIndex = items?.findIndex((item: any) => item?.product._id === product?._id);
    if (findProductIndex > -1) {
      const cnt = type === "inc" ? items[findProductIndex].quantity + 1 : items[findProductIndex].quantity - 1;
      items[findProductIndex].quantity = cnt;
      items[findProductIndex].price = cnt * items[findProductIndex].product.price;
    } else {
      items.push({ product, quantity: 1, price: 1 * product.price });
    }
    const totalQuantity = items.reduce((acc: number, item: any) => item.quantity + acc, 0);
    const totalPrice = items.reduce((acc: number, item: any) => item.price + acc, 0);
    return { ...localCard, productList: items, totalPrice, totalQuantity };
  };

  // backEnd ruu cartItems yabuulah huselt
  const addItemToCart = async () => {
    if (!user) {
      toast.warn("Нэвтэрнэ үү");
      return router.replace("/login");
    } else {
      console.log("Rent Pay");
      try {
        const res = await axios.post(`${BASE_URL_API}/orders`, {
          cardData: cartItems,
        });
        console.log("Rent Finish", res.data.order);
        setCartItems(null);
        toast.success("Таны захиалга амжилттай үүслээ.", { autoClose: 1000, position: "top-right" });
      } catch (error) {
        console.log("ER", error);
        toast.error(" Ta дахин оролдоно уу", {
          autoClose: 1000,
          position: "top-right",
        });
      }
      // const getCard = localStorage.getItem("card") as string;
      // const cardValue = JSON.parse(getCard);
      // if (cardValue) {
      //   addItemToCardToServer(user._id, cardValue);
      // }
    }
  };

  const addFavProductToUser = async (product: any) => {
    if (user) {
      console.log("User", user._id);
      console.log("Update", product._id);
      try {
        // http://localhost:9000/users/product/fav/6468af8da20bd9adc8b1e407
        const res = await axios.post(`${BASE_URL_API}/users/product/fav/${user._id}`, {
          pId: product._id,
        });
        setFavItems(res.data.favProduct);
        toast.success(" Амжилттай нэмлээ", {
          autoClose: 1000,
          position: "top-right",
        });
      } catch (error) {
        console.log("ER", error);
        toast.error(" Ta дахин оролдоно уу", {
          autoClose: 1000,
          position: "top-right",
        });
      }
    } else {
      toast.info(" Ta эхлээд нэвтэрнэ үү", {
        autoClose: 1000,
        position: "top-right",
      });
    }
    // add
  };

  const addItemToCardToServer = async (uid: string, value: object) => {
    try {
      // console.log("SERVER START", uid);
      // console.log("SERVER START", value);
      console.log("SERVER TRY");
      const res2 = await axios.post(
        `${BASE_URL_API}/carts/`,
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
    localStorage.setItem("card", JSON.stringify(value));
    setCartItems(value);
  };

  const getCartList = async () => {
    if (!user) {
      const getCard = localStorage.getItem("card") as string;
      const value = JSON.parse(getCard);
      setCartItems(value);
    } else {
      // if (!cartItems) {
      const res: any = await axios.get(`${BASE_URL_API}/carts/carts/${user._id}`);
      console.log("RES", res?.data?.cartItems[0]);
      setCartItems(res?.data?.cartItems[0]);
      // }
    }
  };

  useEffect(() => {
    // addItemToCart();
    // getCartList();
    setFavItems(user?.favProduct);
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
        setCartItems,
        updateCardToUser,
        deleteCard,
        favItems,
        setFavItems,
        addFavProductToUser,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
