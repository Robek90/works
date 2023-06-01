class Filters {
  constructor(params) {
    this.books = params.books;
  };

  /**
  * FIXME переделать фильтрацию для паралельного поиска тегов с одной группы
  * разобраться, доработать
  */
 
  getFilteredBooks(categories, filteredTags) {
    let tagFilter = filteredTags.filter((item)=> item !== 'none');
    let categoriesBooks = this.books.filter((books) => {
      return books.categories.includes(categories)
    });

    let filtersResults = tagFilter.reduce((booksArr, nextBook) => {
      let result = booksArr.map((book) => 
        book.filter((bookTags) => 
          true === Object.values(bookTags).some((tag) => {
            if(Array.isArray(tag)) {
              let clearTag = tag.flat().filter(item => item)
              return clearTag.includes(nextBook)
            }
      })))
      return result
    },[categoriesBooks]);

    return filtersResults.flat()
  };

  searchBooks(searchParams) {
    let search = this.books.filter((books) => {
      console.log(books);
      switch(true) {
        case books.title.includes(searchParams):
          return true;
        case books.author.join(';').toLowerCase().includes(searchParams):
          return true;
        default:
          break;
      }
      
      books.title.includes(searchParams)
      books.title.includes(searchParams)
    });

    return search
  };
}

export default Filters;