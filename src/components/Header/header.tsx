import React from "react";
import "./header.scss";

import MenuItem from "../MenuItem/menuItem";

const menuItems = [
  {
    text: "Home"
  },
  {
    text: "Courses"
  },
  {
    text: "Blog"
  }
];

export default function Header() {
  return (
    <div className="header-wrapper">
      {menuItems.map((menuItem, index) => (
        <MenuItem key={`menuItem-${index}`} text={menuItem.text} />
      ))}
    </div>
  );
}
