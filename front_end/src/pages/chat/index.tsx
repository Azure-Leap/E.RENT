import Realtime from "@/components/Realtime_chat";
// import React, { useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:9000");

const Chat = () => {
  // const [name, setName] = useState("");
  // const [list, setList] = useState([]);

  // const handlepost = (e: any) => {
  //   socket.emit("commit", { post: name });
  // };

  //   socket.on("connected", (data) => {
  //     console.log("Connected");
  //     // setList([...list, data]);
  //   });

  return (
    <>
      <Realtime />
    </>
  );
};

export default Chat;
