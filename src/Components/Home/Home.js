import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Content from "./Content";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DehazeIcon from "@mui/icons-material/Dehaze";
import WeekendIcon from "@mui/icons-material/Weekend";
import Paper from "@mui/material/Paper";
import "./Products.css";
import TopContent from "./TopContent";
import axios from "axios";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

export default function Products() {
  //Get elements by id8categorie
  const [elements, setElements] = useState([]);
  //get products
  const [ProductsList, setProductsList] = useState([]);

  const getProducts = () => {
    axios.get("http://localhost:5000/items/getitems").then((response) => {
      setProductsList(response.data);
      //  console.log(response.data);
    });
  };

  function filterelements(id) {
    const newlist = ProductsList.filter((item) => item.id_cat === id);
    setElements(newlist);
  }

  const [CategoriesList, setCategoriesList] = useState([]);
  // Starting Get categorieq
  const getCategories = () => {
    axios
      .get("http://localhost:5000/categories/getcategories")
      .then((response) => {
        setCategoriesList(response.data);
        // alert(response.data);
        console.log(response.data);
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

  return (
    <Grid container direction="column">
      <Grid item container spacing={3}>
        <Grid item xs={false} sm={1}>
          <Item className="ads">ADS</Item>
        </Grid>
        <Grid item xs={false} sm={3}>
          <Grid item xs={12} md={12}>
            <Item className="categories">
              <h3>
                <DehazeIcon fontSize="large" /> Categories
              </h3>
              {CategoriesList.map((val, key) => (
                <div>
                  <ListItem>
                    <ListItemButton style={{ color: "black" }}>
                      <ListItemIcon
                        onClick={() => {
                          filterelements(val.id);
                        }}
                      >
                        <img src={val.icon} width="70" height="50"></img>
                      </ListItemIcon>
                      <p>{val.name}</p>
                    </ListItemButton>
                  </ListItem>
                  <MenuList>
                    {SubCatList.map((vall, key) =>
                      vall.id_cat == val.id ? (
                        <MenuItem>
                          <ListItemIcon>
                            <img src={vall.icon} width="70" height="50"></img>
                          </ListItemIcon>
                          <Typography variant="inherit">{val.name}</Typography>
                        </MenuItem>
                      ) : null
                    )}
                  </MenuList>
                </div>
              ))}
            </Item>
          </Grid>
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
