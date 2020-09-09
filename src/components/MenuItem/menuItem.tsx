import React from "react";
import "./menuItem.scss";

interface MenuItemProps {
  text: string;
}

export default function MenuItem(props: MenuItemProps) {
  return <span className="menuItem">{props.text}</span>;
}
