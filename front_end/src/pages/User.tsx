import UserProfile from "@/components/User/userProfile";
import React, { useState } from "react";

const User = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
      }}
      className="container mx-auto "
    >
      <UserProfile />
    </div>
  );
};

export default User;
