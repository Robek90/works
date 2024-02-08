import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from "react-router-dom";
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { inject, observer } from 'mobx-react';

import { useTranslation } from 'react-i18next';

import './style.css';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default inject('catalog','category', 'product') (
  observer((props) => {
    const [ product, setProduct ] = useState({});

    const [ catalog, setCatalog ] = useState({});

    const [ category, setCategory ] = useState({});


    const [ expanded, setExpanded ] = useState(false);

    const [ pathMenuData, setPathMenuData ] = useState();
    
    const { t } = useTranslation();

    let location = useLocation();

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    let selectPage = (race) => {
      let filter = [];

      if(pathMenuData === "pricelist") {
        Object.values(category).forEach((i) => {
          filter.push(i)
        })
        return filter
      } else {
        Object.values(product).forEach((i) => {
          if(i.type === "custom" && i.race === race) {
            filter.push(i)
          }
        })
        return filter
      }
    };

    useMemo(()=>{
      if(location.pathname === "/exposition") {
        setPathMenuData("exposition")
      } else {
        setPathMenuData("pricelist")
      }
    },[location.pathname]);

    useEffect(()=>{
      props.product.getProductData();
      props.category.getCategoryData();
      props.catalog.getCatalogData();
      
      if(props.product.state === "done" && props.catalog.state === "done" && props.category.state === "done") {
        props.product.productData.then(res => setProduct(res));
        props.catalog.catalogData.then(res => setCatalog(res));
        props.category.categoryData.then(res => setCategory(res));
      };

    },[ props.catalog, props.category, props.product, props.product.state, props.catalog.state, props.category.state]);

    return (
      <div className="accordion_body">
        {
          Object.values(catalog).map((catalog, index)=>{
            return (
              <Accordion expanded={expanded === catalog.name} onChange={handleChange(catalog.name)} key={index}>
                <AccordionSummary aria-controls="panel-content" id="panel-header">
                  <Typography component={'span'}>{t(catalog.name)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component={'div'}>
                    <List component={'ul'}>
                      {
                        selectPage(catalog.name).map((item,index)=>{
                          return (
                            <ListItem disablePadding key={index}>
                              <ListItemButton>
                                <Link className="sidebar_main_button_link"
                                  to={`${location.pathname}?catalog=${catalog.name}&category=${item.name}`}
                                >
                                  <ListItemText primary={t(item.name)}/>
                                </Link>
                              </ListItemButton>
                            </ListItem>
                          ) 
                        })
                      }
                    </List>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          })
        }
      </div>
    )
  })
)