import {
  addValue,
  replaceArr,
} from '../reducer/tablereducer';

class Table {
  constructor(params) {
    this.dispatch = params.dispatch;
    this.data = params.data;
  }

  deleteRow(params) {
    const { index } = params;
    return this.dispatch(replaceArr(this.data.filter((item,i) => 
      i !== index
    )))
  }

  saveRow() {

  }

  editRow(params) {
    let arr = this.data.map((item, index) => {
      if (index === params.index) {
        return item = {
          date: item.date,
          product: item.product,
          number: undefined,
          price: item.price,
          summ: 0,
          disabledNumber: false,
          disabledPrice: true,
        }
      } else {
        return item
      }
      }
    )
    return (
      this.dispatch(replaceArr(arr))
    )
  }

  editColumn() {
    let arr = this.data.map(item =>
      item = {
        date: item.date,
        product: item.product,
        number: 0,
        price: item.price,
        summ: 0,
        disabledNumber: false,
        disabledPrice: true,
      } 
    )
    return (
      this.dispatch(replaceArr(arr))
    )
  }

  saveRow(params) {
    let arr = this.data.map((item, index) => {
      if (index === params.index) {
        return item = {
          date: item.date,
          product: item.product,
          number: params.editNumber,
          price: item.editPrice,
          summ: +params.editNumber + +item.price,
          disabledNumber: true,
          disabledPrice: true,
        }
      } else {
        return item
      }
      }
    )
    return (
      this.dispatch(replaceArr(arr))
    )
  }

  saveColumn(props) {

  }
}

export default Table;