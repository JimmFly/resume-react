import React from "react";
import { Link } from "react-router-dom";
import background from "../static/icon/orangeBackground.svg";

const NavComponent = () => {
  return (
    <>
      <img className="back" src={background} alt="" />
      <header>
        <nav>
          <ul>
            <li>
              <Link className="active" to="/">
                首页
              </Link>
            </li>
            <li>
              <Link to="/resume">我的履历</Link>
            </li>
            <li>
              <Link to="/">联系方式</Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                前后端分离项目
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                react hooks等练手项目
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavComponent;
