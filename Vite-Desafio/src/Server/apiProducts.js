const BaseURL = "https://fakestoreapi.com/docs";

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
  console.log(message);
};

export { getProducts, getProductsId };
