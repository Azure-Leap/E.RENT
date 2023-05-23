import Category from "@/components/Category";
import React, { useState, useEffect } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`https://erent.onrender.com/categories`);
    const data = await res.json();
    const res1 = await fetch(`https://erent.onrender.com/subcategories`);
    const data1 = await res1.json();

    setCategories(data?.categories);
    setSubCategories(data1?.categories);
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
