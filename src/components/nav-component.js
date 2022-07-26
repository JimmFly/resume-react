import React from "react";
import { Link, useLocation } from "react-router-dom";
import background from "../static/icon/orangeBackground.svg";

const NavComponent = () => {
  const { pathname } = useLocation();
  return (
    <>
      <img className="back" src={background} alt="" />
      <header>
        <nav>
          <ul>
            <li>
              <Link className={pathname === "/" ? "active" : null} to="/">
                首页
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/resume" ? "active" : null}
                to="/resume"
              >
                我的履历
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/contact" ? "active" : null}
                to="/contact"
              >
                联系方式
              </Link>
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
