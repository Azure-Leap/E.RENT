import React from "react";

const Contact = () => {
  return (
    <div className="bg-white shadow-xl rounded-md border border-gray-500 w-96 h-46  p-5">
      <div className="">
        <div className="flex justify-between">
          <div></div>
          <h1 className="bg-indigo-500 text-white px-1 font-semibold">
            ХОЛБОО БАРИХ
          </h1>
        </div>

        <h1 className="text-red-700 ">
          Утас:
          <span className="font-bold text-sm text-black px-1 ">85151195</span>
        </h1>
        <h1 className="text-red-700">
          Хаяг:
          <span className="font-extralight text-xs text-black px-1">
            Ард Холдингс-ын байр 2 дугаар давхар, Ерөнхий сайд Амарын гудамж,
            Сүхбаатар дүүрэг, Улаанбаатар хот, Монгол улс
          </span>
        </h1>
        <h1 className="text-red-700 ">
          Мэйл:
          <span className="font-light text-sm text-gray-600 px-1 ">
            bilguunerkh@gmail.com
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Contact;
