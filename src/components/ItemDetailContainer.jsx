import React, { useState, useEffect } from "react";
import Item from "../components/itemList";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const productsData = [];
          resolve(productsData);
        }, 2000);
      });
    };

    fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="item-list">
      <div>
        <button onClick={() => handleCategoryChange("")}>Mostrar todos</button>
        <button onClick={() => handleCategoryChange("Caños")}>Caños</button>
        <button onClick={() => handleCategoryChange("Codos")}>Codos</button>
        <button onClick={() => handleCategoryChange("Termofusoras")}>
          Termofusoras
        </button>
      </div>
      {filteredProducts.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
