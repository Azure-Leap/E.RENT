import ProductCard from "@/components/Product/ProductCard";
import ProductSideBar from "@/components/Product/Productsidebar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Category = ({ products }: any) => {
  const router = useRouter();
  console.log("products", products);
  return (
    <div className="flex">
      <ProductSideBar />
      <div className="flex">
        {products.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;

export async function getServerSideProps(context: any) {
  console.log("IIDD", context.query);
  const { id } = context.query;
  const data: any = await fetch("http://localhost:9000/subcategories/" + id + "/products").then((res) => res.json());
  console.log("DD", data);

  return { props: { products: data.products } };
}
