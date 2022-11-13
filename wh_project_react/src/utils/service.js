class Filters {
  constructor(params) {
    this.books = params.books;
    this.filteredBooks = params.filteredBooks;
  };

  menuFilterBooks(wh) {
    let tagFilter = [];

    wh.forEach((tag) => {
      if(tag !== 'null') {
        tagFilter.push(tag)
      }
    });
    
    let menuFilter = this.books.filter((books)=> {
      let tag = tagFilter.every(i => books.tags.includes(i));
      return tag
    })

    return menuFilter
  };
}

export default Filters;