import React from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import ItemFilter from "./components/ItemFilter";
import Item from "./components/Item";

const App = () => {
  return (
    <div>
      <ItemList />
      <Item />
    </div>
  );
};

export default App;
