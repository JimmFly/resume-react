import React from "react";
import { Link } from "react-router-dom";
import github from "../static/icon/github-brands 1.svg";
import qq from "../static/icon/QQ.svg";
import weChat from "../static/icon/WeChat.svg";

const FooterComponent = () => {
  return (
    <footer>
      <Link to="#">
        <img src={github} alt="" />
      </Link>
      <Link to="#">
        <img src={qq} alt="" />
      </Link>
      <Link to="#">
        <img src={weChat} alt="" />
      </Link>
    </footer>
  );
};

export default FooterComponent;
