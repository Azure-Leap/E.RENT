import React from "react";
import { useRouter } from "next/router";

const Rents = ({categories}:any) => {
  const router = useRouter();
  console.log("1",categories)
  return(
  <div className="bg-cyan-400 text-white my-2 px-5 flex flex-row rounded-md  w-full">
    <img src={categories.imgUrl} className="h-32 w-24 py-1 rounded-md md:w-36 md:h-24"/>
      <div className="flex flex-col px-5">
        <p className="text-2xl px-5 mt-2">{categories.title}</p>
        <div className="pt-4 flex flex-col align-center md:flex-row justify-evenly ">
          <p className="px-5 md:px-0 md:pl-5">Үнэлгээ: 5star</p>
          <p className="px-5 md:px-0 md:pl-10">Үнэ: 4500000</p>
          <p className="px-5 md:px-0 md:pl-10">Тоо ширхэг: {1}</p>
        </div>
    </div>
  </div> 
  )
}; 

export default Rents;
{/* <div className="bg-cyan-400 text-white px-5 flex flex-row rounded-md  w-full">
  <img src="https://images.unsplash.com/photo-1684069158042-de27cd720172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" className="h-32 w-24 py-1 rounded-md md:w-36 md:h-24"/>
    <div className="flex flex-col px-5">
      <p className="text-2xl px-5 mt-2">name</p>
      <div className="pt-4 flex flex-col align-center md:flex-row justify-evenly ">
        <p className="px-5 md:px-0 md:pl-5">Үнэлгээ: 5star</p>
        <p className="px-5 md:px-0 md:pl-10">Үнэ: 4500000</p>
        <p className="px-5 md:px-0 md:pl-10">Тоо ширхэг: {1}</p>
      </div>
    </div>
</div> */}

















{/* <div className="bg-cyan-400 text-white px-5 flex flex-row rounded-md  w-full">
    <img src="https://images.unsplash.com/photo-1684069158042-de27cd720172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" className="h-32 w-24 py-1 rounded-md md:w-36 md:h-24"/>
    <div className="flex flex-col px-5">
      <p className="text-2xl px-5 mt-2">Name</p>
      <div className="pt-4 flex flex-col align-center md:flex-row justify-evenly ">
        <p className="px-5 md:px-0 md:pl-5">Үнэлгээ: 5star</p>
        <p className="px-5 md:px-0 md:pl-10">Үнэ: 4500000</p>
        <p className="px-5 md:px-0 md:pl-10">Тоо ширхэг: {1}</p>
      </div>
    </div>
  </div>; */}