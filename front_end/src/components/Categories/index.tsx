import Category from "@/components/Category";
import axios from "axios";
import React, { useState, useEffect } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/categories`);
      const res1 = await axios.get(`http://localhost:9000/subcategories`);

      setCategories(res.data?.categories);
      setSubCategories(res1.data?.categories);
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
