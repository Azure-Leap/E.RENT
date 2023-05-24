/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import like from "../../../../public/images/like.png";
import { useRouter } from "next/router";
import { CartContext } from "@/context/CartContext";

const ProductCard = ({ product }: any) => {
  const [products, setProducts] = useState([]);
  const { cartItems, updateCard } = useContext(CartContext);

  const router = useRouter();
  return (
    <>
      <div
        className="p-2 border border-slate-600 rounded-md bg-zinc-50"
        // key={idx}
      >
        <img src={product.imgUrl} className="w-full h-60 object-cover " />

        <div className="font-semibold text-md pt-5 text-left truncate">
          {product.title}
        </div>
        <p className="font-extralight text-sm">{product.description}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold">{product.price}₮</p>
          <button onClick={() => updateCard(product, "inc")}>
            <Image src={like} alt="photo" width={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
