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
  const [supplier_name, setSupplier_name] = useState("");
  const [supplier_email, setSupplier_email] = useState("");
  const [supplier_password, setSupplier_password] = useState("");
  const [supplier_repassword, setSupplier_repassword] = useState("");
  const [supplier_phone, setSupplier_phone] = useState("");
  const router = useRouter();

  const changeName = (e) => {
    console.log("Supplier_name: ", e.target.value);
    setSupplier_name(e.target.value);
  };
  const changeEmail = (e) => {
    console.log("Supplier_email: ", e.target.value);
    setSupplier_email(e.target.value);
  };
  const changePhone = (e) => {
    console.log("Supplier_phone: ", e.target.value);
    setSupplier_phone(e.target.value);
  };
  const changePass = (e) => {
    console.log("Supplier_password: ", e.target.value);
    setSupplier_password(e.target.value);
  };
  const changeRePass = (e) => {
    console.log("Supplier_repassword: ", e.target.value);
    setSupplier_repassword(e.target.value);
  };

  const changeRole = (role: string) => {
    console.log("SS", role);
    setCreateSupplier({ ...createSupplier, supplier_role: role });
  };

  if (supplier_password !== supplier_repassword) {
    toast.error("Нууц үг таарахгүй байна. ", {
      autoClose: 1000,
      position: "bottom-right",
    });
  }

  const [createSupplier, setCreateSupplier] = useState({
    supplier_name: "",
    supplier_address: "",
    supplier_phone: "",
    supplier_email: "",
    supplier_password: "",
    supplier_role: "",
    user_id: "",
  });

  const supplierBarilt = (e) => {
    console.log(e.target.value);
    const createObj = {};
    createObj[e.target.name] = e.target.value;
    setCreateSupplier({ ...createSupplier, ...createObj });
    console.log("obj",createObj)
  };

  const createSupplierMan = async () => {
    try {
      const result = await axios.post(
        `http://localhost:9000/supplier/register`,
        { ...createSupplier }
      );
      console.log(result);
      toast.success("Түрээслэгч амжилттай бүртгэгдлээ", {
        autoClose: 2000,
        position: "bottom-right",
      });
      console.log(result)
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
      {console.log("first", createSupplier)}
      <div className="container mx-auto flex justify-center items-center pt-5 p-10">
        <div
          style={{ width: "480px", height: "730px", borderRadius: "25px" }}
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
                  id="supplier_name"
                  name="supplier_name"
                  variant="outlined"
                  onChange={supplierBarilt}
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Түрээслэгчийн имейл</p>
                <TextField
                  sx={{ width: "100%" }}
                  variant="outlined"
                  id="supplier_email"
                  name="supplier_email"
                  onChange={supplierBarilt}
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Түрээслэгчийн Дугаар</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="supplier_phone"
                  name="supplier_phone"
                  variant="outlined"
                  onChange={supplierBarilt}
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нууц үг давт</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="supplier_password"
                  name="supplier_password"
                  variant="outlined"
                  onChange={supplierBarilt}
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нууц үг</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="supplier_repassword"
                  name="supplier_repassword"
                  variant="outlined"
                  onChange={supplierBarilt}
                />
              </Box>
            </div>
            <div className="pt-5">
              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={() => changeRole("User")}
                  className="font-semibold border border-gray-400 p-1 text-green-500"
                >
                  Түрээслэгч
                </Button>
                <Button
                  onClick={() => changeRole("Supplier")}
                  className="font-semibold border border-gray-400 p-1 text-orange-500"
                >
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
                  background:
                    "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                  height: "50px",
                }}
                className="w-3/5 rounded-3xl  shadow-md shadow-indigo-500/40"
                onClick={createSupplierMan}
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
