/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import axios from "axios";
import { Dialog } from "@headlessui/react";
import { ProductAxiosContext } from "@/context/ProductAxiosContext";

const Sidebar1 = () => {
  const { subCat, setSubCat, getAllSubcategories, createProduct, handleChange, travelBarilt }: any = useContext(ProductAxiosContext);
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getAllBranches = async () => {
    try {
      const result = await axios.get("http://localhost:9000/products", {});
      console.log(result.data.products);
      setProducts(result.data.products);
    } catch (err) {
      console.log("Err", err);
    }
  };

  useEffect(() => {
    getAllBranches();
    getAllSubcategories();
  }, [getAllSubcategories]);

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex justify-between h-20 items-center w-full">
        <div className="flex items-center font-semibold text-2xl">
          <div className="h-10 w-1 bg-red-600 mr-2"></div>
          <p>Түрээслүүлэгчийн бараа</p>
        </div>
        <h1
          style={{
            background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
          }}
          className="text-white p-2 font-semibold rounded-md text-lg"
          onClick={() => setIsOpen(true)}
        >
          Шинэ түрээс үүсгэх
        </h1>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-5">
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          {/* Full-screen scrollable container */}
          <div className="fixed inset-0 overflow-y-auto">
            {/* Container to center the panel */}
            <div className="flex min-h-full items-center justify-center p-4">
              {/* The actual dialog panel  */}
              <Dialog.Panel className="mx-auto max-w-sm  bg-white w-full rounded-sm">
                <div className="p-5">
                  <div>
                    <div className="flex items-center sm:text-md lg:text-xl font-semibold">
                      <div className="h-8 w-1 bg-red-600 mr-2"></div>
                      <p>Бараа нэмэх</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 pt-5">
                    <input type="text" name="title" id="title" onChange={travelBarilt} className="w-full rounded-md focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Барааны нэр" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-5">
                    <input type="text" name="title" id="title" onChange={travelBarilt} className="w-full rounded-md focus:ring-indigo-600 sm:text-sm" placeholder="Барааны товч нэр" />

                    <input type="number" name="price" id="price" onChange={travelBarilt} className="w-full rounded-md focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Барааны үнэ" />
                  </div>
                  <div className="grid grid-cols-1 pt-5">
                    <textarea
                      name="description"
                      id="description"
                      rows={4}
                      onChange={travelBarilt}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Барааны тайлбар..."
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 pt-5">
                    <input
                      type="text"
                      name="imgUrl"
                      id="imgUrl"
                      onChange={travelBarilt}
                      className="w-full rounded-md border border-black focus:ring-indigo-600 sm:text-sm"
                      placeholder="Барааны нүүр зураг URL"
                    />
                  </div>
                  <div className="grid grid-cols-1 pt-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Барааны ангилал сонгох</label>
                    <select
                      className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChange}
                    >
                      <option selected>Ангилал сонгох</option>
                      {subCat?.map((el: any, index: number) => (
                        <option key={index} value={el._id}>
                          {el.title}
                        </option>
                      ))}
                      {/* <option value="Гэрийн Тавилга">Гэрийн Тавилга</option>
                      <option value="Эрэгтэй & Эмэгтэй">
                        Эрэгтэй & Эмэгтэй
                      </option>
                      <option value="Хүүхэд">Хүүхэд</option>
                      <option value="Цахилгаан хэрэгсэл">
                        Цахилгаан хэрэгсэл
                      </option>
                      <option value="Цахилгаан хэрэгсэл">Компьютер</option>
                      <option value="Цахилгаан хэрэгсэл">Машин</option> */}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 pt-5">
                    <button
                      style={{
                        background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                      }}
                      className="p-2 font-semibold text-white text-lg"
                      onClick={createProduct}
                    >
                      Нэмэх
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-6 sm:grid-cols-2  gap-4">
        {products?.length > 0 &&
          products?.map((product: any, index: number) => (
            <>
              <SwiperSlide key={index}>
                <div className="p-2 border border-black rounded-md bg-zinc-50">
                  <img src={product?.imgUrl} alt="pic" className="w-full h-60 object-cover" />

                  <Link className="font-semibold text-md pt-5  truncate" href={`Products/${product?._id}`}>
                    {product?.title}
                  </Link>
                  <p className="font-extralight text-sm">Сагсны бөмбөг</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{product?.price}₮</p>
                    <button className="bg-blue-500 px-4 py-1.5 bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% rounded-lg text-white font-semibold text-md">
                      Сагслах
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
      </div>
    </div>
  );
};

export default Sidebar1;
