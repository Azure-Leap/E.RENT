import ProductCard from "@/components/Product/ProductCard";
import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import NavLayout from "@/Layout/NavLayout";

const Search = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { title } = router.query;

  const fetchData = async () => {
    console.log("title", title);
    const res = await axios(`https://erent.onrender.com/products?title=${title}`);
    const data = await res.data;
    setProducts(data.products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavLayout>
      <div className="container grid grid-cols-4 p-10 gap-5">
        {!isLoading ? (
          products.map((product, index: number) => {
            return <ProductCard product={product} key={index} />;
          })
        ) : (
          <h1 className="flex items-center justify-center">Уншиж байна...</h1>
        )}
      </div>
    </NavLayout>
  );
};

export default Search;
