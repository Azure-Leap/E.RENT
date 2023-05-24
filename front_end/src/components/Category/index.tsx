import React from "react";
import CategoryItem from "../CategoryItem";

const Category = ({ categories, subCategories }: any) => {
  return (
    <div className="container mx-auto pt-5">
      <h1 className="p-5 text-2xl text-cyan-500 font-bold"> Категори </h1>

      <div className="grid grid-cols-4 gap-4">
        {categories?.length &&
          categories.map((category: any, idx: number) => (
            <CategoryItem
              category={category}
              subCategories={subCategories}
              key={idx}
              i={idx}
            />
          ))}
      </div>
    </div>
  );
};

export default Category;

function removeDuplicates(arr: any) {
  let unique: Array<any> = [];
  if (arr) {
    arr.forEach((element: any) => {
      if (!(unique.findIndex((el) => el?._id === element.category?._id) > -1)) {
        unique.push(element.category);
      }
    });
    return unique;
  }

  return unique;
}
