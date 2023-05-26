/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import Rents from "./Rents";
import History from "./History";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { TextField } from "@mui/material";
import Link from "next/link";
import { BASE_URL_API } from "@/util/variables";
import Sidebar from "../Tnavbar/sidebar";
const COMPONENTS = [
  {
    title: "Түрээслүүлсэн бараа",
    component: <Rents />,
  },
  {
    title: "Түрээслэсэн түүх",
    component: <History />,
  },
];

const SupplierProfile = () => {
  const [selectedComponent, setSelectedComponent] = useState({
    title: "",
    component: "",
  });
  const { supplier, setSupplierData } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [role, setRole] = useState("");

  const handleClicked = (eko: string) => {
    setSelectedComponent(selectedComponent);
  };

  const updatedSupplier = async () => {
    try {
      const res = await axios.put(`${BASE_URL_API}/supplier/${supplier._id}`, { name, email, phone, address, profileImg });

      setSupplierData(res.data.supplier);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="grid md:grid-cols-3 p-4 gap-4">
      <Sidebar />
      <div className="bg-white md:col-span-1 rounded-xl h-96">
        <div className="text-center pt-20">
          <div className="flex justify-center ">
            <img src={supplier?.profileImg} width={100} />
          </div>
          <h1 className="font-semibold text-zinc-600 text-xl pt-5">{supplier?.name}</h1>
          <p className="font-light text-zinc-600 "> Улаанбаатар хот</p>
          <div className="p-5">
            <button
              onClick={updatedSupplier}
              style={{
                background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
              }}
              className="w-40 h-12 rounded-lg text-white font-semibold text-lg"
            >
              Засах
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white md:col-span-2 rounded-xl">
        <div className="h-96 p-10 rounded-2xl">
          <div className="flex justify-between p-4">
            <h1 className="font-medium text-xl text-stone-900">Түрээслүүлэгчийн Нэр</h1>
            <input
              className="text-stone-500 border-none outline-none text-end"
              value={supplier?.name}
              onChange={(e: any) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
          <div className="flex justify-between p-4">
            <h1 className="font-medium text-xl text-stone-900">Имэйл</h1>
            <input className="text-stone-500 border-none outline-none text-end" value={supplier?.email} onChange={(e: any) => setEmail(e.target.value)} />
          </div>
          <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
          <div className="flex justify-between p-4">
            <h1 className="font-medium text-xl text-stone-900">Утасны дугаар</h1>{" "}
            <input className="border-none outline-none text-stone-500 text-end" value={supplier?.phone} onChange={(e: any) => setPhone(e.target.value)} />
          </div>
          <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
          <div className="flex justify-between p-4">
            <h1 className="font-medium text-xl text-stone-900">Хаяг</h1>
            <input className="border-none outline-none text-stone-500 text-end" value={supplier?.address} onChange={(e: any) => setAddress(e.target.value)} />
          </div>
        </div>
        <div className="text-end p-3">
          <button
            style={{
              background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
            }}
            className="w-40 h-12 rounded-lg text-white font-semibold text-lg "
          >
            <Link href={"/"}>Гарах</Link>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 p-5 bg-white md:col-span-3 rounded-xl gap-4 h-96">
        <div className="md:col-span-1">
          <div className="grid md:grid-cols-2 gap-1 text-center">
            {COMPONENTS.map((el, id) => (
              <div
                key={id}
                onClick={(el: any) => {
                  handleClicked(el);
                }}
              >
                <h1 className="lg:font-bold text-cyan-600 md:text-lg md:font-semibold border-2  border-cyan-600 rounded-lg">{el.title}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="border-2 border-cyan-600 rounded-lg md:col-span-3 h-40 p-3">
            <p>{selectedComponent.component}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierProfile;
