import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProductsCard from "./ProductCard";
import axios from "axios";
import { makeStyles } from "@mui/material";
import { Link, MemoryRouter, Route } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import zIndex from "@mui/material/styles/zIndex";

// const useStyles=makeStyles(theme=>({
//   root:{
//     position: "fixed",
//     bottom:0,
//     zIndex:200,
//     backgroundColor:"gray",
//     padding:"10px 80px",

//     color:"white",
//     width:"100%",
//   },
//     container:{
//       dispaly:"flex",
//       justifiyContent:'center',
//       alignItems:"center",
//       color:"white",
//     }
//   }));

export default function Content(props) {
  // const calsses= useStyles();

  useEffect(() => {}, []);

  const getProductsCard = (ProductObj) => {
    return (
      <Grid item xs={12} sm={3}>
        <ProductsCard {...ProductObj} />
      </Grid>
    );
  };

  return (
    <Grid>
      <Grid container spacing={4}>
        {props.products.map((ProductObj) => getProductsCard(ProductObj))}
      </Grid>

      <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
        <Route>
          {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get("page") || "1", 10);
            return (
              <Pagination
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                color="error"
                size="large"
                page={page}
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                    {...item}
                  />
                )}
              />
            );
          }}
        </Route>
      </MemoryRouter>
    </Grid>
  );
}
