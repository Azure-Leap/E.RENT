import { useRouter } from "next/router";
import React from "react";

const HomeChatIcon = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push({ pathname: "/chat" });
        }}
        style={{
          position: "fixed",
          bottom: "40px",
          left: "30px",
          height: "50px",
          width: "50px",
          fontSize: "60px",
        }}
      >
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>speech-chat-talk-bubble-flat</title>
          <path d="M0,256C0,114.62,114.62,0,256,0S512,114.63,512,256,397.37,512,256,512,0,397.38,0,256Z" fill="#0086cd" />
          <path
            d="M347.79,141.51H229.3a35.68,35.68,0,0,0-35.06,29H166.85a38.38,38.38,0,0,0-38.32,38.36v77a38.37,38.37,0,0,0,38.32,38.35h20.56c-1.48,13.49-14.27,31.13-19.64,37.39l-7.58,8.81,11.61-.42c30.73-1.12,56.8-28.28,70.51-45.79h35A38.11,38.11,0,0,0,292.73,321c13.85,12.35,31.11,23,50,23.73,0,0-24.75-28.75-22.42-49.15h27.53a35.68,35.68,0,0,0,35.68-35.7V177.2A35.67,35.67,0,0,0,347.79,141.51ZM243.13,201.7a13.51,13.51,0,1,1-13.49,13.52A13.51,13.51,0,0,1,243.13,201.7Zm34.14,112.42h-40l-1.51,2C225.42,329.74,206,351.35,183.27,358c7-10.18,15.78-26.08,14.27-39.33l-.52-4.5H166.85a28.22,28.22,0,0,1-28.17-28.19v-77a28.22,28.22,0,0,1,28.17-28.19H193.6v79.17a35.67,35.67,0,0,0,35.7,35.7h40.2a196,196,0,0,0,15.05,17.55A28.27,28.27,0,0,1,277.27,314.12Zm14.93-85.4a13.51,13.51,0,1,1,13.54-13.5A13.5,13.5,0,0,1,292.19,228.73Zm49.06,0a13.51,13.51,0,1,1,13.5-13.5A13.5,13.5,0,0,1,341.26,228.73Z"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
  );
};

export default HomeChatIcon;
