import React from "react";

// 得到從Homepage 所傳過來的data
const Picture = ({ data }) => {
  return (
    <div className="picture">
      
      <div className="imageContainer">
        <img src={data.src.large} alt={data.alt} />
      </div>

      {/* 攝影師名稱與按鈕排成一行，按鈕在右側 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // 空間分配，文字靠左、按鈕靠右
          marginTop: "0.3rem",
          padding: "0 0.3rem",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.9rem" }}>
          Credits: {data.photographer}
        </p>

        <a
          target="_blank"
          // 防止新開的分頁取得原始頁面的控制權以及從哪個網址跳過來的 referrer 資訊
          rel="noopener noreferrer"
          href={data.src.large}
        >
          <button
            className="btn btn-outline-secondary"
            style={{ padding: "0.2rem 0.6rem", fontSize: "0.8rem" }}
          >
            Download Picture
          </button>
        </a>
      </div>
    </div>
  
  );
};

export default Picture;
