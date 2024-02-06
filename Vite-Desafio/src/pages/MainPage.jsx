import React, { useState, useEffect } from "react";
import { getProducts } from "../Server/ApiProducts";
import Navbar from "../components/Navbar";
import CardBestSeller from "../components/CardBestSeller";
import "./Styles/MainPage.scss";
import CardProducts from "../components/cardProducts";
import "./Styles/CategoryCard.scss";
function MainPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        setProducts(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <h2>Loading.....</h2>}
      {!isLoading && isError && <h2>Something went wrong</h2>}
      {!isLoading && !isError && (
        <div className="containerMain">
          <Navbar />
          <section></section>
          <section className="CategoryCard">
            <CardProducts />
          </section>
          <section></section>
          <section className="productsList">
            <h2>Best Seller Products</h2>
            <p>speaker There are many variations passages</p>
            <div className="WrapperList">
              {products.map((product) => (
                <CardBestSeller key={product.id} products={product} />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default MainPage;
