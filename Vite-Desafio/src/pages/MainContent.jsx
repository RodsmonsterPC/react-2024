import React, { useState, useEffect } from "react";
import { getProducts } from "../Server/ApiProducts.js/index.js";
function MainContent() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((data) => console.log(data));
  }, []);
  return <div></div>;
}

export default MainContent;
