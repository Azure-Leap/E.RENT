import ProductCard from "@/components/Product/ProductCard";
import ProductSideBar from "@/components/Product/Productsidebar";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { BASE_URL_API } from "@/util/variables";
import NavLayout from "@/Layout/NavLayout";

const Category = ({ products }: any) => {
  // const router = useRouter();
  // console.log("products", products);
  // const {cartItems} = useContext(Cart)
  return (
    <NavLayout>
      <div className="pt-5">
        <div className="flex gap-5 sm:grid-cols-1  md:grid-cols-4">
          <ProductSideBar />
          <div className="grid grid-cols-4 gap-4 px-10">
            {products.map((product: any, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export default Category;

export async function getServerSideProps(context: any) {
  console.log("IIDD", context.query);
  const { id } = context.query;
  const data: any = await fetch(`${BASE_URL_API}/subcategories/` + id + "/products").then((res) => res.json());
  console.log("DD", data);

  return { props: { products: data.products } };
}
