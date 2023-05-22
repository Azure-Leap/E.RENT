import NavLayout from "@/Layout/NavLayout";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const Register = () => {
  const [role, setRole] = useState("User");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [cardNumber, setCardNumber] = useState("123");

  const router = useRouter();

  const changeName = (e: any) => {
    setName(e.target.value);
  };
  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const changePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const changePass = (e: any) => {
    setPassword(e.target.value);
  };
  const changeRePass = (e: any) => {
    setRepassword(e.target.value);
  };
  const changeRole = (role: string) => {
    console.log("SS", role);
    setRole(role);
  };
  const changeAddres = (e: any) => {
    setAddress(e.target.value);
  };
  const changeProfileImg = (e: any) => {
    setProfileImg(profileImg);
  };

  const createUser = async () => {
    console.log("ROLE", role);
    console.log("Name", name);
    try {
      const url = role === "user" ? `http://localhost:9000/auth/register` : `http://localhost:9000/supplier/register`;
      const data = { name, email, password, phone, address, profileImg, cardNumber, role };

      const result = await axios.post(url, data); //user register
      // console.log(result);
      toast.success("Хэрэглэгч амжилттай бүртгэгдлээ", {
        autoClose: 2000,
        position: "bottom-right",
      });
    } catch {
      toast.error("Хэрэглэгч амжилтгүй бүртгэгдлээ. ", {
        autoClose: 1000,
        position: "bottom-right",
      });
    }
  };
  return (
    <NavLayout>
      <div className="container mx-auto flex justify-center items-center pt-5 p-10">
        <div style={{ width: "480px", height: "950px", borderRadius: "25px" }} className="bg-white  shadow-2xl border border-black">
          <div className="p-8">
            <div>
              <p className="font-semibold text-3xl">Бүртгүүлэх</p>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нэр</p>
                <TextField sx={{ width: "100%" }} id="supplier_name" name="supplier_name" variant="outlined" onChange={changeName} />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Имэйл</p>
                <TextField sx={{ width: "100%" }} variant="outlined" id="supplier_email" name="supplier_email" onChange={changeEmail} />
              </Box>
            </div>

            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нууц үг</p>
                <TextField sx={{ width: "100%" }} id="supplier_repassword" name="supplier_repassword" variant="outlined" onChange={changePass} />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нууц үг давт</p>
                <TextField sx={{ width: "100%" }} id="supplier_password" name="supplier_password" variant="outlined" onChange={changeRePass} />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Гэрийн хаяг</p>
                <TextField sx={{ width: "100%" }} id="supplier_repassword" name="supplier_repassword" variant="outlined" onChange={changeAddres} />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Дугаар</p>
                <TextField sx={{ width: "100%" }} id="supplier_phone" name="supplier_phone" variant="outlined" onChange={changePhone} />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Профайл зураг</p>
                <TextField sx={{ width: "100%" }} id="supplier_repassword" name="supplier_repassword" variant="outlined" onChange={changeProfileImg} />
              </Box>
            </div>

            <div className="pt-5">
              <div className="grid grid-cols-2 gap-2">
                <Button onClick={() => changeRole("user")} className="font-semibold border border-gray-400 p-1 text-green-500">
                  Түрээслэгч
                </Button>
                <Button onClick={() => changeRole("supplier")} className="font-semibold border border-gray-400 p-1 text-orange-500">
                  Түрээслүүлэгч
                </Button>
              </div>
            </div>
            <div className="pt-5 font-light text-green-600">
              <p>Нууц үг сэргээх</p>
            </div>
            <div className="pt-5 text-white font-semibold flex gap-2">
              <button
                style={{
                  background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                  height: "50px",
                }}
                className="w-3/5 rounded-3xl  shadow-md shadow-indigo-500/40"
                onClick={createUser}
              >
                Бүртгүүлэх
              </button>
              <button
                style={{
                  background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                  height: "50px",
                }}
                className="w-2/5 rounded-3xl  shadow-md shadow-indigo-500/40"
              >
                <Link href="/Login">Цуцлах</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export default Register;
