import { replaceArr } from '../reducer/tablereducer';
import { validate } from './utils.js';

class Table {
  constructor(params) {
    this.dispatch = params.dispatch;
    this.data = params.data;
    this.columns = params.columns;
    this.validationStatus = params.validationStatus;
    this.setValidationStatus = params.setValidationStatus;
    // this.validate = params.validate;
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
    }
    if (changed) {
      changedRows = this.data.map((row,index) => 
      (changed[index] ? { ...row, ...changed[index] } : row));

      console.log(changed);
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
        summ: +item.number * +item.price,
      }
    })
    return (
    this.dispatch(replaceArr(result))
    )
  };
}
export default Table;