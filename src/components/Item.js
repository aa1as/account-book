import React, { useState } from "react";
import style from "./Item.module.css";

const Item = () => {
  const [items, setItems] = useState(["Item One", "Item Two", "Item Three"]);
  return (
    <div className={style.itemListContainer}>
      {items.map((item, index) => (
        <div key={index} className={style.item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Item;
