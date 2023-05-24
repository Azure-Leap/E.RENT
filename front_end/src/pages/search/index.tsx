import ProductCard from "@/components/Product/ProductCard";
import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { title } = router.query;

  const fetchData = async () => {
    console.log("title", title);
    const res = await axios(`http://localhost:9000/products?title=${title}`);
    const data = await res.data;
    setProducts(data.products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container grid grid-cols-4 p-10 gap-5">
      {!isLoading ? (
        products.map((product, index: number) => {
          return <ProductCard product={product} key={index} />;
        })
      ) : (
        <h1>Уншиж байна...</h1>
      )}
    </div>
  );
};

export default Search;
