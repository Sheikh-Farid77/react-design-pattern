import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response?.data?.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Products products={products} loading={loading} error={error}></Products>
    </>
  );
}

export default App;
