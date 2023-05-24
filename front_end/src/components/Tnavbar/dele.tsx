import Image from "next/image";
import erent from "../../../public/images/e.rent.png";

import useReadingProgress from "@/hooks/useReadingProgress";
import Link from "next/link";
import profile from "../../../public/images/ekos.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "@/context/CartContext";
import like from "../../../public/images/like.png";
import { AuthContext } from "@/context/AuthContext";

const Dele = () => {
  const { user, setUser, supplier, setSupplier } = useContext<any>(AuthContext);
  const { cartItems }: any = useContext(CartContext);
  const [role, setrole] = useState("user");

  const logout = () => {
    try {
      if (role === "user") {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("card");
        // setCartItems = null;
      } else {
        setSupplier(null);
        localStorage.removeItem("supplier");
      }
    } catch (err) {
      console.log("ERROR", err);
    }
  };
  const handleOut = (go: any) => {
    if ("Гарах" === go) {
      logout();
    }
  };
  const completion = useReadingProgress();

  return (
    <>
      <div className="sticky top-0 z-[2000]">
        <div className="flex items-center p-2 backdrop-blur-[60px] shadow-glassShadow  gap-5">
          <div>
            <Image src={erent} alt="pic" className="w-20" />
          </div>

          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="lg:flex-grow">
              <div className="flex justify-between">
                <Link
                  href="/services"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 font-medium text-lg hover:text-gray-400"
                >
                  Үйлчилгээ
                </Link>
                <Link href={"/Cart"}>
                  <button className="relative scale-75">
                    <Image src={like} width={40} alt="pic" />
                    {cartItems?.length > 0 && (
                      <span
                        style={{
                          background:
                            "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                        }}
                        className="absolute -top-2 left-6 rounded-full p-0.5 px-2 text-sm text-red-50"
                      >
                        {cartItems?.length}
                      </span>
                    )}
                  </button>
                </Link>
              </div>
            </div>

            {/* <Link href={"/Cart"}>
              <button className="relative scale-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-10 w-10 text-cyan-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {cartItems?.productList?.length > 0 && (
                  <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                    {cartItems?.productList?.length}
                  </span>
                )}
              </button>
            </Link> */}
            <div className="p-2 rounded-lg text-white">
              {user || supplier ? (
                <>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button>
                        <Image
                          className="w-12 h-12 rounded-full border-2 border-green-400 "
                          src={
                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                          }
                          alt="pic"
                          height={48}
                          width={48}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[20000]">
                        <div className="px-2 py-2 flex gap-1 ">
                          <Image
                            height={48}
                            width={48}
                            className="w-12 h-12 rounded-full border-2 border-green-400  "
                            src={
                              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                            }
                            alt="pic"
                          />
                          <h1 className="text-black text-sm font-semibold flex items-center ">
                            {user?.email ? user.email : supplier?.email}
                          </h1>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-green-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <Link href={user ? "/user" : "/supplier"}>
                                  Профайл
                                </Link>
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-green-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Таалагдсан
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-green-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Хэтэвч
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-green-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                onClick={() => handleOut("Гарах")}
                              >
                                Гарах
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </>
              ) : (
                <div
                  style={{
                    background:
                      "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                  }}
                  className="p-2 font-medium text-white rounded-lg border-2 border-yellow-200"
                >
                  <Link href="/login">Нэвтрэх</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          style={{ background: "#fff" }}
          className="h-10 flex justify-center items-center text-black shadow-2xl border-b-2  border-t-2 border-grey-800 max-sm:hidden sm:hidden md:hidden lg:hidden 2xl:flex"
        >
          <ul className="flex items-center font-light text-sm text-cyan-700 gap-10">
            <li className="relative group">
              <button className="hover:opacity-50 cursor-default">
                <Link href="/">Нүүр</Link>
              </button>
            </li>
            <li className="relative group">
              <button className="hover:opacity-50 cursor-default">
                Гэрийн Тавилга
              </button>
              <div className="absolute top-0 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform">
                <div className="relative bg-white text-black h-40 p-2 rounded-sm border border-black shadow-xl w-full">
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="uppercase tracking-wider text-gray-600 font-medium text-[13px]">
                          Гэрийн Тавилга
                        </p>
                        <p className="uppercase tracking-wider text-gray-600 font-medium text-[13px]">
                          Гэрийн Тавилга
                        </p>
                        <p className="uppercase tracking-wider text-gray-600 font-medium text-[13px]">
                          Гэрийн Тавилга
                        </p>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-600 font-medium text-[13px]">
                          Гэрийн Тавилга
                        </p>
                        <p className="uppercase tracking-wider text-gray-600 font-medium text-[13px]">
                          Гэрийн Тавилга
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group">
              <button className="hover:opacity-50 cursor-default">
                Эрэгтэй & Эмэгтэй
              </button>
              <div className="absolute top-0 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform">
                <div className="relative bg-white text-black h-40 p-2 rounded-sm border border-black">
                  <p>Хүүхэдийн</p>
                </div>
              </div>
            </li>
            <li className="relative group">
              <button className="hover:opacity-50 cursor-default">
                Хүүхэд
              </button>
              <div className="absolute top-0 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform">
                <div className="relative bg-white text-black h-40 p-2 rounded-sm border border-black">
                  <p>Хүүхэдийн</p>
                </div>
              </div>
            </li>
            <li className="relative group">
              <button className="hover:opacity-50 cursor-default">Спорт</button>
              <div className="absolute top-0 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform">
                <div className="relative bg-white text-black h-40 p-2 rounded-sm border border-black">
                  <p>Хүүхэдийн</p>
                </div>
              </div>
            </li>
            <li className="relative group">
              <button className="hover:opacity-50 cursor-default">
                Цахилгаан хэрэгсэл
              </button>
              <div className="absolute top-0 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform">
                <div className="relative bg-white text-black h-40 p-2 rounded-sm border border-black">
                  <p>Хүүхэдийн</p>
                </div>
              </div>
            </li>
            <li className="relative group">
              <button className="hover:opacity-50 cursor-default">
                Компьютер
              </button>
              <div className="absolute top-0 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform">
                <div className="relative bg-white text-black h-40 p-2 rounded-sm border border-black">
                  <p>Хүүхэдийн</p>
                </div>
              </div>
            </li>
            <li className="relative group">
              <button className="hover:opacity-50 cursor-default">Машин</button>
              <div className="absolute top-0 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform">
                <div className="relative bg-white text-black h-40 p-2 rounded-sm border border-black">
                  <p>Хүүхэдийн</p>
                </div>
              </div>
            </li>
            <li className="relative group">
              <button className="hover:opacity-50 cursor-default">Ном</button>
              <div className="absolute top-0 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[360px] transform">
                <div className="relative bg-white text-black h-40 p-2 rounded-sm border border-black">
                  <p>Хүүхэдийн</p>
                </div>
              </div>
            </li>
          </ul>
          <span
            style={{
              transform: `translateX(${completion - 100}%)`,
              background: "#540375",
            }}
            className="absolute h-0.5 w-full bottom-0"
          ></span>
        </div>
      </div>
      {/* <div id="dropdownAvatarName" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium ">Pro User</div>
          <div className="truncate">name@flowbite.com</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </Link>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white " onClick={handleOut}>
            Гарах
          </a>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Dele;
