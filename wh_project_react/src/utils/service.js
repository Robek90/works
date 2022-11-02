class Filters {
  constructor(params) {
    this.books = params.books;
    this.filteredBooks = params.filteredBooks;
  };

  menuFilterBooks(wh) {
    let whFilter = wh;

    if(wh[1] === null) {
      whFilter = [wh[0]];
    };

    let menuFilter = this.books.filter((books)=> {
      let tag = whFilter.every(i => books.tags.includes(i));
      return tag
    })

    return menuFilter
  };

  tagsFilterBooks(tags) {
    let tagfilter = this.filteredBooks.filter((books)=> {
      let tag = tags.every(i => books.tags.includes(i));
      return tag
    })
    
    return tagfilter
  }
}

export default Filters;