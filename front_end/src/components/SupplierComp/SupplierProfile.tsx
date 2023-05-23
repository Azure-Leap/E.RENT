import React, { useContext, useEffect, useState } from "react";
import Rents from "./Rents";
import History from "./History";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });

const COMPONENTS = [
  {
    title: "Миний түрээс",
    component: <Rents />,
  },
  {
    title: "Түрээсийн түүх",
    component: <History />,
  },
];

const SupplierProfile = () => {
  const { supplier, setSupplier } = useContext(AuthContext);
  const [selectedComponent, setSelectedComponent] = React.useState({
    title: "",
    component: "",
  });
  let [isOpen, setIsOpen] = useState(true);

  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [img, setImg] = useState("");

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view) => {
    setPreview(view);
  };

  const handleClicked = (eko: string) => {
    setSelectedComponent(selectedComponent);
  };

  const updatedSupplier = async () => {
    try {
      const res = await axios.put(
        `http://localhost:9000/supplier/${supplier._id}`,
        { name, email, phone, address, profileImg }
      );

      setSupplierData(res.data.supplier);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    if (supplier) {
      setImg(supplier?.supplierImg);
    }
  }, [supplier]);

  const onFileLoad = async (file: any) => {
    const form = new FormData();
    form.append("image", file);
    const res = await axios.post(`http://localhost:9000/upload`, form);
    console.log(res);
  };

  return (
    <>
      <div className="grid md:grid-cols-3 p-4 gap-4">
        <div className="bg-white md:col-span-1 rounded-xl h-96">
          <div className="text-center pt-20">
            <div style={{ width: "120px" }} className="flex mx-auto ">
              {preview && (
                <img
                  className="border-2 border-black rounded-full"
                  src={preview}
                />
              )}
            </div>
            <h1 className="font-semibold text-zinc-600 text-xl pt-5">
              {supplier.supplier_name}
            </h1>
            <p className="font-light text-zinc-600 ">Ulaanbaatar, Mongolia</p>
            <p className="underline underline-offset-4 font-bold text-sm text-lime-600">
              {supplier.supplier_role}
            </p>
            <div className="p-5">
              <>
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center mt-10">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all items-center">
                            <Dialog.Title
                              as="h3"
                              className="text-xl font-semibold leading-6 text-gray-900"
                            >
                              Зураг нэмэх
                            </Dialog.Title>
                            <div className="mt-2">
                              <Avatar
                                width={400}
                                height={300}
                                onCrop={onCrop}
                                onClose={onClose}
                                onFileLoad={onFileLoad}
                                src={src}
                              />
                            </div>
                            <Box
                              component="form"
                              noValidate
                              autoComplete="off"
                              sx={{ paddingTop: "15px" }}
                            >
                              <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Таны нэр"
                              />
                            </Box>
                            <Box
                              component="form"
                              noValidate
                              autoComplete="off"
                              sx={{ paddingTop: "15px" }}
                            >
                              <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Таны имейл"
                              />
                            </Box>
                            <Box
                              component="form"
                              noValidate
                              autoComplete="off"
                              sx={{
                                paddingTop: "15px",
                              }}
                            >
                              <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Таны утасны дугаар"
                              />
                            </Box>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                                placeholder="Таны нэр"
                              >
                                Хаах
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </>
            </div>
          </div>
        </div>

        <div className="bg-white md:col-span-2 rounded-xl">
          <div className="h-96 p-5 rounded-2xl">
            <div className="flex justify-between p-4">
              <h1 className="font-medium text-xl text-stone-900">Full Name</h1>
              <p className="text-stone-500">{supplier.supplier_name}</p>
            </div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
            <div className="flex justify-between p-4">
              <h1 className="font-medium text-xl text-stone-900">Email</h1>
              <p className="text-stone-500">{supplier.supplier_email}</p>
            </div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
            <div className="flex justify-between p-4">
              <h1 className="font-medium text-xl text-stone-900">
                Phone Number
              </h1>
              <p className="text-stone-500">
                <span>+976</span> {supplier.supplier_phone}
              </p>
            </div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
            <div className="flex justify-between p-4">
              <h1 className="font-medium text-xl text-stone-900">Address</h1>
              <p className="text-stone-500">Ulaanbaatar, Mongolia</p>
            </div>
            <div className="w-full h-0.5 bg-black my-2 scale-y-50 "></div>
          </div>
          <div className="flex justify-end p-5">
            <button
              onClick={updatedSupplier}
              style={{
                background:
                  "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
              }}
              type="button"
              onClick={openModal}
              className="w-40 h-12 rounded-lg text-white font-semibold text-lg"
            >
              Засах
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
                  <h1 className="lg:font-bold text-stone-600 md:text-lg md:font-semibold border-2 border-black">
                    {el.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="border-2 border-black md:col-span-3 p-3">
              <p>{selectedComponent.component}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupplierProfile;
