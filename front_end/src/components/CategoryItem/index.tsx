import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const CategoryItem = ({ category, i, subCategories }: any) => {
  const router = useRouter();

  return (
    <div className="rounded-lg border-2 border-violet-200 shadow-lg flex flex-col p-4">
      {/* {i === 0 && ( */}
      <h2 className=" text-md bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% top-0 left-0 bg-clip-text text-transparent rounded-xl transition-all duration-500 font-bold ">
        {category?.title}
      </h2>

      {subCategories?.filter((el: any) => el.category?._id === category?._id).length === 1 ? (
        subCategories
          ?.filter((el: any) => el?.category._id === category?._id)
          .map((el: any, idx: number) => (
            <div className="md:grid-cols-1 flex flex-1" key={idx}>
              <Image
                onClick={() => {
                  console.log(el);
                  router.push({ pathname: "/categories/" + el._id });
                }}
                src={el.imgUrl}
                alt="cate_pic"
                height={400}
                width={400}
                style={{ height: "100%", width: "100%" }}
                className="cursor-pointer object-cover flex flex-1 md:h-32 max-md:h-16 max-sm:h-16 md:w-full sm:w-screen max-sm:w-screen rounded-md"
              />
            </div>
          ))
      ) : (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
          {subCategories
            ?.filter((el: any) => el.category?._id === category?._id)
            .map((subCategory: any, idx: number) => (
              <Image
                key={idx}
                onClick={() => {
                  console.log("/subcategories/" + subCategory?._id);
                  router.push({ pathname: "/categories/" + subCategory._id });
                }}
                src={subCategory?.imgUrl}
                alt="sub_photo"
                width={300}
                height={300}
                className="cursor-pointer object-cover md:h-32 max-md:h-16 max-sm:h-16 md:w-full sm:w-screen max-sm:w-screen rounded-md"
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
