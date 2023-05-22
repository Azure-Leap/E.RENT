import React from "react";
import CategoryItem from "../CategoryItem";

const Category = ({ categories, subCategories }: any) => {
  return (
    <div className="container mx-auto pt-5">
      <h1 className="p-5 pl-5 text-2xl text-cyan-500 top-0 left-0 bg-clip-text  rounded-xl transition-all duration-500 font-bold"> Категори </h1>
      {/* tom dev 8-heseg huvaaj bg ni */}
      <div className="grid gap-x-2 gap-y-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
        {/* neg div dotorh 4 jijig div */}
        {categories?.length && categories.map((category: any, idx: number) => <CategoryItem category={category} subCategories={subCategories} key={idx} i={idx} />)}
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
