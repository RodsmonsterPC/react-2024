import React, { useState } from "react";

import ProductCard from "./productCard";

import styles from "./products.module.scss";

const productsList = [
  {
    id: 1,
    title: "Titulo",
    description: "Descripción",
    price: 50,
  },
  {
    id: 2,
    title: "Titulo",
    description: "Descripción",
    price: 50,
  },
  {
    id: 3,
    title: "Titulo",
    description: "Descripción",
    price: 23,
  },
  {
    id: 4,
    title: "Titulo",
    description: "Descripción",
    price: 30,
  },
  {
    id: 5,
    title: "Titulo",
    description: "Descripción",
    price: 12,
  },
  {
    id: 6,
    title: "Titulo",
    description: "Descripción",
    price: 28,
  },
];

function ProductList() {
  const [products, setProduct] = useState(productsList);

  const addProduct = (data) => {
    // let product = products.find(id);
    // console.log(product);
    console.log(data);
    setProduct([...products, data]);
  };
  const construsctor = () => {
    let newTitle = "Nuevo titulo";
    let newDescription = "Nueva Descripción";
    let newPrice = 27;
    let newId = Date.now();
    addProduct({
      id: newId,
      title: newTitle,
      description: newDescription,
      price: newPrice,
    });
  };

  const deleteproduct = (id) => {
    console.log(id);

    let newList = products.filter((product) => id !== product.id);
    console.log(newList);

    setProduct(newList);
    //filtrar
    //Actualizar el estado
  };
  return (
    <div className={styles.infoCard}>
      <button onClick={construsctor}>Update Product</button>
      {products.map((cv) => {
        return (
          <>
            <ProductCard data={cv} />

            <button
              onClick={() => {
                deleteproduct(cv.id);
              }}
            >
              Eliminar
            </button>
          </>
        );
      })}
    </div>
  );
}

export default ProductList;
