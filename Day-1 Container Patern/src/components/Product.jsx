import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Product({ product }) {
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    fontSize: "18px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    transition: "background-color 0.3s ease",
  };

  const [products, setProducts] = useLocalStorage("products", []);
  const found = products.find((item) => item.id === product.id);

  const handleAddToCart = (localProduct) => {
    setProducts([...products, localProduct]);
  };

  const handleRemoveFromCart = (id) => {
  const updatedProducts = products.filter((item) => item.id !== id);
  setProducts(updatedProducts);
};

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.thumbnail}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {found ? (
            <Button onClick={() => handleRemoveFromCart(product.id)} style={buttonStyle} size="small" color="primary">
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() => handleAddToCart(product)}
              style={buttonStyle}
              size="small"
              color="primary"
            >
              Add to Cart
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
