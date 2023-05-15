import NavLayout from "@/Layout/NavLayout";
import React from "react";
import ProductHeader from "@/components/Product/ProductCard/ProductHeader";
import CategoryList from "../components/Categories";
import AddProduct from "@/components/AddProduct";
import SwiperSection from "@/components/Swiper/swiper";
import Product from "@/components/Product/product";
// import LoginModal from "@/components/Auth/Login";
import Apart from "@/components/Product/apart";
import Footer from "@/components/Footer/footer";
import Medee from "@/components/Medee/medee";
import BackToTopButton from "@/components/BackButton/BackToTopButton";
import LoginModal from "@/components/Auth/Login";
import Hover from "@/components/Hover/hover";
import ProductSwiper from "@/components/Product/ProductCard/ProductSwiper";
import Navbar from "@/components/Nav/Navbar";
import HomeChatIcon from "@/components/Realtime_chat/HomeChatIcon";

const Index = () => {
  return (
    <NavLayout>
      <SwiperSection />
      <CategoryList />
      {/* <Product /> */}
      <ProductHeader />
      <ProductSwiper />
      <Hover />
      <Apart />
      <Medee />
      <Footer />
      <BackToTopButton />
      <HomeChatIcon />
    </NavLayout>
  );
};
export default Index;
