import React from "react";

export default function About(props) {
  return (
    <>
      <p style={{color: props.mode === "dark" ? "white" : "black" }}> developer: insta-id: jarakanka; Github: Rajukanaka </p>
    </>
  );
}
