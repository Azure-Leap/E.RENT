/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import Image from "next/image";
import mackbook from "../../../public/images/mackbook.png";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import noBgBasket from "../../assets/images/bgNoBasket.png";

const ProductItem = ({ item }: any) => {
  const { updateCardToUser }: any = useContext(CartContext);

  function increment() {
    updateCardToUser(item.product, "inc");
  }
  function decrement() {
    updateCardToUser(item.product, "dec");
  }

  return (
    <>
      <div className="grid grid-cols-4">
        <div className=" p-3">
          <img src={item.product?.imgUrl} alt="picture" height={150} width={150} className="object-cover w-full h-32" />
        </div>
        <div className="p-2  text-gray-500">
          <h1 className="lg:font-semibold text-lg sm:text-md font-semibold max-sm:text-xs items-center pl-3">{item?.product?.title}</h1>
          <p className=" font-light text-sm max-sm:text-xs pl-3">{item?.product?.description} </p>
        </div>
        <div className="p-2 items-center md:pt-16 sm:pt-8">
          <button className="border-2 shadow-md w-10 h-10 items-center rounded-md " onClick={decrement}>
            -{" "}
          </button>
          <button className="w-10 h-10 items-center text-semibold ">{item?.quantity}</button>
          <button className="border-2 shadow-md w-10 h-10 items-center rounded-md " onClick={increment}>
            +{" "}
          </button>
        </div>
        <div className="flex pt-16 gap-5 sm:text-sm md:text-md sm:flex-row">
          <div className="font-bold text-2xl text-gray-500 gap-5 ">
            ₮:{item.price}
            <button className="text-gray-400 pl-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

const CartSection = () => {
  const router = useRouter();
  const { user }: any = useContext(AuthContext);
  const { cartItems, addItemToCart }: any = useContext(CartContext);

  console.log("USER", user);
  // console.log("fdsagsad", cartItems.productList);

  return (
    <div className="h-screen bg-white">
      {!cartItems && (
        <div className="flex items-center flex-col">
          <h1>Сагсанд бараа байхгүй байна.</h1>
          <Image src={noBgBasket} alt="no-basket" width={100} height={100} className="w-96 h-96" />
        </div>
      )}
      {cartItems && (
        <>
          <div className="flex justify-center p-5 sm:flex-row">
            <ol className="flex items-center justify-center space-x-2  font-medium text-center text-xl ">
              <li className="flex items-center text-cyan-400 ">
                <span className="flex items-center justify-center w-5 h-5 mr-2  border p-5 border-cyan-400 rounded-full shrink-0 dark:border-blue-500">1</span>
                <span className="hidden sm:inline-flex sm:ml-2">Сагс</span>
                <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                </svg>
              </li>
              <li className="flex items-center text-gray-500 ">
                <span className="flex items-center justify-center w-5 h-5 mr-2 ">2</span>
                <span className="hidden sm:inline-flex sm:ml-2"> Түрээслэх</span>
                <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                </svg>
              </li>
              <li className="flex items-center text-gray-500 ">
                <span className="flex items-center justify-center w-5 h-5 mr-2 ">3</span>
                <span className="hidden sm:inline-flex sm:ml-2">Төлбөр Төлөх </span>
              </li>
            </ol>
          </div>
          <div className="grid md:grid-cols-3 gap-8 p-10 ">
            <div className="md:col-span-2 border-2 shadow-md p-4">
              {/* {List} */}
              {cartItems?.productList?.length > 0 && cartItems?.productList.map((el: any, i: any) => <ProductItem key={i} item={el} />)}
            </div>

            <div className=" border-2 shadow-md h-60 p-5 grid ">
              <p>Нийт барааны тоо :{cartItems?.totalQuantity}</p>
              <p>Нийт үнэ : {cartItems?.totalPrice}</p>
              <button
                onClick={() => {
                  router.push(`/Done/${cartItems.productList[0].product._id}`);
                  // addItemToCart()
                }}
                className="bg-cyan-400  border-2 shadow-md text-white text-lg w-32 h-10 items-center rounded-lg "
              >
                Түрээслэх
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSection;

// export async function getServerSideProps({ query }: any) {
//   const CartItems = await fetch(`http://localhost:9000/carts/`);
//   console.log("CartList", CartItems);
//   const data = await CartItems.json();
//   return {
//     props: { product: data.product },
//   };
// }
