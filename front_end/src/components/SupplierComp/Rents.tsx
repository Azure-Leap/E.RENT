import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import Product from "../product";
import axios from "axios";
import Link from "next/link";

const Rents = () => {
  const [products, setProducts] = useState([]);

  const getAllBranches = async () => {
    try {
      const result = await axios.get("http://localhost:9000/products");
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
    <div className="">
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
            slidesPerView: 5,
            spaceBetween: 30,
          },
          2100: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        {products.length > 0 &&
          products.map((product) => (
            <>
              <SwiperSlide>
                <div className="p-2 border border-slate-600 rounded-md bg-zinc-50">
                  <img src="" className="w-full h-44 object-cover" />

                  <Link
                    className="font-semibold text-md pt-5 text-left truncate"
                    href=""
                  ></Link>
                  <p className="font-extralight text-sm">Сагсны бөмбөг</p>
                  <div className="flex justify-between items-center gap-2">
                    <p className="font-bold">10,999₮</p>
                    <button className="bg-blue-500 p-2 py-1.5 bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% rounded-lg text-white font-semibold text-md">
                      Сагслах
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
      </Swiper>
    </div>
  );
};

export default Rents;
