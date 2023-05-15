import NavLayout from "@/Layout/NavLayout";
import React from "react";
import SwiperSection from "@/components/Swiper/swiper";
import Product from "@/components/Product/product";
import Apart from "@/components/Product/apart";
import Footer from "@/components/Footer/footer";
import Medee from "@/components/Medee/medee";
import BackToTopButton from "@/components/BackButton/BackToTopButton";
import LoginModal from "@/components/Auth/Login";
import Hover from "@/components/Hover/hover";
import ProductSwipers from "@/components/Product/ProductSwipers.tsx/productswiper";
import CategoryList from "@/components/Categories";
import About from "@/components/About/about";

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
    </NavLayout>
  );
};
export default Index;
