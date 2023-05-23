/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";

const ProductItem = ({ item, product }: any) => {
  const [count, setCount] = useState(1);
  const { updateCard, deleteCard, addItemToCart }: any =
    useContext(CartContext);

  return (
    <div className="container mx-auto">
      <div className="p-2">
        <div className="grid grid-cols-3 gap-5 p-1">
          <div>
            <img
              src={item.product.imgUrl}
              alt="picture"
              className="object-cover border border-black w-full h-64 p-3"
            />
          </div>
          <div className="text-gray-700">
            <Link
              className="lg:font-semibold text-2xl sm:text-md font-semibold max-sm:text-xs"
              href={`Products/${item?.product._id}`}
            >
              {item?.product?.title}
            </Link>

            <p className="font-extralight text-md max-sm:text-xs ">
              {item?.product?.description}
            </p>
            <p className="font-extralight text-xs text-gray-500">
              {item?.product?.rent_start_day}
            </p>
          </div>

          <div className="flex justify-end sm:text-sm md:text-md sm:flex-row">
            <div className="font-normal text-2xl text-gray-700">
              {item.totalPrice}₮
            </div>
          </div>
        </div>
        <div className="flex justify-end ">
          <button
            onClick={() => {
              deleteCard(item.product);
            }}
            className="text-gray-500 "
          >
            <p className="font-light text-sm">Таалагдсан заруудаас хасах</p>
          </button>
        </div>
      </div>

      <hr />
    </div>
  );
};

const CartSection = () => {
  const { cartItems, addItemToCart }: any = useContext(CartContext);

  console.log("hi,---", cartItems);
  const niilberShirheg = cartItems?.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );
  console.log(niilberShirheg, "shirheg");
  const niilberUne = cartItems?.reduce(
    (acc: any, item: any) => acc + item.quantity * item.product.price,
    0
  );

  console.log(niilberUne, "niilberune");
  return (
    <div className="h-screen bg-white">
      <div className="flex justify-center p-5 sm:flex-row">
        <ol className="flex items-center justify-center space-x-2  font-medium text-center text-xl ">
          <li className="flex items-center text-cyan-600 ">
            <span className="hidden sm:inline-flex sm:ml-2">
              Таалагдсан түрээс
            </span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 sm:ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </li>
        </ol>
      </div>
      <div className="px-44">
        <div className="md:col-span-3 border-2 shadow-md p-2">
          {cartItems?.length &&
            cartItems.map((el: any, i: any) => (
              <ProductItem key={i} item={el} />
            ))}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps({ query }: any) {
  const result = await fetch(
    `http://localhost:9000/products/${query.productId}`
  );
  const data = await result.json();
  return {
    props: { product: data.product },
  };
}

export default CartSection;

// export async function getServerSideProps({ query }: any) {
//   const CartItems = await fetch(`http://localhost:9000/carts/`);
//   console.log("CartList", CartItems);
//   const data = await CartItems.json();
//   return {
//     props: { product: data.product },
//   };
// }
