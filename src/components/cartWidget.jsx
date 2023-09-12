import React from "react";
import "../Styles/cartwidget.css";
import Icon from "../image/pngwing.png";

function CartWidget() {
  return (
    <div className="cart-widget">
      <img className="icon" src={Icon} alt="Icono" />
      <span className="cart-notification">10</span>
    </div>
  );
}

export default CartWidget;
