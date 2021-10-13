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
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Products = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <Grid container direction="column" >
      
      <Grid item container spacing={3}  >
        <Grid item xs={false} sm={1 } className="ads">
          ADS
        </Grid>
        <Grid item xs={false} sm={3} >
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',position:"fixed" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
    >
       <h3><DehazeIcon fontSize="large"/> Categories</h3>
       {ProductsList.map((val,key)=>(
      <Box>
      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={val.categorie} onClick={handleClick} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="fi wostha" />
          </ListItemButton>
        </List>
      </Collapse>
      </Box>
      ))}
    </List>
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