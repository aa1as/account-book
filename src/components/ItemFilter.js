import React, { useState } from "react";
import style from "./ItemFilter.module.css";

const ItemFilter = () => {
  const [filterType, setFilterType] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <div className={style.filterSortContainer}>
      <div>
        <label>유형 필터</label>
        <select
          value={filterType}
          onChange={(event) => setFilterType(event.target.value)}
        >
          <option value="">전체</option>
          <option value="식료품">식료품</option>
          <option value="의류">의류</option>
          <option value="가전제품">가전제품</option>
        </select>
      </div>
      <div>
        <label>정렬 기준</label>
        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="">선택</option>
          <option value="price">가격</option>
          <option value="date">구입 날짜</option>
        </select>
      </div>
      <div>
        <label>시작 기간</label>
        <input
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div>
        <label>끝 기간</label>
        <input
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
    </div>
  );
};

export default ItemFilter;
