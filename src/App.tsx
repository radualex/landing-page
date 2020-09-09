import * as React from "react";
import "./styles.scss";

import Header from "./components/Header/header";
import Action from "./components/Action/action";
import Shape from "./components/Shape/shape";
import Contact from "./components/Contact/contact";

export default function App() {
  return (
    <div className="App">
      <div className="top">
        <Header />
        <div className="content">
          <Action
            title={"Web development courses"}
            content={
              "Learn to code with an easy to understand, project based learning path"
            }
            button={"Browse courses"}
          />
          <Shape />
        </div>
      </div>
      <div className="bottom">
        <Contact
          title={"Join the Traversy Media mailing list"}
          content={
            "Sign up to the newsletter and be the first one to know about new courses or special offers."
          }
        />
      </div>
    </div>
  );
}
