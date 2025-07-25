import React from "react";
import search1 from "../img/search1.png";

// Search 元件：包含圖片與搜尋表單
// {search} 拿到Homepage lifting後傳過來的search 以及 setInput
const Search = ({ search, setInput }) => {
  
  // 處理輸入文字變動
  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="container">
      {/* logo */}
      <div className="row justify-content-center mb-4 mt-4">
        <div className="col-6 text-center">
          <img
            src={search1}
            alt="logo"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>

      {/* 搜尋欄 */}
      <div className="row justify-content-center my-5">
        <div className="col-12 col-md-8 col-lg-6">
          <form className="d-flex" role="search" onSubmit={search}>
            {/* 輸入框 */}
            <input
              className="form-control  form-control-lg me-2"
              type="search"
              placeholder="想找什麼圖片呢?"
              aria-label="Search"
              onChange={inputHandler}
            />
            {/* 搜尋按鈕 */}
            <button className="btn btn-outline-success btn-lg"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
