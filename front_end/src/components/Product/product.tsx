/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL_API } from "@/util/variables";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getAllBranches = async () => {
    try {
      const result = await axios.get(`${BASE_URL_API}/products`);
      console.log(result.data.products);
      setProducts(result.data.products);
    } catch (err) {
      console.log("Err", err);
    }
  };
  useEffect(() => {
    getAllBranches();
  }, []);
  return (
    <div className="p-10">
      <div className="grid md:grid-cols-6 sm:grid-cols-3 max-sm:space-y-2 md:space-y-0 gap-4 container mx-auto text-black pt-10">
        {products.length > 0 &&
          products.map((product: any) => (
            <>
              <div className="p-2 border border-black rounded-md bg-zinc-50">
                <img src={product?.imgUrl} className="w-full h-60 object-cover" />

                <Link className="font-semibold text-md pt-5" href={`Products/${product._id}`}>
                  {product?.title}
                </Link>
                <p className="font-extralight text-sm">Сагсны бөмбөг</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">{product.price}₮</p>
                  <button className="bg-blue-500 px-4 py-1.5 bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% rounded-lg text-white font-semibold text-md">
                    Сагслах
                  </button>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Product;
