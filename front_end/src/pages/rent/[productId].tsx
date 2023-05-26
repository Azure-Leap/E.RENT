/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import box from "../../../public/images/box.png";
import NavLayout from "@/Layout/NavLayout";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import like from "../../../public/images/like.png";
const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });

const Detail = ({ product }: any) => {
  const router = useRouter();
  const { cartItems, updateCard } = useContext(CartContext);
  let [isOpen, setIsOpen] = useState(true);
  console.log("mm===>", product);
  // const { cartItems, addItemToCart, addCartToList, updateCard }: any =
  //   useContext(CartContext);
  // const addCartItem = (_id: string, price: number) => {
  //   console.log("manai cartItems:", cartItems);
  //   const isHaveProduct = cartItems.filter((item: any) => item._id == _id);
  //   if (isHaveProduct) {
  //     setCartItems(cartItems.map((item: any) => ({ ...item, quantity: item.quantity + 1 })));
  //   } else {
  //     setCartItems(cartItems.push({ _id, price, quantity: 1 }));
  //   }
  // };
  if (router.isFallback) {
    return <div>Уншиж байна ...</div>;
  }

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <NavLayout>
      <div className="pt-5">
        <div className="container mx-auto  border border-black ">
          <div className="md:grid grid-cols-2 gap-6 sm:space-y-2 max-sm:space-y-0 md:space-y-0 p-5">
            <div className="">
              <img className="" src={product.imgUrl} width={600} />
            </div>
            <div className="text-black">
              <div className="flex justify-between">
                <h1 className="font-bold text-4xl sm:pt-1 md:pt-0 max-sm:pt-1">{product.title}</h1>
                <button onClick={() => updateCard(product, "inc")}>
                  <Image src={like || ""} alt="photo" width={40} />
                </button>
              </div>
              <p className="md:font-normal  sm:font-extralight sm:text-sm  ">Товч нэр энэ хэсэгт</p>

              <div className="w-full h-0.5 bg-black my-2 scale-y-50"></div>
              <p className="font-medium text-sm sm:hidden md:block">Түрээслэх үнэ</p>
              <h1 className="font-extrabold text-red-600 text-2xl">{product.price}₮</h1>
              <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
              <p className="font-medium text-sm sm:hidden md:block ">Шинэ / Хуучин</p>
              <h1 className="font-extrabold text-black text-lg">Хуучин</h1>
              <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
              <p className="font-medium text-sm sm:hidden md:block">Хаяг байршил</p>
              <h1 className="font-extrabold text-black text-lg">13 хороолол</h1>
              <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>

              <div className="bg-white border border-black text-black h-20 rounded-lg flex gap-4 items-center px-5">
                <Image style={{ width: "52px", height: "50px" }} src={box} alt="box image" />
                <div>
                  <h1>Хүргэлтийн нөхцөл</h1>
                  <p>
                    Бэлэн бараа
                    <span className="text-red-500 font-semibold"> 48-72</span> цагт хүргэгдэнэ
                  </p>
                </div>
              </div>
              <div className="pt-2 md:space-y-0 text-white">
                <button
                  onClick={openModal}
                  className="bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% text-lg font-bold rounded-lg border border-gray-500 p-5 w-full"
                >
                  <p>ТҮРЭЭСЛЭН АВАХ</p>
                </button>
                <>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center mt-10">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all items-center">
                              <Dialog.Title as="h3" className="text-md font-semibold leading-6 text-gray-900">
                                <p> Та аль нөхцөлийг сонгох вэ?</p>
                                <div className="grid lg:grid-cols-2 gap-5  text-black text-center font-light text-lg h-10 pt-2 items-center">
                                  <button className="rounded-md border border-transparent bg-blue-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
                                    <Link href={`../Done/${product?._id}`}>Очиж авах</Link>
                                  </button>

                                  <button className="rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2">
                                    Хүргэлтээр авах
                                  </button>
                                </div>
                              </Dialog.Title>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="text-3xl font-bold text-gray-600">
              <h1>Ижил зарууд</h1>
            </div>
            {/* <div className="grid lg:grid-cols-6 pt-2 gap-5">
              <div className="border border-black text-black h-60">1</div>
              <div className="border border-black text-black h-60">2</div>
              <div className="border border-black text-black h-60">3</div>
              <div className="border border-black text-black h-60">4</div>
              <div className="border border-black text-black h-60">5</div>
              <div className="border border-black text-black h-60">6</div>
            </div> */}
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export async function getServerSideProps({ query }: any) {
  const result = await fetch(`http://localhost:9000/products/${query.productId}`);
  const data = await result.json();
  return {
    props: { product: data.product },
  };
}

export default Detail;
