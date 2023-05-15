import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import { useState, useEffect } from "react";
import ProductCard from "..";

const ProductSwiper = () => {
  const [products, setProducts] = useState([""]);
  // console.log(products.length);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:9000/products`);
      const data = await res.json();
      console.log(data);
      setProducts(data?.products);
    };
    fetchData();
  }, []);
  console.log("product datas:", products);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
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
        2100: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      navigation={true}
      className="container mx-auto "
    >
      {products?.map((product: any, idx: number) => (
        <SwiperSlide key={idx}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
