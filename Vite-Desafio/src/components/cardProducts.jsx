import React, { useState } from "react";
import "./styles/CardInfo.scss";
function CardProducts() {
  const [categories, setCategories] = useState([
    "Electronics",
    "jewerly",
    "men's clothing",
    "women's clothing",
  ]);

  const productsColor = {
    Electronics: "#363636",
    jewerly: "#F32C37",
    "men's clothing": "#EEEFF3",
    "women's clothing": "#2DD06F",
  };
  return (
    <>
      {categories.map((category) => (
        <div
          className="CardInfo"
          key={category}
          style={{ backgroundColor: productsColor[category] }}
        >
          <div className="textInfo">
            <h2>category</h2>
            <h1>{category}</h1>
            <a href="">Ver más</a>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

export default CardProducts;
