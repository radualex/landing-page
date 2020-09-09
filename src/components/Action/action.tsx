import React from "react";
import "./action.scss";

interface ActionProps {
  title: string;
  content: string;
  button: string;
}

export default function Action(props: ActionProps) {
  return (
    <div className="action-wrapper">
      <h1>{props.title}</h1>
      <span>{props.content}</span>
      <button>{props.button}</button>
    </div>
  );
}
