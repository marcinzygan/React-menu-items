import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState([]);
  return <h2>menu project setup</h2>;
}

export default App;
