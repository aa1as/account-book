import React from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import ItemFilter from "./components/ItemFilter";

const App = () => {
  return (
    <div>
      <ItemList />
      <ItemFilter />
    </div>
  );
};

export default App;
