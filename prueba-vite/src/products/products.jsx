import styles from "./products.module.scss";
const Products = (props) => {
  const { id, name, precio, cantidad } = props.data;

  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.infoProduct}>
          <h1>{name}</h1>
          <small>Cantidad: {cantidad}</small>

          <span>Precio: {precio}$ mx</span>
        </div>
        <p>Num ID: {id}</p>

        <button className={`btn-primary`}>Comprar</button>
      </div>
    </>
  );
};

export default Products;
