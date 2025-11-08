import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

export default function Products({ products, loading, error }) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 3 equal columns
    gap: "20px", // space between grid items
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div style={gridStyle}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
