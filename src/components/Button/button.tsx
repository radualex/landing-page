import React from "react";
import "./button.scss";

interface ButtonProps {
  content: string;
  width?: string;
  height?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="customButton"
      style={{ width: props.width, height: props.height }}
    >
      {props.content}
    </button>
  );
}
