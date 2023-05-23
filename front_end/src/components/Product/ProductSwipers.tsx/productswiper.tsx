import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";
import like from "../../../../public/images/like.png";

const ProductSwipers = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, updateCard } = useContext(CartContext);

  const getAllBranches = async () => {
    try {
      const result = await axios.get("http://localhost:9000/products");

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
                <div
                  className="p-2 border border-slate-600 rounded-md bg-zinc-50"
                  key={idx}
                >
                  <img
                    src={product.imgUrl}
                    className="w-full h-60 object-cover "
                  />

                  <div className="font-semibold text-md pt-5 text-left truncate">
                    {product.title}
                  </div>
                  <p className="font-extralight text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{product.price}₮</p>
                    <button onClick={() => updateCard(product, "inc")}>
                      <Image src={like} width={30} />
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

export default ProductSwipers;
