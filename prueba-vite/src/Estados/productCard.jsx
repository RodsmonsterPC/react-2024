import React from "react";
import styles from "./products.module.scss";
function ProductCard(props) {
  const { id, title, description, price } = props.data;
  return (
    <>
      <div className={styles.container}>
        <h1>{title} </h1>

        <p> {description} </p>

        <p>{price}</p>
        <small>{id} </small>
      </div>
    </>
  );
}

export default ProductCard;
