import { useEffect, useState } from "react";
import { getProducts } from "../../Server/ApiProducts";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setLoading(false);
      });
  }, []);
  return { products, isLoading, isError };
};
