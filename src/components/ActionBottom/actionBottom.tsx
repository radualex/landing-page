import React from "react";
import "./actionBottom.scss";

import Button from "../Button/button";

export default function ActionButton() {
  return (
    <div className="actionButton-wrapper">
      <input placeholder={"Enter your email"}></input>
      <Button content={"Subscribe"} width={"137px"} height={"56px"} />
    </div>
  );
}
