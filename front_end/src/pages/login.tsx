import NavLayout from "@/Layout/NavLayout";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import { CartContext } from "@/context/CartContext";
import { BASE_URL_API } from "@/util/variables";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const { setUserData, setSupplierData, setToken, setSupplierToken, token, user }: any = useContext(AuthContext);
  const { addItemToCart, getCartList }: any = useContext(CartContext);
  const router = useRouter();

  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const changePass = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async () => {
    try {
      if (role === "user") {
        const res = await axios.post(`${BASE_URL_API}/auth/login`, {
          email,
          password,
        });
        const data = { user: res.data.user, orders: res.data.orders, token: res.data.token };
        console.log("DD", data);
        setUserData(data);
      } else {
        const res = await axios.post(`${BASE_URL_API}/supplier/login`, {
          email,
          password,
        });
        setSupplierData(res.data.supplier);
        setSupplierToken(res.data.token);
      }

      // console.log("login res", res);

      toast.success("Амжилттай нэвтэрлээ.", {
        autoClose: 1000,
        position: "bottom-right",
      });
      // setTimeout(addItemToCart, 2);

      router.push("/");
    } catch (err) {
      console.log("ERROR", err);
      toast.error("Амжилтгүй", { autoClose: 1000, position: "bottom-right" });
    }
  };
  return (
    <NavLayout>
      <div className="container mx-auto flex justify-center items-center pt-20">
        <div style={{ width: "480px", borderRadius: "25px" }} className="bg-white  shadow-2xl border border-black">
          <div className="p-8">
            <div>
              <p className="font-semibold text-3xl">Бүртгүүлэх</p>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нэвтрэх нэр</p>
                <TextField sx={{ width: "100%" }} onChange={changeEmail} variant="outlined" />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нууц үг</p>
                <TextField sx={{ width: "100%" }} onChange={changePass} variant="outlined" />
              </Box>
            </div>

            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Аль төрөл - {role}</p>
                {/*  */}
                <div>
                  <button className={`mx-4 p-5  ${role === "user" ? "bg-violet-300" : "bg-red-300"}`} onClick={() => setRole("user")}>
                    Хэрэглэгч
                  </button>
                  <button className={`mx-4 p-5  ${role === "supplier" ? "bg-violet-300" : "bg-red-300"}`} onClick={() => setRole("supplier")}>
                    Түрээслэгч
                  </button>
                </div>
              </Box>
            </div>

            <div className="pt-5 font-light text-green-600">
              <p>Нууц үг сэргээх</p>
            </div>
            <div className="pt-5 text-white font-semibold">
              <button
                style={{
                  background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                  height: "50px",
                }}
                className="w-full rounded-3xl  shadow-md shadow-indigo-500/40"
                onClick={handleLoginSubmit}
              >
                Нэвтрэх
              </button>
            </div>
            <div className="flex justify-center items-center pt-5">
              <div className="h-[1px] bg-onSurface-black-disabled dark:bg-dark-onPrimary-white-disabled w-full mr-8 bg-black"></div>
              <p className="font-extralight text-medium">Эсвэл</p>
              <div className="h-[1px] bg-onSurface-black-disabled dark:bg-dark-onPrimary-white-disabled w-full ml-8 bg-black"></div>
            </div>
            <div className="pt-5 flex gap-3">
              <p className="font-extralight text-medium">Шинэ хэрэглэгч үү ?</p>
              <Link href="/Register">
                <p className="font-bold text-green-700">Бүртгүүлэх</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};
export default Login;
