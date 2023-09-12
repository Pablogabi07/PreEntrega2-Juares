import React, { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import product1 from "../image/bridafija25mm.jpeg";
import product2 from "../image/buje25mmx20mm.jpeg";
import product3 from "../image/codohroscahembra.jpeg";
import product4 from "../image/codomrosca25mm.jpeg";
import product5 from "../image/llavepasobronce25mm.jpg";
import product6 from "../image/sobrepasolargo 32mm.jpg";
import product7 from "../image/teeroscamacho25mm.jpg";
import product8 from "../image/termofusora800w.webp";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const productsData = [
            {
              id: 1,
              name: "Brida fija 25mm",
              price: 2.041,
              image: product1,
              category: "codos"
            },
            {
              id: 2,
              name: "Buje 25mm x 20mm",
              price: 2.083,
              image: product2,
              category: "codos"
            },
            {
              id: 3,
              name: "Codo hembra/rosca 25mm",
              price: 4.594,
              image: product3,
              category: "codos"
            },
            {
              id: 4,
              name: "Codo macho/rosca 25mm",
              price: 4.594,
              image: product4,
              category: "llaves de paso"
            },
            {
              id: 5,
              name: "Llave de paso bronce 25mm",
              price: 7.445,
              image: product5,
              category: "llaves de paso"
            },
            {
              id: 6,
              name: "Sobre paso largo 32mm",
              price: 1.114,
              image: product6,
              category: "llaves de paso"
            },
            {
              id: 7,
              name: "Tee rosca macho 25mm",
              price: 1.799,
              image: product7,
              category: "tees"
            },
            {
              id: 8,
              name: "Termofusora 800w",
              price: 74.885,
              image: product8,
              category: "termofusoras"
            }
          ];
          resolve(productsData);
        }, 2000);
      });
    };

    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="item-list">
      {products.map((product) => (
        <ItemDetail key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
