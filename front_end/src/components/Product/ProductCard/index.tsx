import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: any) => {
  return (
    <div className="rounded-xl w-full h-96 bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <div className=" relative flex w-full gap-30 justify-between item-center rounded-xl">
        <img src={product.imgUrl} alt="photo" className="w-full h-64 object-cover" />
        <Link href="/products/[id]" as={`products/${product}/?`}></Link>
      </div>

      <div className="mt-1 p-2">
        <h2 className="text-cyan-500">{product.title}</h2>
        <p className="mt-1 text-sm text-cyan-500">{product.description}</p>

        {/* rating */}
        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <svg aria-hidden="true" className={`w-5 h-5 ${idx < product.rating ? "text-yellow-400" : "text-gray-400"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
        </div>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-lg font-bold text-cyan-500">₮:{product.price}</p>

          <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90%  text-white duration-100 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <button className="text-sm ">Сагслах</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
