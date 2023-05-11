import NavLayout from "@/Layout/NavLayout";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const changeName = (e:any) => {
    console.log("UserName: ", e.target.value);
    setName(e.target.value);
  };
  const changeEmail = (e:any) => {
    console.log("UserEmail: ", e.target.value);
    setEmail(e.target.value);
  };
  const changePhone = (e:any) => {
    console.log("UserPhone: ", e.target.value);
    setPhoneNumber(e.target.value);
  };
  const changePass = (e:any) => {
    console.log("UserPassword: ", e.target.value);
    setPassword(e.target.value);
  };
  const changeRePass = (e:any) => {
    console.log("UserRePassword: ", e.target.value);
    setRepassword(e.target.value);
  };

  if (password !== repassword) {
    toast.error("Нууц үг таарахгүй байна. ", {
      autoClose: 1000,
      position: "bottom-right",
    });
  }

  const [createUser, setCreateUser] = useState({});

  const userBarilt = (e) => {
    console.log(e.target.value);
    const createObj = {};
    createObj[e.target.name] = e.target.value;
    setCreateUser({ ...createUser, ...createObj });
    console.log("obj",createObj)
  };

  const createUserMan = async () => {
    try {
      const result = await axios.post(
        `http://localhost:9000/users/register`,
        { ...createUser }
      );
      console.log(result);
      toast.success("Түрээслэгч амжилттай бүртгэгдлээ", {
        autoClose: 2000,
        position: "bottom-right",
      });
      console.log(result)
      router.push("/UserAuth/loginUser");
    } catch {
      toast.error("Түрээслэгч амжилтгүй бүртгэгдлээ. ", {
        autoClose: 1000,
        position: "bottom-right",
      });
      console.log("aldaa")
    }
  };

  return (
    <NavLayout>
      <div className="container mx-auto flex justify-center items-center pt-10">
        <div
          style={{ width: "480px", height: "700px", borderRadius: "25px" }}
          className="bg-white  shadow-2xl border border-black"
        >
          <div className="p-8">
            <div>
              <p className="font-semibold text-3xl">Нэвтрэх</p>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Түрээслэгчийн нэр</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="name"
                  name="name"
                  variant="outlined"
                  onChange={userBarilt}
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Түрээслэгчийн имейл</p>
                <TextField
                  sx={{ width: "100%" }}
                  variant="outlined"
                  id="email"
                  name="email"
                  onChange={userBarilt}
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Түрээслэгчийн Дугаар</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="phoneNumber"
                  name="phoneNumber"
                  variant="outlined"
                  onChange={userBarilt}
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нууц үг</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="password"
                  name="password"
                  variant="outlined"
                  onChange={userBarilt}
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нууц үг давт</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="repassword"
                  name="repassword"
                  variant="outlined"
                  onChange={userBarilt}
                />
              </Box>
            </div>
            <div className="pt-5 font-light text-green-600">
              <p>Нууц үг сэргээх</p>
            </div>
            <div className="pt-5 text-white font-semibold flex gap-2">
              <button
                style={{
                  background:
                    "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                  height: "50px",
                }}
                className="w-3/5 rounded-3xl  shadow-md shadow-indigo-500/40"
                onClick={createUserMan}
              >
                Бүртгүүлэх
              </button>
              <button
                style={{
                  background:
                    "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                  height: "50px",
                }}
                className="w-2/5 rounded-3xl  shadow-md shadow-indigo-500/40"
              >
                <Link href="/UserAuth/loginUser">Цуцлах</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export default RegisterUser;
