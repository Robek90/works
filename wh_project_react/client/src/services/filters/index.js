import { newSetArray } from '../../utils/common';

export const changeCheckedStatus = (props) => {
  if(props) {
    const {
      eCheck, 
      keysIndex, 
      filtersIndex, 
      isChecked,
    } = props;

    const updatedCheckedState = isChecked.map((elem) => 
      elem.map((item, index)=> {
        if(index === keysIndex) {
          return item.map((check,index) => {
            if(index === filtersIndex) {
              if(eCheck) {
                return true
              } else {
                return false
              }
            } else {
              return check
            }
          })
        } else {
          return item
        }
      })
    );

    return {updatedCheckedState}
  }
};

export const getCheckboxFromUrl = (props) => {
  const {filters, url, isChecked} = props;

  function CheckboxFromUrl() {
    let filtersArray = [];
    let urlCheckList = url.reduce((startValue, urlTag) => {
      let result = Object.values(startValue).map((value) => {
        let indexI;
        let indexE;
        
        Object.values(filters).forEach((elem, indexElem) => {
          newSetArray(elem).forEach((value, indexItem) => {
            if(value === urlTag) {
              indexI = indexItem
              indexE = indexElem

              Object.keys(filters).forEach((key,keysIndex)=> {
                if(indexElem === keysIndex) {
                  filtersArray.push({key, value})
                }
              })
            }
          })
        });
        return value.map((elem, elemIndex)=> elem.map((item, itemIndex) => {
          if (elemIndex === indexE) {
            if (itemIndex === indexI) {
              return !item 
            } else {
              return item
            }
          } else {
            return item
          }
        }))
      })
      return result
    },isChecked);

    return {urlCheckList, filtersArray}
  };
  
  return CheckboxFromUrl()
};