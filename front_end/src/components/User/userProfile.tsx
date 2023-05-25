/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import Rents from "@/components/UserComp/Rents";
import History from "@/components/UserComp/History";
import Bookmark from "@/components/UserComp/Bookmark";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import Link from "next/link";
import { BASE_URL_API } from "../../util/variables";
import { useRouter } from "next/router";

const COMPONENTS = [
  {
    title: "Түрээслэж байгаа бүтээгдэжүүн",
    component: <Rents />,
    value: "orders",
  },
  {
    title: "Түрээслэсэн бүтээгдэхүүн",
    component: <History />,
    value: "history",
  },
];

const UserProfile = () => {
  const [selectedComponent, setSelectedComponent] = useState({
    title: "",
    component: "",
    value: "",
  });
  const handleClicked = (e: any) => {
    setSelectedComponent(e);
  };

  const router = useRouter();

  const { user, token, setUserData, orders } = useContext(AuthContext);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [profileImg, setProfileImg] = useState(user?.profileImg);
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState(false);

  // const avatarUpload=async(file:any) =>{
  //   const form = new FormData();
  //   form.append("pic",file)
  //   try{
  //     const res1= await axios.post(`http:localhost:9000/upload`,form)
  //   }
  // }

  const updatedUser = async () => {
    console.log("Updated User Change");
    try {
      const userJsonData = { name, email, phone, address, profileImg };
      const res = await axios.put(`${BASE_URL_API}/user/${user._id}`, userJsonData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(res.data.user);
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  const handleEdit = () => {
    console.log("IE", isEdit);
    console.log("UP", update);
    setIsEdit(!isEdit);
    if (isEdit === true && update) {
      setUpdate(false);
      updatedUser();
    }
  };

  const handleOut = (go: any) => {
    router.push("/");
  };

  return (
    <>
      <div className="grid md:grid-cols-3 p-12 gap-4">
        <div className="bg-white md:col-span-1 rounded-xl h-96">
          <div className="text-center pt-20">
            <div className="flex justify-center ">
              <img src={profileImg} width={100} />
            </div>
            <h1 className="font-semibold text-zinc-600 text-xl pt-5">{name}</h1>
            <p className="font-light text-zinc-600 ">Улаанбаатар хот</p>
            <div className="p-5">
              <button
                style={{
                  background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                }}
                className="w-40 h-12 rounded-lg text-white font-semibold text-lg"
                onClick={handleEdit}
              >
                Засах
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white md:col-span-2 rounded-xl">
          <div className="h-96 p-10 rounded-2xl">
            <div className="flex justify-between p-4">
              <h1 className="font-medium text-xl text-stone-900">Хэрэглэгчийн Нэр</h1>
              <input
                className={`border-none outline-none ${isEdit ? "text-black" : "text-stone-500"}`}
                readOnly={isEdit ? false : true}
                value={name}
                onChange={(e: any) => {
                  console.log("Name editing");
                  setUpdate(true);
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
            <div className="flex justify-between p-4">
              <h1 className="font-medium text-xl text-stone-900">Имэйл</h1>
              <input
                className={`border-none outline-none ${isEdit ? "text-black" : "text-stone-500"}`}
                readOnly={isEdit ? false : true}
                value={email}
                onChange={(e: any) => {
                  setUpdate(true);
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
            <div className="flex justify-between p-4">
              <h1 className="font-medium text-xl text-stone-900">Утасны дугаар</h1>
              <input
                className={`border-none outline-none ${isEdit ? "text-black" : "text-stone-500"}`}
                readOnly={isEdit ? false : true}
                value={phone}
                onChange={(e: any) => {
                  setUpdate(true);
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
            <div className="flex justify-between p-4">
              <h1 className="font-medium text-xl text-stone-900">Хаяг</h1>
              <input
                className={`border-none outline-none ${isEdit ? "text-black" : "text-stone-500"}`}
                readOnly={isEdit ? false : true}
                value={address}
                onChange={(e: any) => {
                  setUpdate(true);
                  setAddress(e.target.value);
                }}
              />
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
                  onClick={() => {
                    handleClicked(el);
                  }}
                >
                  <h1 className="lg:font-bold text-cyan-600 md:text-lg md:font-semibold ">{el.title}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="border-2 md:col-span-3 h-72 p-3">
              {selectedComponent.value === "orders" && (
                <div>
                  {user?.orders?.map((order: any, idx: number) => (
                    <div className="w-full rounded-md bg-red-300 p-2" key={idx}>
                      {order._id}
                    </div>
                  ))}
                </div>
              )}

              {selectedComponent.value !== "orders" && <div>Nodata</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
