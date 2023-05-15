import Subnav from "./Subnav";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NabPages from "./NabPages";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const imgPic01 = require("../../assets/images/notification-bell.png");
const imgPic02 = require("../../assets/images/navbar_cart.png");
const imgPic03 = require("../../assets/images/navbar_avatar.png");
const imgPic04 = require("../../assets/images/navbar_bookmark.png");

interface Inav {
  nav: Boolean;
  setNav: (nav: boolean) => void;
}

const Navbar = ({ products }: any) => {
  // search heseg
  const [search, setSearch] = useState(products);
  const router = useRouter();

  const handleSearch = async (e: any) => {
    e.preventDefault();
    const { value } = e.target.searchInput;
    console.log("value:", value);
    const filterProducts = products?.filter((product: any) => product.title.toLowerCase().include(value.toLowerCase()));
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
  return (
    <div className="pt-3">
      <div className="bg-white h-20 shadow-md ">
        <div className="container mx-auto  items-center gap-15 flex justify-between">
          <picture className="flex gap-10 items-center">
            <img src="./images/e.rent.png" height={100} width={100} alt="imagew" />
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
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
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
              <span className="absolute top-5 right-36 text-[13px] bg-cyan-400 h-[18px] w-[18px] rounded-full place-item-center items-center text-white">0</span>
              <Image src={imgPic03} alt="pic" height={35} width={35} />
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
