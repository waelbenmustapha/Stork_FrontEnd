import React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProductsCard from "./ProductCard";
import { Link, MemoryRouter, Route } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import usePagination from "./Pagination";
import PaginationItem from "@mui/material/PaginationItem";

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

//Pagination

export default function Content(props) {
  //Pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(props.products.length / PER_PAGE);
  const _DATA = usePagination(props.products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

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
      <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
        <Route>
          {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get("page") || "1", 10);
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Grid container spacing={4}>
                  {_DATA
                    .currentData()
                    .map((ProductObj) => getProductsCard(ProductObj))}
                </Grid>
                <Pagination
                  style={{ margin: 25, alignSelf: "center" }}
                  count={count}
                  size="large"
                  page={page}
                  variant="outlined"
                  shape="rounded"
                  onChange={handleChange}
                />{" "}
              </div>
            );
          }}
        </Route>
      </MemoryRouter>
    </Grid>
  );
}
