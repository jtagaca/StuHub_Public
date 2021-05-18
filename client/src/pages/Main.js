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
    Axios.get("/login").then((response) => {
      setRole(response.data.user[0].role);
    });
  }, []);

  return (
    <div>
      
      {/* <h1>hello</h1> */}
      {role == "student" ? history.push("/Profile") : null}
      {role == "admin" ? history.push("/admin") : null}
    </div>
  );
}
