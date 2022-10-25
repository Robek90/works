class MenuFilter {
  constructor(params) {
    this.books = params.books;
  };

  menuFilterBooks(wh, setMenu) {
    let arr = [];

    this.books.forEach((item) => {
      let filter;
      item.tags.forEach((x) => {
        if(x === wh[0]) {
          filter = true
        }
      })
      if(filter) {
        if(wh[1] !== null) {
          item.tags.forEach((x) => {
            if(x === wh[1]) {
              arr.push(item)
            }
          })
        } else {
          console.log(item);
          arr.push(item)
        }
      }
    })
    setMenu(arr)
  };
}

export default MenuFilter;