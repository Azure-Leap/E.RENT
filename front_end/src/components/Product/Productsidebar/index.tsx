import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../assets/images/e.rent.png";
import axios from "axios";

const ProductSideBar = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [subCategories, setSubCategories] = useState<any[]>([]);
  const [search,setSearch]=useState<any[]>([]);
    const handleClick= async ()=>{
      setSearch(search)
    }

  const fetchData = async () => {
    const cat: any = await axios.get(`http://localhost:9000/categories`);
    const sub: any = await axios.get(`http://localhost:9000/subcategories`);

    console.log("CAT", cat);
    console.log("Sub", sub);

    setCategories(cat?.data?.categories);
    setSubCategories(sub?.data?.categories);
  };

  useEffect(() => {
    fetchData();
    handleClick();
  }, []);
  return (
    <div className="flex h-screen w-64 flex-col justify-between bg-gray-50 text-cyan-500">
      <div className="p-4">
        {/* <!-- items --> */}
        <div className="mb-4">
          <div className="flex w-full items-center justify-between">
            <a className="flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out">
              <Image src={logo} height={100} width={100} alt="pic" />
            </a>
          </div>
        </div>
        {/* <!-- item --> */}
        <div className="mb-4">
          <div className="flex w-full items-center justify-between">
            <a className="flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300  hover:bg-cyan-300 hover:text-white">
              <span className="ml-3 font-bold">Бүтээгдэхүүн</span>
            </a>
          </div>
        </div>
        {/* <!-- item --> */}
        <div className="mb-4 flex flex-col">
          {/* <!-- Main sidebar items --> */}
          <div className="flex w-full items-center justify-between">
            <a className="flex w-full cursor-pointer items-center rounded-lg px-4 py-2  ">
              <label className="flex-row items-center w-full ">
                {categories?.map((category: any, idx) => {
                  return (
                    <>
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-cyan-300  hover:bg-cyan-300 hover:text-white transition duration-300" />
                      <span className="ml-3 font-bold inline" key={idx}>
                        {category.title}
                      </span>
                      {subCategories
                        ?.filter((el: any) => {
                          return el?.category._id === category._id;
                        })
                        .map((subcat: any) => {
                          return (
                            <ul className="ml-4 mt-2 w-full border-l-2 border-cyan-300 pl-6 text-sm">
                              <li
                                className="mb-2 transition duration-300 ease-in-out hover:bg-cyan-300 hover:rounded-md hover:text-white"
                                onClick={() => {
                                  console.log("SS", subcat.type);
                                 
                                }}
                              >
                                {subcat.title}
                              </li>
                            </ul>
                          );
                        })}
                    </>
                  );
                })}
              </label>
            </a>
            <button className="ml-4 h-full cursor-pointer px-4 py-2 transition duration-300 ease-in-out hover:bg-cyan-300 hover:text-cyan-500"></button>
          </div>
          {/* <!-- Main sidebar item sub menu --> */}
        </div>
        {/* <!-- item --> */}
        <div className="mb-4"></div>
      </div>
      {/* <!-- Bottom --> */}
      <div className="flex items-center border-t-2 border-cyan-300 p-4">
        <img
          src="https://images.unsplash.com/photo-1649180493506-1074b5f7c9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=face&w=1936&q=80"
          alt=""
          className="h-12 w-12 rounded-full object-cover"
        />
        <a href="https://www.youtube.com/channel/UCZXcplsSliFfK3vGUjCKY2A" className="ml-2 text-sm" target="_blank">
          Tekku Bit
        </a>
        <button className="ml-auto cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
          </svg>
        </button>
      </div>
    </div>
    // </div>
  );
};

export default ProductSideBar;
