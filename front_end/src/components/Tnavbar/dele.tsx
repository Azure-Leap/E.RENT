import React, { useContext } from "react";
import Image from "next/image";
import erent from "../../../public/images/e.rent.png";
import { AuthContext } from "@/context/AuthContext";
import useReadingProgress from "@/hooks/useReadingProgress";
import Link from "next/link";
import profile from "../../../public/images/ekos.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Dele = () => {
  const { supplier, setUser, logOut ,isLogged,setLogged} = useContext(AuthContext);
  // const { user } = useContext(AuthContext);
  useEffect(()=>{
    const logged = window.localStorage.getItem("isLogged")
    if (logged !== null) setLogged(JSON.parse(logged))
  })
  console.log("isLogged",isLogged)
  const [showModal, setShowModal] = React.useState(false);

  const [isModal, setIsModal] = useState(false);

  const completion = useReadingProgress();
  return (
    <>
      <div className="sticky top-0 z-[2000]">
        <div className="flex items-center p-2 backdrop-blur-[60px] shadow-glassShadow  gap-5">
          <div>
            <Image src={erent} className="w-20" />
          </div>

          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
            <div className=" lg:flex-grow">
              {/* <Link
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 font-medium text-lg hover:text-gray-400 mr-4"
              >
                Нүүр
              </Link> */}

              <Link
                href="/services"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 font-medium text-lg hover:text-gray-400"
              >
                Үйлчилгээ
              </Link>
            </div>
            {/* <div>
              <input className="h-20" />
            </div> */}

            <div className="p-2 rounded-lg text-white">
              {isLogged?(
<>
  <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <Image
            className="w-12 h-12 rounded-full border-2 border-green-400 "
            src={profile}
          />
          {/* <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          /> */}
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
              className="w-12 h-12 rounded-full border-2 border-green-400  "
              src={profile}
            />
            <h1 className="text-black text-sm font-semibold flex items-center ">
              {/* Bilguunerkh@gmail.com */}
              {/* {supplier.supplier_email} */}
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
                  <Link href="/User">Профайл</Link>
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
                  {/* {active ? (
                    <ArchiveActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArchiveInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )} */}
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
                  {/* {active ? (
                    <MoveActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <MoveInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )} */}
                  Хэтэвч
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logOut}
                  className={`${
                    active
                      ? "bg-green-500 text-white"
                      : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {/* {active ? (
                    <DeleteActiveIcon
                      className="mr-2 h-5 w-5 text-violet-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <DeleteInactiveIcon
                      className="mr-2 h-5 w-5 text-violet-400"
                      aria-hidden="true"
                    />
                  )} */}
                  Гарах
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  </>
                ):(<>
              
                  <button
                  style={{
                    background:
                      "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                  }}
                        className="p-2 font-medium text-white rounded-lg border-2 border-yellow-200"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        Нэвтрэх
                      </button>
                      {showModal ? (
                        <>
                          <div className="justify-end items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto mx-end max-w-3xl">
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start align-middle justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                                  <button className="bg-cyan-500 text-white active:bg-cyan-900 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-100">
                                    <a href="/UserAuthEdit/loginUser">Түрээслэгч</a>
                                  </button>
                                  <button className="bg-cyan-500 text-white active:bg-cyan-900 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-100 ml-4">
                                    <a href="/login">Түрээслүүлэгч</a>
                                  </button>
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all py-0 pr-3 mt-1"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                  >
                                    <p className="text-xl py-0" >X</p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                  </>
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
                <a href="/">Нүүр</a>
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
      <div
        id="dropdownAvatarName"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium ">Pro User</div>
          <div className="truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  );
};

export default Dele;






