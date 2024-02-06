import React, { useState } from "react";

const intialProduct = {
  title: "Titulo",
  description: "Descripción",
};
const [product, setProduct] = useState(intialProduct);
const updateProduct = (property, value) => {
  let newState = {
    ...product,
    [property]: value,
  };
  setProduct(newState);
};
function ProdutApp() {
  return (
    <>
      <div>
        {/* <button onClick={updateProduct}>Update product</button> */}
        <button
          onClick={() => {
            updateProduct("title", "Nueva titulo");
          }}
        >
          Update product
        </button>

        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
      {/* preformatted */}
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  );
}

//hacer una lista de productos, cada producto: Titulo, descripción, precio

//Cada producto puede eliminarse .filter eliminar el producto de id a eliminar
//Poder agregar un producto

export default ProdutApp;
