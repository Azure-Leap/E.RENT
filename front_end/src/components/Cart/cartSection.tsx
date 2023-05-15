import React from "react";
import Image from "next/image";
import mackbook from "../../../public/images/mackbook.png";
import Link from "next/link";

const CartSection = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
      }}
      className="h-screen"
    >
      <div className="flex justify-center p-5">
        <ol className="flex items-center justify-center space-x-2  font-medium text-center text-xl">
          <li className="flex items-center text-yellow-200 ">
            <span className="flex items-center justify-center w-5 h-5 mr-2  border p-5 border-yellow-200 rounded-full shrink-0 dark:border-blue-500">
              1
            </span>
            <span className="hidden sm:inline-flex sm:ml-2">Сагс</span>
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
          <li className="flex items-center text-gray-500 ">
            <span className="flex items-center justify-center w-5 h-5 mr-2 ">
              2
            </span>
            <span className="hidden sm:inline-flex sm:ml-2">Хүргэлт</span>
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
          <li className="flex items-center text-gray-500 ">
            <span className="flex items-center justify-center w-5 h-5 mr-2 ">
              3
            </span>
            Төлбөр төлөх
          </li>
        </ol>
      </div>
      <div className="grid md:grid-cols-3 gap-8 p-10">
        <div className="md:col-span-2 border border-black p-4">
          <div className="grid lg:grid-cols-4 bg-white rounded-md">
            <div className="lg:col-span-3 flex items-center">
              <div>
                <img src="./images/m3.webp" alt="baraa" width={80} />
              </div>
              <div>
                <h1 className="lg:font-semibold text-md sm:text-sm font-semibold max-sm:text-xs">
                  Rotenzo RV6011CFIXN 60*60см хэмжээтэй керамик цахилгаан зуух
                </h1>
                <p className="text-red-500 font-light text-sm max-sm:text-xs">
                  Боломжит үлдэгдэл : 1
                </p>
              </div>
            </div>
            <div className="lg:col-span-1 p-1">
              <div className="flex gap-1 p-1 border border-gray-600">
                <div className="bg-white border border-gray-500 text-center w-full">
                  -
                </div>
                <div className="bg-white border border-gray-500 text-center w-full">
                  1
                </div>
                <div className="bg-white border border-gray-500 text-center w-full">
                  +
                </div>
              </div>

              <div className="w-3/5 p-1 font-bold text-lg">2,999,999₮</div>
              <div className="flex gap-1 text-center text-md font-light">
                <div className="w-3/5 ">
                  <div className="flex gap-2 text-xs">
                    <button className="text-red-700">Delete</button>
                    <button className="text-orange-500">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 border border-black h-60 p-4">
          <div className="grid lg:grid-cols-4 bg-white rounded-md p-2">
            <div className="bg-black text-white w-full h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
