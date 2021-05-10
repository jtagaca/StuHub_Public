import React, { useEffect, useState } from "react";
import Axios from "axios";

import NormalUser from "../components/user";
// import Mod from "../components/Mod";
import Admin from "../components/Admin";

export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      {/* <h1>hello</h1> */}
      {role == "admin" ? <Admin /> : "<h1> hello</h1>"}
      {/* {role == "admin" && <Admin />} */}
    </div>
  );
}
