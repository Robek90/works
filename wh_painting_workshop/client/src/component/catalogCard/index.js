import React, { useState, useMemo } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { appendItem, } from '../../services/cartAction';
import { useTranslation } from 'react-i18next';

import './style.css';

export default function CatalogCard(props) {
  let { cardData, shoppingCart, setAlert, upcart } = props;

  const [ imgSize, setImgSize ] = useState(320);

  const { t } = useTranslation();

  const handleClickAppendCard = () => {
    if(!appendItem(cardData, shoppingCart)) {
      setAlert(cardData.name);
      shoppingCart.setShoppingCart(cardData);
    }
    shoppingCart.setShowAlert(true);
  };

  const AddShoppingCartButton = styled(Button)({
    width: "100%",
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'rgb(71, 124, 173)',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  useMemo(()=>{
    if(cardData.type === "infantry") {
      setImgSize(220)
    } else {
      setImgSize(320)
    }
  },[cardData.type])
  
  return (
    <>
      <Card sx={{ width: 450, height: 600, margin: 1 }}>
        <CardHeader
          className="card_header"
          title={t(`${cardData.name}`)}
        />
        <CardMedia
          component="img"
          sx={{ height: 300, width: imgSize, margin: '0 auto' }}
          image={require(`../../assets/productImg/${cardData.img}`)}
          alt={t(`${cardData.name}`)}
        />
        <CardContent
          sx={{ height: 140, width: 'auto' }}
        >
          <Typography 
            sx={{ height: 120, width: 'auto' }}
            variant="body2" 
            color="text.primary"
          >
            {t(`${cardData.description}`)}
          </Typography>
          <Typography 
            className="card_price"
            variant="body2" 
            color="text.secondary"
          >
            {cardData.price} {t(`rub`)}.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <AddShoppingCartButton 
            aria-label="add to shoping cart"
            variant="contained"
            onClick={()=>{
              handleClickAppendCard()
            }}
          >
            {t(`add to cart`)}
          </AddShoppingCartButton>
        </CardActions>
      </Card>
    </>
  );
}