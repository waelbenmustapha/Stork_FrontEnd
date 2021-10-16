import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./Products.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Products = () => {
  return (
    <Grid container direction="column">
      <Grid item container spacing={3}>
        <item>Single Products Page Wrokkkkkkks !!!!!!!!!!!!!!!</item>
      </Grid>
    </Grid>
  );
};

export default Products;
