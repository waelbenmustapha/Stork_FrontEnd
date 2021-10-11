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
import WeekendIcon from '@mui/icons-material/Weekend';
import Paper from '@mui/material/Paper';
import './Products.css';
import ProductsList from "./ProductsList";
import TopContent from "./TopContent";

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
        <Grid className="ads" item xs={false} sm={1} className="ads" >
          ADS
        </Grid>
        <Grid item xs={false} sm={3}>
          <Grid  item xs={12} md={12}  >
           <Item className="categories"  >
           <h3  ><DehazeIcon fontSize="large"/> Categories</h3>
             {ProductsList.map((val,key)=>(
               <div >
               <ListItem >
               <ListItemButton>
                 <ListItemIcon>
                 </ListItemIcon>
                 {val.categorie} 
               </ListItemButton>
             </ListItem>
             </div>
             ))}
           </Item>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={8}>
        <Grid item xs={false} sm={2}>
        </Grid>
          <Grid item xs={12} md={12} className="TopProducts">
           <Item>
             
           <h3><WeekendIcon fontSize="large"/> Top  Products</h3>
           <TopContent />
           </Item>
            </Grid>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default Products;