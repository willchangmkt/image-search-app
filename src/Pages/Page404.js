// src > Page404.js

import React from "react";
import error1 from "../img/error1.svg";

//錯誤頁面
const PageError = () => {
  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="text-center mt-4">
          <img
            src={error1}
            className="card-img-top"
            alt="About illustration"
            style={{ height: "auto", width: "30%", maxWidth: "300px" }}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Oops！你闖進了一個不存在的地方！</h5>
          <p className="card-text">
            這裡什麼都沒有，快快離開吧！
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageError;
