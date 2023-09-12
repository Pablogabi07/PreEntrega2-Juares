import React from "react";
import "../Styles/item.css";
import ItemCount from "../components/itemCount";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} alt={product.name} className="item-image" />
      <h3 className="item-name">{product.name}</h3>
      <p className="item-price">${product.price}</p>
      <ItemCount initial={1} min={1} max={10} />
    </div>
  );
};

export default Item;
