import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Content from "./Content";
import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DehazeIcon from "@mui/icons-material/Dehaze";
import WeekendIcon from "@mui/icons-material/Weekend";
import Paper from "@mui/material/Paper";
import "./Products.css";
import axios from "axios";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Footer from "../Footer/Footer";

export default function Products() {
  //Sub Categories Click
  //const [open, setOpen] = React.useState(true);
  // const handleClick = () => {
  //   setOpen(!open);
  // };
  //Get elements by id8categorie
  const [elements, setElements] = useState([]);
  //get products
  const [ProductsList, setProductsList] = useState([]);

  const getProducts = () => {
    axios.get("http://localhost:5000/items/getitems").then((response) => {
      setProductsList(response.data);
      setElements(response.data);
      // console.log(response.data);
    });
  };

  function filterelements(id) {
    const newlist = ProductsList.filter((item) => item.id_cat === id);
    setElements(newlist);
  }

  const [CategoriesList, setCategoriesList] = useState([]);
  // Starting Get categorieq
  const getCategories = () => {
    //setLoading(true);
    axios
      .get("http://localhost:5000/categories/getcategories")
      .then((response) => {
        const arr = response.data;
        const newarr = arr.map((element) => ({ ...element, open: false }));
        setCategoriesList(newarr);
        console.log(newarr);
        // alert(response.data);
        // setItems(arr);
        // setLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
    getProducts();
    filterelements();
  }, []);
  //End Get Categories

  //Starting Get SubCategories
  const [SubCatList, setSubCatList] = useState([]);

  const getSubCat = () => {
    axios.get("http://localhost:5000/subcat/getsubcat").then((response) => {
      setSubCatList(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getSubCat();
  }, []);
  //End Get SubCategories

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  // //Pagination Starting
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(12);
  // //Pagination Ending
  // console.log(items);
  return (
    <Grid container direction="column">
      <Grid item container spacing={3}>
        <Grid item xs={false} sm={1}>
          <Item className="ads">ADS</Item>
        </Grid>
        <Grid item xs={false} sm={3}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <h3>
                  <DehazeIcon fontSize="large" /> Categories
                </h3>
              </ListSubheader>
            }
          >
            {CategoriesList.map((val, key) => (
              <div>
                <ListItemButton
                  onClick={() => {
                    CategoriesList[key].open = !CategoriesList[key].open;
                    setCategoriesList([...CategoriesList]);
                  }}
                  style={{ justifyItems: "center" }}
                >
                  <ListItemIcon
                    onClick={() => {
                      filterelements(val.id);
                    }}
                  >
                    <img src={val.icon} width="70" height="50"></img>
                  </ListItemIcon>
                  <ListItemText
                    primary={val.name}
                    onClick={() => {
                      filterelements(val.id);
                    }}
                  />
                  {val.open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={val.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {SubCatList.map((vall, key) =>
                      vall.id_cat == val.id ? (
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <img src={vall.icon} width="70" height="50"></img>
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItemButton>
                      ) : null
                    )}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} md={12} className="TopProducts">
            <Item>
              <h3>
                <WeekendIcon fontSize="large" /> Top Products
              </h3>
              {/* <TopContent /> */}
            </Item>
          </Grid>
          <Content products={elements} />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}
