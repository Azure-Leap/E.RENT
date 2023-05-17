import React from "react";
const CARD_DATAS = [
  {
    name: "Билгүүн-Эрх Мягмардорж",
    url: "./images/ekos.png",
    roles: "Веб Хөгжүүлэгч, Жолооч",
  },
  {
    name: "Мөнхцэцэг Уртнасан",
    url: "./images/ekos.png",
    roles: "Веб Хөгжүүлэгч, Ахлагч",
  },
  {
    name: "Төгөлдөр Нэргүй",
    url: "./images/ekos.png",
    roles: "Жолооч",
  },
];

const All = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-60">
      {CARD_DATAS.map((el, id) => (
        <div key={id} className="text-center">
          <img className="rounded-full" src={el.url} alt="bilguunerkh" />
          <p className="pt-4 font-bold text-md text-white">{el.name}</p>
          <p className="font-light text-xs text-gray-600 pt-1">{el.roles}</p>
          <p className="underline underline-offset-4 font-bold text-xs text-white pt-1">
            Дэлгэрэнгүй
          </p>
        </div>
      ))}
    </div>
  );
};

export default All;
