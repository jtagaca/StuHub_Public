import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import NormalUser from "../components/user";
// import Mod from "../components/Mod";
import Admin from "../components/admin";

export default function Main() {
  const [role, setRole] = useState("admin");

  Axios.defaults.withCredentials = true;

  const history = useHistory();
  // not grabbing the data.role ↓
  useEffect(() => {
    Axios.get("/login").then((response) => {});
  }, []);

  return (
    <div>
      {/* <h1>hello</h1> */}
      {role == "student"}
      {role == "admin" ? history.push("/admin") : null}
    </div>
  );
}
