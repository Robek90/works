import { replaceArr } from '../reducer/tablereducer';
import { validate } from './utils.js';

class Table {
  constructor(params) {
    this.dispatch = params.dispatch;
    this.data = params.data;
    this.columns = params.columns;
    this.validationStatus = params.validationStatus;
    this.setValidationStatus = params.setValidationStatus;
  };

  finalAmount() {
    let arrSumm = [];
    this.data.map(item => arrSumm.push(item.summ))
    let finalSumm = this.data.reduce((summ,current) => summ + +current.summ, 0)
    return finalSumm.toFixed(2)
  };

  mul(a,b) {
    let c; 
    if(isNaN(a) && isNaN(b)) {
      c = 0.00
    } else {
      c = +a * +b
    }
    return c.toFixed(2)
  };

  commitChanges(params) {
    let { added, changed, deleted } = params;

    let changedRows;

    if (added) {
      changedRows = [
        ...this.data,
        ...added.map((row) => ({
          ...row,
        })),
      ];

      this.setValidationStatus({ ...this.validationStatus, ...validate(added, this.validationStatus) });
    }

    if (changed) {
      changedRows = this.data.map((row,index) => 
      (changed[index] ? { ...row, ...changed[index] } : row));

      this.setValidationStatus({ ...this.validationStatus, ...validate(changed, this.validationStatus) });
    }

    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = this.data.filter((row,index) => !deletedSet.has(index));
    }

    let result = changedRows.map((item,index)=>{
      return {
        id: index,
        product: item.product,
        number: item.number,
        price: item.price,
        summ: this.mul(item.number, item.price),
      }
    })
    
    return (
      this.dispatch(replaceArr(result))
    )
  };
}

export default Table;