import React from "react";
import Grid from '@mui/material/Grid';
import ProductsCard from "./ProductCard";
import topProd from "./TopProdListe";

const TopContent = () => {
  const getProductsCard = ProductObj => {
    return (
      <Grid label="Clickable" item xs={12} sm={3}>
        <ProductsCard {...ProductObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {topProd.map(ProductObj => getProductsCard(ProductObj))}
    </Grid>
  );
};

export default TopContent;