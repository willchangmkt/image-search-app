// src > About.js

import React from "react";
import about1 from "../img/about1.svg";

// About 頁面：介紹網站內容與技術
const About = () => {
  return (
    <div className="container mt-5">
      {/* 卡片式區塊 */}
      <div className="card mb-3">
        {/* 插圖（置中） */}
        <div className="text-center mt-4">
          <img
            src={about1}
            className="card-img-top"
            alt="About illustration"
            style={{ height: "auto", width: "30%", maxWidth: "300px" }}
          />
        </div>

        {/* 文字說明區 */}
        <div className="card-body text-center">
          <h5 className="card-title">關於這個網站</h5>
          <p className="card-text">
            這是一個 Side Project，素材來自 Pexels 的免費相片和 unDraw
            的免費插圖資源。
          </p>
          <p className="card-text">本網站採用了以下技術：</p>
          <ul className="list-unstyled">
            <li>使用 React 框架結合 Bootstrap 進行 UI 設計</li>
            <li>透過 Axios 擷取相片資料</li>
          </ul>
          <p className="card-text">
            <small className="text-muted">
              如有建議，歡迎來信至：yuan625@gmail.com
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
