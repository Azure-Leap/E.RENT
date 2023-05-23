import React, { useContext } from "react";
import useReadingProgress from "@/hooks/useReadingProgress";
import LoginModal from "../Auth/Login";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import erent from "../../../public/images/e.rent.png";
import Image from "next/image";
import profile from "../../../public/images/ekos.png";

const Tnavbar = () => {
  const { supplier, setUser, logOut } = useContext(AuthContext);
  // const { user } = useContext(AuthContext);

  const completion = useReadingProgress();
  //   console.log(completion);

  return (
    <>
      {/* <div className="bg-zinc-700 font-semibold text-white text-sm text-center px-10 sticky top-0">
        <p>STOP WAR IN UKRAINE 🇺🇦</p>
      </div> */}
      <div className="backdrop-blur-[60px] shadow-glassShadow shadow-lg bg-glass-fill sticky top-0 z-[2000] flex justify-between items-center">
        <div className="flex px-5">
          <div className="flex items-center justify-between gap-6 p-2 text-gray-600 font-medium">
            <Image src={erent} className="w-20" alt="pic" />
            <div>
              <Link href="/">Нүүр</Link>
            </div>
            <div>
              <Link href="/about">Бидний Тухай</Link>
            </div>
            <div>
              <Link href="/services">Үйлчилгээ</Link>
            </div>
          </div>

          <span
            style={{
              transform: `translateX(${completion - 100}%)`,
              background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
            }}
            className="absolute h-1 w-full bottom-0"
          ></span>
        </div>
        <div className="flex px-5">
          {supplier ? (
            <Image alt="pic" onClick={logOut} className="w-12 h-12 rounded-full border-2 border-green-400 " src={profile} />
          ) : (
            <div
              style={{
                background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
              }}
              className="p-2 font-medium text-white rounded-lg border-2 border-yellow-200"
            >
              <Link href="/login">Нэвтрэх</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tnavbar;
