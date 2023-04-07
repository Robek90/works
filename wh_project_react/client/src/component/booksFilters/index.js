import React, { useState, useEffect, useMemo } from 'react';
import { NavLink } from "react-router-dom";
import { blue } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { filtersName } from '../../utils/filtersname';
import { newSetArray, splitUrl } from '../../utils/common';
import { useGetUrlParams, pathCol } from '../../services/url/index';
import { changeCheckedStatus, getCheckboxFromUrl } from '../../services/filters/index';

import './style.css';

export default function BooksFilters(props) {
  const { filters } = props;
  
  const urlParams = useGetUrlParams();
  
  const {categories, race, author, dateRealeased, dateContext, tags} = urlParams;

  let urlTags = `${race || 'none'},${author || 'none'},${dateRealeased || 'none'},${dateContext || 'none'},${tags || 'none'}`;

  let url = splitUrl(urlTags).filter((item)=> item !== 'none');
  
  const [selectFiltersArr, setSelectFiltersArr] = useState([]);

  const [isChecked, setIsChecked] = useState([]);

  const [radioValue, setRadioValue] = useState(categories || 'allbooks');
  
  const handleChangeRadio = (event) => {
    setRadioValue(event.target.value);
  };

  const path = () => {
    return pathCol({radioValue, selectFiltersArr})
  };

  const setCheckedStatus = (props) => {
    setIsChecked(changeCheckedStatus(props).updatedCheckedState);

    let key = changeCheckedStatus(props).key;
    let value = changeCheckedStatus(props).value;

    if(changeCheckedStatus(props).event.target.checked === false) {
      setSelectFiltersArr(selectFiltersArr.filter(i => i.value !== value))
    } else {
      setSelectFiltersArr(selectFiltersArr => [...selectFiltersArr, {key, value}])
    };
  };

  useEffect(()=> {
    if(filters.categories.length>1) {
      setIsChecked(new Array(Object.values(filters).map(item => newSetArray(item).map(elem => elem.length).fill(false))));
    }
  },[filters]);

  useMemo(()=>{
    if (url.length < 1) {
      setSelectFiltersArr([]);
    };
  }, [url.length]);

  return (
    <>
      <div className="sidebar_filter_button_container">
        <NavLink 
          className="sidebar_filter_button_Link"
          color="inherit"
          to={`/books?${path().join('&')}&page=1`}
          onClick={() => {
            path();
            props.history.push(`/books?${path().join('&')}`)
          }}
        >
          Применить фильтры
        </NavLink>
      </div>
      <div className="sidebar_filters">
        {Object.keys(filters).map((key, keysIndex) => (
          <div key={keysIndex}>
            <div className="filter_group_name">
              {filtersName(key)}
            </div>
            {key === 'categories' ?
              <RadioGroup
                className="filter_categories_group"
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={radioValue}
                onChange={handleChangeRadio}
                key={keysIndex}
              >
                {newSetArray(filters[key]).map((item, filtersIndex) => (
                  <FormControlLabel 
                    key={filtersIndex} 
                    label={item} 
                    value={item} 
                    control={
                      <Radio/>
                    } 
                  />
                ))}
              </RadioGroup>
              :
              <div 
                key={keysIndex}
              >
                {newSetArray(filters[key]).map((value, filtersIndex) => (
                  <div
                    className="filter_checkbox_container"
                    key={filtersIndex}
                  >
                    <FormControlLabel
                      className="filter_checkbox"
                      control={
                        <Checkbox 
                        key={key}
                        checked={
                          isChecked.map(item => item[keysIndex][filtersIndex])[0] === undefined ? false : isChecked.map(item => item[keysIndex][filtersIndex])[0]
                        }
                        onChange={(event) => 
                          setCheckedStatus(
                            {
                              event, 
                              value, 
                              key, 
                              keysIndex, 
                              filtersIndex, 
                              isChecked, 
                            }
                          )
                        }          
                        sx={{
                          color: blue[800],
                          '&.Mui-checked': {
                            color: blue[600],
                          },
                        }}
                      />
                      }
                      label={value}
                      labelPlacement="end"
                    />
                  </div>
                ))}
              </div>
            }
          </div> 
        ))}
      </div>
    </>
  );
}