import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import Link from "next/link";

const posterData = [
  {
    image:
      "https://media.istockphoto.com/id/1397371364/photo/young-woman-using-laptop-at-new-house.jpg?s=612x612&w=0&k=20&c=jIyh1_DGriEe5DPJ3yajSIwp4230ChR7A1dfrtyk4HM=",
    title: "Store",
  },

  {
    image:
      "https://images.unsplash.com/photo-1615404420216-cc423164563f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Food",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617048551602-f377d4174089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Blog",
  },
  {
    image:
      "https://media.istockphoto.com/id/1402501680/photo/mature-woman-with-moving-boxes-in-new-home.jpg?s=612x612&w=0&k=20&c=6CcFDHXuZ9ZpOmzlI9qcUzGrmtXw1YvXpG64hQHuxAc=",
    title: "Fitness",
  },
];

const SwiperSection = () => {
  return (
    <div className="container mx-auto pt-5">
      <Swiper
        slidesPerView={1}
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
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          2100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        {posterData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className=" text-white text-3xl pt-20">
              <img
                style={{ width: "800px", height: "500px" }}
                src={item.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSection;
