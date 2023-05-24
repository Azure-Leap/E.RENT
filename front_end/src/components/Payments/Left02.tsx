import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import erentLogo from "../../../public/images/e.rent.png";
const Left02 = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(20);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
        toast.error("Хугацаа дууслаа", {
          autoClose: 1000,
          position: "bottom-right",
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);
  return (
    <div className="grid grid-cols-2 place-content-between ">
      <div className="inline-flex space-x-2 items-center">
        {/* <div className="w-16 h-16 ">
          <Image src={erentLogo} />
        </div> */}
        <div>
          <h1 className="px-3 p-1  text-white font-bold text-xl bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% ">
            ERENT PAY
          </h1>
        </div>
      </div>
      <div className="inline-flex space-x-1 items-center justify-self-end">
        <div className="text-white text-base font-bold">
          {minutes < 10 ? `0${minutes}` : minutes}
        </div>
        <div className="text-white text-base font-bold">:</div>
        <div className=" text-white text-base font-bold">
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </div>
  );
};

export default Left02;
