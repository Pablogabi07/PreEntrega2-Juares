import React from "react";
import "../Styles/navbar.css";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CartWidget from "../components/cartWidget";

function Navbar() {
  return (
    <nav>
      <ul>
        <h1 className="logo">TermoFusión</h1>
        <li>
          <NavLink className="nav-link" to="/">
            Caños
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/">
            Codos
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/">
            Termofusora
          </NavLink>
        </li>
        <div>
          <CartWidget />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
