import React, { useEffect, useState } from "react";
import Axios from "axios";

import NormalUser from "../components/user";
// import Mod from "../components/Mod";
import Admin from "../components/admin";

export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;

  // not grabbing the data.role ↓
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        console.log(response.data.user);
        console.log("hello");
        setRole(response.data.user[0].role);
      }
    });
  }, []);
  console.log(role);

  return (
    <div>
      {/* <h1>hello</h1> */}
      {role == "student" && <NormalUser />}
      {role == "admin" && <Admin />}
    </div>
  );
}
