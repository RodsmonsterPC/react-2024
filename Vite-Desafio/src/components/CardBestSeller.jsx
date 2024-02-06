import React from "react";
import "./styles/CardSeller.scss";

function CardBestSeller({ products }) {
  const { title, price, image } = products;
  return (
    <div className="card">
      <img src={image} alt="" />

      <div>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default CardBestSeller;
