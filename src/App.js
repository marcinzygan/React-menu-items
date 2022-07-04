import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = function (category) {
    if (category === "all") {
      setItems(data);
      return;
    }
    const newMenuItems = data.filter((item) => category === item.category);
    setItems(newMenuItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
