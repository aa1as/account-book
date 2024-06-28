import React, { useState } from "react";
import style from "./ItemList.module.css";

const ItemList = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("식료품");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [memo, setMemo] = useState("");
  const [repurchase, setRepurchase] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      price,
      type,
      purchaseDate,
      memo,
      repurchase,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.itemList}>
      <div>
        <label>이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>가격</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>유형</label>
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="식료품">식료품</option>
          <option value="의류">의류</option>
          <option value="가전제품">가전제품</option>
        </select>
      </div>
      <div>
        <label>구입 날짜</label>
        <input
          type="date"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
        />
      </div>
      <div>
        <label>메모</label>
        <input type="checkbox" />
        <label>메모 작성</label>
        <input
          type="text"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
      </div>
      <div>
        <label>재구매 의사</label>
        <input
          type="radio"
          name="repurchase"
          value="한다"
          onChange={(e) => setRepurchase(e.target.value)}
        />
        <label>한다</label>
        <input
          type="radio"
          name="repurchase"
          value="안한다"
          onChange={(e) => setRepurchase(e.target.value)}
        />
        <label>안한다</label>
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default ItemList;
