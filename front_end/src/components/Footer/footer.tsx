import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
      }}
    >
      <div className="container mx-auto text-white">
        <div className="grid md:grid-cols-4 sm:text-center md:text-start gap-10 p-10 max-sm:grid-cols-2 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-md">Компани</h4>
            <ul className="font-light text-sm pt-5">
              <li>
                <Link href="/">Бидний тухай</Link>
              </li>
              <li>
                <Link href="/">Чанарын бодлого</Link>
              </li>
              <li>
                <Link href="/">Нээлттэй ажлын байр</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md">Тусламж</h4>
            <ul className="font-light text-sm pt-5 ">
              <li>
                <Link href="/">Дэлгүүрийн байршил</Link>
              </li>
              <li>
                <Link href="/">Бараа захиалах заавар</Link>
              </li>
              <li>
                <Link href="/">Шинээр гишүүн болох</Link>
              </li>
              <li>
                <Link href="/">Хэтэвч</Link>
              </li>
              <li>
                <Link href="/">Асуулт хариулт</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md">Үйлчилгээ</h4>
            <ul className="font-light text-sm pt-5">
              <li>
                <Link href="/">Үйлчилгээний нөхцөл</Link>
              </li>
              <li>
                <Link href="/">Төлбөрийн нөхцөл</Link>
              </li>
              <li>
                <Link href="/">Хүргэлт</Link>
              </li>
              <li>
                <Link href="/">Онлайн гэрээний үйлчилгээ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md">Холбоо барих</h4>
            <ul className="font-light text-sm pt-5">
              <li>
                <p>+97685151195</p>
                <p>+97699433461</p>
                <p>+97685151195</p>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }} className="w-full h-0.5 my-10 scale-y-50 "></div>
      </div>
      <div style={{ backgroundColor: "#20262E" }} className="text-white flex justify-center items-center h-10">
        <h4 className="opacity-90">
          © 2023 Erent LLC |<span className="text-green-400"> version 1.0</span>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
