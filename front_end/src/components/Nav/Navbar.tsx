import Subnav from "./Subnav";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NabPages from "./NabPages";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import { profile } from "console";

const imgPic01 = require("../../assets/images/notification-bell.png");
const imgPic02 = require("../../assets/images/navbar_cart.png");
const imgPic03 = require("../../assets/images/navbar_avatar.png");
const imgPic04 = require("../../assets/images/navbar_bookmark.png");

interface Inav {
  nav: Boolean;
  setNav: (nav: boolean) => void;
}
const Navbar = ({ products }: any) => {
  const router = useRouter();
  console.log("firstrout",router)
  // search heseg
  const [search, setSearch] = useState(products);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    const { value } = e.target.searchInput;
    console.log("value:", value);
    const filterProducts = products?.filter((product: any) =>
      product.title.toLowerCase().include(value.toLowerCase())
    );
    const res = await axios(`http://localhost:9000/products?title=${value}`);
    console.log("search", res);
    router.push(`/search?title=${value}`);
    setSearch(filterProducts);
  };

  // responsive mobile menu

  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  // Login?
  const { renter, logOut, isLogged ,setLogged} = useContext(AuthContext);

  useEffect(()=>{
    const logged = window.localStorage.getItem("isLogged")
    if (logged !== null) setLogged(JSON.parse(logged))
  })
  console.log("isLogged",isLogged)

  const [showModal, setShowModal] = React.useState(false);

  const [isModal, setIsModal] = useState(false);
  useEffect(()=>{
    const data = window.localStorage.getItem("renter")
    // console.log("renterssd",data)
    console.log("renterssd1",data)
  })
  return (
    <div className="pt-3">
      <div className="bg-white h-20 shadow-md ">
        <div className="container mx-auto  items-center gap-15 flex justify-between">
          <picture className="flex gap-10 items-center">
            <a href="/">
              <img
                src="./images/e.rent.png"
                height={100}
                width={100}
                alt="imagew"
              />
            </a>
          </picture>
          {/* Search heseg ehlej bg ni  */}

          <form className="w-9/12 pl-10" onSubmit={handleSearch}>
            <div className="md:flex z-[-1] md:z-auto md:static absolute w-10/12 left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0  top-[-300px] transition-all ease-in duration-500">
              {/* bugd deer darahaar category dropdown hiih component  */}
              <Subnav />

              <div className="relative w-full mr-5">
                <input
                  type="search"
                  id="search-dropdown"
                  name="searchInput"
                  className="block p-2.5  w-full z-20 text-sm  placeholder-cyan-500 rounded-r-md border-cyan-500"
                  placeholder="Хайлт жишээ нь: search, хайх зүйлээ бичнэ үү..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-r-lg  hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-transparent"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only px-5">Хайх</span>
                </button>
              </div>
            </div>
          </form>

          {/* responsive menu icon */}
          <FontAwesomeIcon
            icon={faSearch}
            className="inline-flex items-center p-2 text-2xl text-cyan-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:focus:ring-gray-600"
          />
          <div id="navbar-search">
            <div className=" lg:flex gap-10 w-3/12 md:hidden max-sm:hidden z-[-1] md:z-auto md:static absolute">
              <Image src={imgPic01} alt="pic" height={35} width={35} />
              <Image src={imgPic04} alt="pic" height={35} width={35} />
              <Image src={imgPic02} alt="pic" height={35} width={35} />
              <span className="absolute top-5 right-36 text-[13px] bg-cyan-400 h-[18px] w-[18px] rounded-full place-item-center items-center text-white">
                0
              </span>
              {/* renter===(undefined || null) */}
              {isLogged? (
                <>
                <Image
                  src={imgPic03}
                  // src={}
                  alt="pic"
                  width={100}
                  height={100}
                  className="h-12 w-12 rounded-full"
                  itemType="button"
                  onClick={() => setIsModal((e: any) => !e)}
                />
                {isModal && (
                  <div className="bg-cyan-400 absolute mt-10 ml-36 rounded-lg w-28 z-50">
                      <a
                        href={`/Userid/:{user.id}`}
                        className="flex w-full px-4 py-2 justify-between hover:bg-cyan-600 cursor-pointer rounded-lg border-l-transparent"
                      >
                        <h3 className="w-full text-center text-white font-bold">
                          Profile
                        </h3>
                      </a>
                    <a
                      href="/Userid"
                      className="flex w-full px-4 py-2 justify-between hover:bg-cyan-600 cursor-pointer rounded-lg border-l-transparent"
                    >
                      <h3 className="w-full text-center text-white font-bold">
                        Rents
                      </h3>
                    </a>
                    <a
                      href="/Userid"
                      className="flex w-full px-4 py-2 justify-between hover:bg-cyan-600 cursor-pointer rounded-lg border-l-transparent"
                    >
                      <h3 className="w-full text-center text-white font-bold">
                        Bookmark
                      </h3>
                    </a>
                    <a
                      className="flex w-full px-4 py-2 justify-between hover:bg-cyan-600 cursor-pointer rounded-lg border-l-transparent"
                      itemType="button"
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <h3 className="w-full text-center text-white font-bold">
                        Logout
                      </h3>
                    </a>
                  </div>
                )}
                </>
                
              ) : (<>
              
              <button
                    className="bg-cyan-500 text-white active:bg-cyan-900 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Нэвтрэх
                  </button>
                  {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <button className="bg-cyan-500 text-white active:bg-cyan-900 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100">
                                <a href="/UserAuthEdit/loginUser">Түрээслэгч</a>
                              </button>
                              <button className="bg-cyan-500 text-white active:bg-cyan-900 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100 ml-4"
                  
                              >
                                <a href="/login">Түрээслүүлэгч</a>
                              </button>
                            </div>
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
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
      </div>
      {/* category-toi mobile responsive */}
      <NabPages />
    </div>
  );
};

export default Navbar;
