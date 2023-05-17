import NavLayout from "@/Layout/NavLayout";
import React from "react";

import CategoryList from "../components/Categories";

import SwiperSection from "@/components/Swiper/swiper";

import Footer from "@/components/Footer/footer";
import Medee from "@/components/Medee/medee";
import BackToTopButton from "@/components/BackButton/BackToTopButton";

import Hover from "@/components/Hover/hover";
import ProductSwipers from "@/components/Product/ProductSwipers.tsx/productswiper";

import About from "@/components/About/about";

import HomeChatIcon from "@/components/Realtime_chat/HomeChatIcon";

const Index = () => {
  return (
    <NavLayout>
      <SwiperSection />
      <CategoryList />
      <ProductSwipers />
      <Hover />
      <About />
      {/* <Apart /> */}
      <Medee />
      <Footer />
      <BackToTopButton />
      <HomeChatIcon />
    </NavLayout>
  );
};
export default Index;
