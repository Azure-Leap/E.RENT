import Category from "@/components/Category";
import { BASE_URL_API } from "@/util/variables";
import React, { useState, useEffect } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`${BASE_URL_API}/categories`);
      const data = await res.json();
      const res1 = await fetch(`${BASE_URL_API}/subcategories`);
      const data1 = await res1.json();

      setCategories(data?.categories);
      setSubCategories(data?.categories);
    } catch (error) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Category categories={categories} subCategories={subCategories} />
    </div>
  );
};

export default CategoryList;
