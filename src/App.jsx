import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/Working/Navbar";
import Cover from "./components/Working/Cover";
import ProductCard from "./components/Working/ProductCard";
import CustomizedProduct from "./components/Working/CustomizedProduct";
import RelativeProduct from "./components/Working/RelativeProduct";
import Deals from "./components/Working/Deals";
import RPQ from "./components/Working/RPQ";
import JustForYou from "./components/Working/JustForYou";
import TradeService from "./components/Working/TradeService";
import Footer from "./components/Working/Footer";

// New detailed page component
import ItemDetail from "./components/Working/ItemDetails";
import items from "./json/practice/dataItem.json";
import SortingValue from "./components/Working/SortingValue";

function App() {
  let [allItem, setAllItem] = useState(items.dataItem);
  let [sorValue, setSortValue] = useState([]);
  let [flag, setFlag] = useState(true);

  const sortItem = (e) => {
    allItem.forEach((value, index) => {
      if (value.categories === e) {
        setSortValue((val) => [...val, value]);
      }
    });
    setFlag(false);
  };

  const deleteItem = (e) => {
    setSortValue((value) => {
      return value.filter((val) => {
        if (val.categories.toLowerCase() !== e.toLowerCase()) {
          return val;
        }
      });
    });

    if (sorValue.length === 4) {
      setFlag(true);
    }
  };

  return (
    <Router>
      <Navbar sortItem={sortItem} deleteItem={deleteItem} />
      <Routes>
        {/* Route for item-detail */}
        <Route path="/item-detail" element={<ItemDetail />} />

        {/* Default route for the homepage */}
        <Route path="/" element={
          <>
            {flag ? null : <SortingValue sortValue={sorValue} />}
            {flag ? <Cover /> : null}
            {flag ? <ProductCard /> : null}
            {flag ? <CustomizedProduct /> : null}
            {flag ? <RelativeProduct /> : null}
            {flag ? <Deals /> : null}
            {flag ? <RPQ /> : null}
            {flag ? <JustForYou /> : null}
            {flag ? <TradeService /> : null}
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
