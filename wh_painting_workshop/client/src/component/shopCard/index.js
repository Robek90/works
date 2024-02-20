import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { quantityItem } from '../../services/cartAction';

import { useTranslation } from 'react-i18next';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ShoppingCartList(props) {
  let { card, cardIndex, cartList, shoppingCart } = props;

  const [ count, setCount ] = useState(card.quantity);

  const [ productPrice, setProductPrice ] = useState(card.price);

  const { t } = useTranslation();
  
  let arr = cartList.slice();

  const handleClickDeleteProduct = () => {
    arr.splice(cardIndex,1)
    shoppingCart.changeShoppingCart(arr);
  };

  const calcPrice = () => {
    setProductPrice(card.price * count)
  };

  const addCount = () => {
    setCount(count => count + 1)
    shoppingCart.changeShoppingCart(quantityItem(cardIndex, arr, count+1))
  };

  const removeCount = () => {
    if(count > 1) {
      setCount(count => count - 1)
      shoppingCart.changeShoppingCart(quantityItem(cardIndex, arr, count-1))
    }
  };
  
  useEffect(()=>{
    calcPrice();
  },[]);
  
  return(
    <Box sx={{ 
      width: "100%", 
      borderTop: "1px solid rgba(204,214,228,.6)",
      borderRadius: "2px",
    }}>
      <Grid>
        <Demo>
          <List>
            <ListItem
              secondaryAction={
                <IconButton 
                  edge="end" 
                  aria-label="delete"
                  onClick={()=>{
                    handleClickDeleteProduct()
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={t(card.name)}
                secondary={productPrice}
              />
              <>
                <IconButton 
                  edge="start" 
                  aria-label="delete"
                  onClick={()=>{
                    addCount()
                  }}
                >
                  <AddIcon></AddIcon>
                </IconButton>
                <span>{count}</span>
                <IconButton 
                  edge="end" 
                  aria-label="delete"
                  onClick={()=>{
                    removeCount()
                  }}
                >
                  <RemoveIcon></RemoveIcon>
                </IconButton>
              </>
            </ListItem>
          </List>
        </Demo>
      </Grid>
    </Box>
  );
}
