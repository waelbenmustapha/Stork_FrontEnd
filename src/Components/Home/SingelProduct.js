import React from "react";
import Grid from '@mui/material/Grid';
import Content from "./Content";
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Paper from '@mui/material/Paper';
import './Products.css';
import ProductsList from "./ProductsList";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Products = () => {
  
  return (
    <Grid container direction="column" >
        <Grid item container spacing={3} >
            <item>
                hello
            </item>
        </Grid>
    </Grid>
  );
};

export default Products;