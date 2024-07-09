import React, { useState } from "react";
import style from "./Item.module.css";
import ItemFilter from "./ItemFilter";

const dummyData = [
  {
    id: 1,
    name: "사과",
    type: "식료품",
    price: 3000,
    purchaseDate: "2024-01-10",
  },
  {
    id: 2,
    name: "바나나",
    type: "식료품",
    price: 2000,
    purchaseDate: "2024-01-15",
  },
  {
    id: 3,
    name: "티셔츠",
    type: "의류",
    price: 15000,
    purchaseDate: "2024-02-20",
  },
  {
    id: 4,
    name: "청바지",
    type: "의류",
    price: 40000,
    purchaseDate: "2024-02-25",
  },
  {
    id: 5,
    name: "노트북",
    type: "가전제품",
    price: 1200000,
    purchaseDate: "2024-03-01",
  },
  {
    id: 6,
    name: "스마트폰",
    type: "가전제품",
    price: 800000,
    purchaseDate: "2024-03-05",
  },
  {
    id: 7,
    name: "빵",
    type: "식료품",
    price: 1500,
    purchaseDate: "2024-03-10",
  },
  {
    id: 8,
    name: "양말",
    type: "의류",
    price: 5000,
    purchaseDate: "2024-03-15",
  },
  {
    id: 9,
    name: "텔레비전",
    type: "가전제품",
    price: 700000,
    purchaseDate: "2024-03-20",
  },
  {
    id: 10,
    name: "냉장고",
    type: "가전제품",
    price: 1000000,
    purchaseDate: "2024-03-25",
  },
];

const Item = () => {
  const [items, setItems] = useState(dummyData);
  const [filteredItems, setFilteredItems] = useState(dummyData);

  const handleFilterChange = (filter) => {
    let filtered = items;

    if (filter.filterType) {
      filtered = filtered.filter((item) => item.type === filter.filterType);
    }

    if (filter.startDate) {
      filtered = filtered.filter(
        (item) => new Date(item.purchaseDate) >= new Date(filter.startDate)
      );
    }

    if (filter.endDate) {
      filtered = filtered.filter(
        (item) => new Date(item.purchaseDate) <= new Date(filter.endDate)
      );
    }

    if (filter.sortOrder) {
      if (filter.sortOrder === "price") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (filter.sortOrder === "date") {
        filtered = filtered.sort(
          (a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate)
        );
      }
    }

    setFilteredItems(filtered);
  };

  return (
    <div>
      <ItemFilter onFilterChange={handleFilterChange} />
      <div className={style.itemListContainer}>
        {filteredItems.map((item) => (
          <div key={item.id} className={style.item}>
            <h3>{item.name}</h3>
            <p>유형: {item.type}</p>
            <p>가격: {item.price}원</p>
            <p>구입 날짜: {item.purchaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
