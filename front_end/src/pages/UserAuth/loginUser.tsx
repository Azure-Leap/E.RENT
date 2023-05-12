import NavLayout from "@/Layout/NavLayout";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");
  const { renter, logOut, setUserRenter } = useContext(AuthContext);
  const router = useRouter();

  const changeEmail = (e:any) => {
    console.log("setEmail: ", e.target.value);
    setEmail(e.target.value);
  };
  const changePass = (e:any) => {
    console.log("setPassword: ", e.target.value);
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async () => {
    try {
      const res = (await axios.post(`http://localhost:9000/users/login`, {
        email,
        password,
      })) as any;

      console.log("res",res);
      setUserRenter(res.data.user);
      console.log("set",setUserRenter)

      toast.success("Амжилттай нэвтэрлээ", {
        autoClose: 2000,
        position: "bottom-right",
      });
      router.push("/"); 
      console.log("orloo")
    } catch {
      toast.error("Амжилтгүй", { autoClose: 1000, position: "bottom-right" });
    }
  };

  return (
    <NavLayout>
      <div className="container mx-auto flex justify-center items-center pt-20">
        <div
          style={{ width: "480px", height: "520px", borderRadius: "25px" }}
          className="bg-white  shadow-2xl border border-black"
        >
          <div className="p-8">
            <div>
              <p className="font-semibold text-3xl">Нэвтрэх User</p>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нэвтрэх Email</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="email"
                  onChange={changeEmail}
                  variant="outlined"
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нууц үг</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="password"
                  onChange={changePass}
                  variant="outlined"
                />
              </Box>
            </div>
            <div className="pt-5 font-light text-green-600">
              <p>Нууц үг сэргээх</p>
            </div>
            <div className="pt-5 text-white font-semibold">
              <button
                style={{
                  background:
                    "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
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
              <a href="/UserAuth/registerUser">
                <p className="font-bold text-green-700">Бүртгүүлэх</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export default LoginUser;
