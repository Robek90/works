class Filters {
  constructor(params) {
    this.books = params.books;
    this.filteredBooks = params.filteredBooks;
  };

  getFilteredBooks(tags) {
    let tagFilter = tags.filter((item)=> item !== 'none')
    let menuFilter = this.books.filter((books)=> {
      let tag = tagFilter.every(i => books.tags.includes(i));
      return tag
    })
    return menuFilter
  };
}

export default Filters;