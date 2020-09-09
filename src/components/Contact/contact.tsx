import React from "react";
import "./contact.scss";

interface ContactProps {
  title: string;
  content: string;
}

export default function Contact(props: ContactProps) {
  return (
    <div className="contact-wrapper">
      <h1 className="contact--title">{props.title}</h1>
      <span className="contact--content">{props.content}</span>
    </div>
  );
}
