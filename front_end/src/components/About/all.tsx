/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Link from "next/link";

const style = {
  position: "absolute",
  gap: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 20,
  borderRadius: 1,
  p: 4,
};
const CARD_DATAS = [
  {
    name: "Билгүүн-Эрх Мягмардорж",
    url: "./images/ekos.png",
    roles: "Веб Хөгжүүлэгч, Жолооч",
    on: "2010-2020",
    bolovsrol: "Humuun Complex",
    on1: "2020-2022",
    bolovsrol1: "Nest Education IT school ",
    on2: "2022-2023",
    bolovsrol2: "Pinecone Academy Leap",
  },
  {
    name: "Мөнхцэцэг Уртнасан",
    url: "./images/muugii.png",
    roles: "Веб Хөгжүүлэгч, Ахлагч",
    on: "1993-2003",
    bolovsrol: "Оюуны Ундраа цогцолбор бүрэн дунд",
    on1: "2003-2007",
    bolovsrol1: "Улаанбаатар дээд сургууль",
    on2: "2008-2012",
    bolovsrol2: "PaiChai University",
  },
  {
    name: "Төгөлдөр Нэргүй",
    url: "./images/who.png",
    roles: "Оролцоогүй",
    bolovsrol: "",
  },
];

const All = () => {
  const [ongoi, setOngoi] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({
    name: "",
    url: "",
    bolovsrol: "",
    roles: "",
    on: "",
    on1: "",
    on2: "",
    on3: "",
  });

  const handleOpen = () => setOngoi(true);
  const handleClose = () => setOngoi(false);

  const handleClicked = (person: any) => {
    setSelectedPerson(person);
    handleOpen();
  };
  return (
    <div className="grid lg:grid-cols-3 gap-60">
      {CARD_DATAS.map((el, id) => (
        <div
          key={id}
          onClick={() => {
            handleClicked(el);
          }}
          className="text-center md:hover:-translate-y-2 hover:border-blue-300  ease-in duration-300"
        >
          <img className="rounded-full " src={el.url} alt="bilguunerkh" />
          <p className="pt-4 font-bold text-md text-white">{el.name}</p>
          <p className="font-light text-xs text-gray-600 pt-1">{el.roles}</p>
          <p className="underline underline-offset-4 font-bold text-xs text-white pt-1">
            Дэлгэрэнгүй
          </p>
        </div>
      ))}
      <Modal
        open={ongoi}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="flex items-start gap-4">
            <div>
              <div style={{ width: 500, border: "1px solid black" }}>
                <img src={selectedPerson.url} />
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Link href="https://www.instagram.com/ekoerkhe/">
                  <img src="./images/instagram.png" width={30} />
                </Link>
                <Link href="https://www.facebook.com/myagmardorj.bilguunerkh">
                  <img src="./images/facebook.png" width={30} />
                </Link>
                <Link href="https://mail.google.com/mail/u/2/#inbox?compose=CllgCJNsLfqxNhkWlhxBdDtnJTWZfjbfQMCbtCQFwbvslVJJnCckPZssPhSlvvFJjkKxGrlDtkL">
                  <img src="./images/gmail.png" width={30} />
                </Link>
              </div>
            </div>

            <div className="w-full">
              <div
                style={{ color: "#454545" }}
                className="font-semibold text-xl flex items-center gap-3"
              >
                <div>
                  <p>{selectedPerson.name}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <p className="font-light text-sm">{selectedPerson.roles}</p>
              </div>
              <div
                style={{ backgroundColor: "#362FD9" }}
                className="w-full h-0.5 my-2 scale-y-50 "
              ></div>
              <div className="w-full text-gray-700 mt-5">
                <div className="uppercase font-bold ">Боловсрол</div>
                <div>
                  <div className="my-3">
                    <div className="text-gray-500 font-normal text-xs">
                      {selectedPerson.on}
                    </div>
                    <div className="text-black text-sm">
                      {selectedPerson.bolovsrol}
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="text-gray-500 font-normal text-xs">
                      {selectedPerson.on1}
                    </div>
                    <div className="text-black text-sm">
                      {selectedPerson.bolovsrol}
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="text-gray-500 font-normal text-sm">
                      {selectedPerson.on2}
                    </div>
                    <div className="text-black text-sm">
                      {" "}
                      {selectedPerson.bolovsrol}
                    </div>
                  </div>
                </div>
                <div className="w-full text-gray-700 mt-5">
                  <p className="uppercase font-bold">Ажлын туршлага</p>
                  <div className="my-3">
                    <div className="text-gray-500 font-normal text-xs">
                      H-BEAM | 2018
                    </div>
                    <div className="text-black text-sm">Зурагчин</div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default All;
