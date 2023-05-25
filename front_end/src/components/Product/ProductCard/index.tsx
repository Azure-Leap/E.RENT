/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import like from "../../../../public/images/like.png";
import { useRouter } from "next/router";
import { CartContext } from "@/context/CartContext";

const ProductCard = ({ product }: any) => {
  const router = useRouter();
  const { addFavProductToUser } = useContext(CartContext);
  return (
    <div className="rounded-xl w-full h-[420px] bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <div className=" relative flex  w-full gap-30 justify-between item-center rounded-xl">
        <img src={product.imgUrl} alt="photo" className="w-full h-64 object-cover" />
        <Link href="/products/[id]" as={`products/${product}/?`}></Link>
      </div>

      <div className="mt-1 p-2">
        <div className="flex">
          <div>
            <h2 className="text-cyan-500">{product.title}</h2>
            <p className="mt-1 text-sm text-cyan-500 ">{product.description}</p>
          </div>
          <div>
            <button
              onClick={() => {
                console.log("UP");
                addFavProductToUser(product);
                console.log("DOWN");
              }}
            >
              <Image src={like} alt="photo" width={30} />
            </button>
          </div>
        </div>

        {/* rating */}
        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, idx: number) => (
              <svg
                aria-hidden="true"
                className={`w-5 h-5 ${idx < product.rating ? "text-yellow-400" : "text-gray-400"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                key={idx}
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
        </div>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-lg font-bold text-cyan-500">₮:{product.price}</p>

          <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90%  text-white duration-100 hover:bg-blue-600">
            <button
              className="text-sm "
              onClick={() => {
                router.push({ pathname: "/Products/" + product._id });
              }}
            >
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable @next/next/no-img-element */
// import React, { useState, useEffect, useContext } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import like from "../../../../public/images/like.png";
// import { useRouter } from "next/router";
// import { CartContext } from "@/context/CartContext";

// const ProductCard = ({ product }: any) => {
//   const [products, setProducts] = useState([]);
//   const { cartItems, updateCard } = useContext(CartContext);

//   const router = useRouter();
//   return (
//     <>
//       <div
//         className="p-2 border border-slate-600 rounded-md bg-zinc-50"
//         // key={idx}
//       >
//         <img src={product.imgUrl} className="w-full h-60 object-cover " />

//         <div className="font-semibold text-md pt-5 text-left truncate">
//           {product.title}
//         </div>
//         <p className="font-extralight text-sm">{product.description}</p>
//         <div className="flex justify-between items-center">
//           <p className="font-bold">{product.price}₮</p>
//           <button onClick={() => updateCard(product, "inc")}>
//             <Image src={like} alt="photo" width={30} />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCard;
