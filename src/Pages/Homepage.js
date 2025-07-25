// src > Homepage.js

import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";

// Homepage.js分成可以搜尋的欄位，以及下面就是圖片
const Homepage = () => {
  // searchURL的input也做成一個state，初始值是empty string
  // 只要改了search 旁邊的input標籤的話，input 的state 就要跟著改變
  // 所以我們希望可以把setInput 的部分傳給<Search search={search} />
  let [input, setInput] = useState("");
  // 把這些得到的圖片資訊放成一個state
  // 設定成null 就代表沒任何數據
  let [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // 預設page 1
  let [page, setPage] = useState(1);
  // 直到按下Search 圖片後才可以決定載入更多的是空的input 還是有輸入內容的input
  let [currentSearch, setCurrentSearch] = useState("");

  const auth = process.env.REACT_APP_PEXELS_API_KEY;
 
  // page=1第一頁 per_page=15 每個頁面載入15張照片
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  // **搜尋邏輯 start**
  // 搜尋圖片
  const search = async (e) => {
    if (e) {
      e.preventDefault(); // 只在事件存在時阻止默認行為
    }
    try {
      setError(null);
      console.log("正在搜尋圖片");
      const url = input
        ? `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`
        : initialURL;
      let result = await axios.get(url, {
        headers: { Authorization: auth },
      });
      console.log(result); // axios拿到從API而來的json
      setData(result.data.photos);
      setCurrentSearch(input);
    } catch (error) {
      console.error("搜尋過程中發生錯誤：", error.response || error);
      setError("搜尋過程中發生錯誤，請稍後再試。");
    }
  };

  // **搜尋邏輯 end**

  // 載入更多圖片有兩種狀況，第一種是圖片是從精選圖片裡面拿到的，第二種是搜尋後的更多圖片
  // 所以在initialURL 裡面page 的屬性就不能都只是設定成1，因為如果按更多圖片就要讓他變成2.3.4.5.6更多的值
  // 這裡會發生JS closure 的問題 所以${page + 1} 才能讓載入更多圖片後載入新的圖片而不是同一頁圖片
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    // 去看說目前的input裡面的值是什麼，如果input 的值沒有任何東西的話，在按更多圖片的時候，我們就要從精選圖片去拿
    // 如果input 裡面有東西的話，在按更多圖片的時候，就代表要根據input的值去取得更多的圖片
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    console.log("正在morePicture內部");
    console.log(newURL);
    let result = await axios.get(newURL, {
      // auth 就是上面的key
      headers: { Authorization: auth },
    });

    // 有上面的result 之後就可以setData
    setData(data.concat(result.data.photos));
  };

  // 不用按Search 一進到網頁就會出現圖片功能
  // 用useEffect() 代表Homepage 被製作(渲染)出來的時候，就會去執行useEffect 裡面的參數(函式)
  useEffect(() => {
    console.log("API Key:", process.env.REACT_APP_PEXELS_API_KEY);
    // 這裡面基本上要執行的就是search()，一進來就會自動fetch 資料並自動的把圖片放到網頁
    // search(initialURL);
    search();
  }, []);
  return (
    // 讓中間的部分維持100vh 的高度
    <div style={{ minHeight: "100vh" }}>
      {/* 在這裡做一個功能，只要按Search 就會馬上發一個GET request 到pexel 的 route */}
      {/* 希望在Search.js 按下button 時可以根據目前input 的值來去決定要search 什麼東西 */}
      {/* <Search/> 在做search 的時候會執行箭頭函式，箭頭函式就會對searchURL去讓axios拿到資料 */}
      {/* 這個searchURL的內容就是根據input 這個state 來的 */}
      <Search search={search} setInput={setInput} />
      {/* 呈現圖片，這裡要用的就是data.map */}
      <div className="pictures">
        {/* data 是null 的話去做.map 是不行的 這時在react 當中有一個非常有名與常見的技巧 */}
        {/* logical operator && 如果左手邊是true 的話就會去運算出右手邊的東西
　　　　　如果左手邊是false 的話，logical operator && 就會去運算出左手邊的東西 */}
        {/* 如果左手邊是null 他就是falsy value  這{}裡面的東西就都是falsy value 這個null 在react 裡面就什麼都不會展示出來*/}
        {/* 如果data 確實有東西 他就會運算出在 && 後面的東西 這後面的data.map 就會去製作出一個array 這個array 就會有很多的Picture */}
        {data &&
          data.map((d) => {
            {
              /* 把state 拿到的這些跟圖片有關的資訊 設定成<Picture /> 的data屬性 他的data 屬性設定相對到d */
            }
            return <Picture key={d.id} data={d} />;
          })}
      </div>
      <div className="row justify-content-center my-4">
        <div className="col-6 text-center">
          <button onClick={morePicture} className="btn btn-success btn-lg ">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
