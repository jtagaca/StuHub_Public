import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import NormalUser from "../components/user";
// import Mod from "../components/Mod";
import Admin from "../components/admin";

export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;

  const history = useHistory();
  // not grabbing the data.role ↓
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      // console.log(response);
      // console.log(response.data.loggedIn);
      if (response.data.loggedIn == true) {
        // console.log(response.data.user);
        // console.log("this is useeffect");

        setRole(response.data.user);
      }
    });
  }, []);
  // console.log("this is the role " + role);
  // console.log("hello");

  return (
    <div>
      {/* <h1>hello</h1> */}
      {role == "student"}
      {role == "admin" ? history.push("/admin") : null}
    </div>
  );
}
