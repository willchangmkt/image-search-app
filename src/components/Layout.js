import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import search1 from "../img/search1.png";

// Layout 元件：包含導覽列、頁面插槽與頁尾
const Layout = () => {
  return (
    <div>
      {/* Bootstrap 導覽列 */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid mt-1rem">
          {/* Logo 圖片 */}
          <a className="nav-link active" aria-current="page" href="/">
            <img
              src={search1}
              alt="Logo"
              style={{ height: "auto", width: "10vw" }}
            />
          </a>

          {/* 導覽選單 */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="about">
                  <i className="fa-regular fa-circle-user"></i> 關於此網站
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 動態路由內容 */}
      <Outlet />

      {/* 共用頁尾 */}
      <Footer />
    </div>
  );
};

export default Layout;
