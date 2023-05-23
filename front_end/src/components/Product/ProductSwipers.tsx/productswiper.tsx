/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import Product from "../product";
import axios from "axios";
import Link from "next/link";

const ProductSwipers = () => {
  const [products, setProducts] = useState([]);

  const getAllBranches = async () => {
    try {
      const result = await axios.get("https://erent.onrender.com/products");

      setProducts(result.data.products);
    } catch (err) {
      console.log("Err", err);
    }
  };
  useEffect(() => {
    getAllBranches();
  }, []);
  return (
    <div className="container mx-auto pt-10">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          600: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },

          1350: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          2100: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        {products.length > 0 &&
          products.map((product: any, idx: number) => (
            <>
              <SwiperSlide>
                <div className="p-2 border border-slate-600 rounded-md bg-zinc-50" key={idx}>
                  <img src={product.imgUrl} className="w-full h-60 object-cover " />

                  <div className="font-semibold text-md pt-5 text-left truncate">{product.title}</div>
                  <p className="font-extralight text-sm">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{product.price}₮</p>
                    <Link href={`Products/${product._id}`}>
                      <button className="bg-blue-500 px-4 py-1.5 bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% rounded-lg text-white font-semibold text-md">
                        Дэлгэрэнгүй
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductSwipers;
