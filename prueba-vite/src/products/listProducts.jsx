import Products from "./products";

const ListProducts = (props) => {
  const products = props.products;

  return (
    <>
      <div className="product-list">
        {products.map((product) => {
          return <Products data={product} />;
        })}
      </div>
    </>
  );
};

export default ListProducts;
