import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardMedia } from "@mui/material";

const ProductCard = (props) => {
  const { price, name, description, image } = props;
  return (
    <Card style={{ height: "300px" }}>
      <CardMedia style={{ height: "150px" }} image={image} />
      <CardContent>
        <Typography variant="body2" component="p" className="ProductTitel">
          <h3>{name}</h3>
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className="ProductDescription"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions className="price">
        <Button size="small" color="error" color="error">
          {price} DT
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
