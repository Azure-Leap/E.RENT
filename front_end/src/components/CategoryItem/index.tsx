import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const CategoryItem = ({ category, i, subCategories }: any) => {
  const router = useRouter();

  return (
    <div className="border border-gray-400 rounded-sm p-4 shadow-xl">
      <h2 className="text-cyan-500 font-semibold">{category?.title}</h2>

      {subCategories?.filter((el: any) => el.category?._id === category?._id)
        .length === 1 ? (
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
                className="cursor-pointer object-cover flex flex-1 md:h-32 max-md:h-16 max-sm:h-16 md:w-full sm:w-screen max-sm:w-screen "
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
                className="cursor-pointer object-cover md:h-32 max-md:h-16 max-sm:h-16 md:w-full sm:w-screen max-sm:w-screen border border-gray-400 shadow-md"
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
