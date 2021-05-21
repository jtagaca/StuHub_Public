import React, { useState } from "react";

export const getAllUsers = () => {
  Axios.get("http://localhost:3001/studentUser", {})
    .then((response) => {
      setAllStudentlist(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleClear = () => {
  Array.from(document.querySelectorAll("input")).forEach(
    (input) => (input.value = "")
  );
};
