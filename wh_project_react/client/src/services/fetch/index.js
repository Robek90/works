import  { mockData }  from '../../component/stores/data/mockData';

export class BooksRequest {
  getBooksListAsync = async () => {
    const data = await mockData
    return data
  }
}