class Filters {
  constructor(params) {
    this.books = params.books;
    this.filteredBooks = params.filteredBooks;
  };

  getFilteredBooks(tags) {
    let tagFilter = tags.filter((item)=> item !== 'none');
    let filter = this.books.filter((books) => {
      let tag = tagFilter.every(i => books.categories.concat(books.tags).includes(i));
      return tag
    });

    return filter
  };

  createTagsArrays(category) {
    let array = [];
    
    this.books.forEach(item => {
      switch (category) {
        case "allbooks":
          if (item.categories.includes(category)) {
            item.tags.forEach(element => {
              array.push(element);
            });
          }
          break;
        case "wh30k":
          if (item.categories.includes(category)) {
            item.tags.forEach(element => {
              array.push(element);
            });
          }
          break;
        case "wh40k":
          if (item.categories.includes(category)) {
            item.tags.forEach(element => {
              array.push(element);
            });
          }
          break;
        default:
          break;
      }
    })

    return [...new Set(array)]
  }
}

export default Filters;