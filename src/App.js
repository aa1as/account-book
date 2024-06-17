import React from "react";
import "./App.css";

const App = () => {
  return (
    <form className="account-book">
      <div className="account-book__control">
        <label>이름</label>
        <input type="text" />
      </div>
      <div className="account-book__control">
        <label>가격</label>
        <input type="number" />
      </div>
      <div className="account-book__control">
        <label>유형</label>
        <input type="text" />
      </div>
      <div className="account-book__control">
        <label>구입 날짜</label>
        <input type="date" />
      </div>
      <div className="account-book__control">
        <label>메모 </label>
        <input type="checkbox" />
        <label>메모작성 </label>
        <input type="text" />
      </div>
      <div className="account-book__control">
        <label>재구매의사</label>
        <label>한다</label>
        <input type="radio" />
        <label>하지않는다</label>
        <input type="radio" />
      </div>
    </form>
  );
};

export default App;
