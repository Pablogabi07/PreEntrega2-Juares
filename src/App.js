import "./Styles/App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer";
import Navbar from "./components/navbar";
import ItemList from "./components/itemList";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ItemListContainer />
        <ItemList />
      </div>
    </BrowserRouter>
  );
}
