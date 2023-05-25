/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import axios from "axios";

import { useState } from "react";
import { useRouter } from "next/router";
import NavLayout from "@/Layout/NavLayout";
import Image from "next/image";
import dynamic from "next/dynamic";
import Contact from "./contact";
import { BASE_URL_API } from "@/util/variables";
const Map = dynamic(() => import("../../components/MapClient/map"), {
  ssr: false,
});

const MapDetail = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const result = await axios.get(
          `${BASE_URL_API}/products/${router.query.map}`
        );
        console.log("PP", result.data.product);
        setProduct(result.data.product);
        setIsLoading(false);
      } catch (error) {
        console.log("ERR", error);
        setIsLoading(false);
      }
    };
    getProduct();
  }, []);

  return (
    <NavLayout>
      <div className="relative">
        {isLoading && <div>Loading</div>}

        <div style={{ zIndex: 0 }}>
          <Map />
        </div>
        <div className="absolute bottom-4 left-4 z-[10000]">
          <Contact />
        </div>
        {!isLoading && (
          <div className="p-2 w-70 border border-black rounded-md bg-amber-200 absolute top-5 right-5 z-[10000] shadow-2xl">
            <img
              src={product?.imgUrl}
              alt="ImgUrl"
              className="w-full h-60 object-cover border border-black"
            />

            <div className="font-semibold text-xl pt-2">{product?.title}</div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50"></div>

            <div className="flex justify-between items-center">
              <p className="font-medium text-sm ">Хаяг байршил</p>
              <h1 className="font-extrabold text-black text-lg">13 хороолол</h1>
            </div>

            <div className="w-full h-0.5 bg-black my-2 scale-y-50"></div>
            <div className="flex justify-between items-center">
              <p className="font-extralight text-sm">
                Тохиролцоно /{" "}
                <span className="bg-red-600 rounded-sm  text-white px-1 p-1 font-semibold">
                  Тохиролцохгүй
                </span>
              </p>
            </div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
            <div className="flex justify-between items-center">
              <p className="font-extralight text-sm">
                <span className="bg-blue-500  rounded-sm  text-white p-1 font-semibold">
                  Шинэ
                </span>{" "}
                / Хуучин
              </p>
              <p className="font-bold text-2xl">{product.price}₮</p>
            </div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
          </div>
        )}
      </div>
    </NavLayout>
  );
};

export default MapDetail;
