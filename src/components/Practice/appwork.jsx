import React, { useState } from "react";
import "./App.css";

import items from ".json/dataItem.json";

import SortingValue from "./components/SortingValue";
import Boilerplate from "./components/boilerplate";
import One from "./components/one";

function App() {
  let [allItem, setAllItem] = useState(items.dataItem);
  let [sorValue, setSortValue] = useState([]);
  let [flag, setFlag] = useState(true);

  const sortItem = (e) => {
    allItem.forEach((value, index) => {
      if (value.categories.toLowerCase() === e.toLowerCase()) {
        setSortValue((val) => [...val, value]);
      }
    });
    setFlag(false);
  }

  const deleteItem = (e) => {
    setSortValue(value => {
      return value.filter((val) => {
        if(val.categories.toLowerCase() !== e.toLowerCase()) {
          return val;
        }
      })
    })
  }

  return (
    <div className="app">
      <Boilerplate sortItem={sortItem} deleteItem={deleteItem} />
      <SortingValue sortValue={sorValue} />
      {flag? <One /> : null}
    </div>
  );
}

export default App;

