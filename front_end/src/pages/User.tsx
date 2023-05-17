import UserProfile from "@/components/UserComp/userProfile";
import React, { useState,useEffect,useContext } from "react";
import NavLayout from "@/Layout/NavLayout";
import { AuthContext } from "@/context/AuthContext";

const User = () => {
  const [user,setUser] =useState([])
  const [categories, setCategories] = useState([]);
  const { renter, logOut, isLogged ,setLogged} = useContext(AuthContext);
  useEffect(()=>{
    const getRenter = window.localStorage.getItem("renter")
    console.log("getRenter",getRenter)
  })
  
  const fetchData = async () => {
    const user = await fetch(`http://localhost:9000/users/645da8fa27ddf25b06332361`);
    const userdata = await user.json();
    const res = await fetch(`http://localhost:9000/categories`);
    const data = await res.json();
    console.log("data",data);
    setCategories(data?.categories);
    setUser(userdata?.user)
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("profileuser",user)



  return (
    <NavLayout user={user}>
      <div
        style={{
          background:
            "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
        }}
        className="container mx-auto "
      >
        <UserProfile user={user} categories={categories}/>
      </div>
    </NavLayout>
  );
};

export default User;
