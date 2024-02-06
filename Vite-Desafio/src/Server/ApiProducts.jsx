const BaseURL = "https://fakestoreapi.com/products";

//Context Class: https://stackblitz.com/edit/react-rxtxkn?file=src%2Fcontext%2FAuthContext.jsx,src%2Findex.js,src%2FApp.js,src%2Fcomponents%2FNavbar.jsx

const getProducts = async () => {
  try {
    const response = await fetch(BaseURL);
    const dataProducts = await response.json();
    return dataProducts;
  } catch (error) {
    MessageError(error);
  }
};

const getProductsId = async (id) => {
  try {
    const response = await fetch(BaseURL + id);
    const productSearch = await response.json();
    return productSearch;
  } catch (error) {
    MessageError(error);
  }
};
const MessageError = (message) => {
  return <h1>{message}</h1>;
};

export { getProducts, getProductsId };
