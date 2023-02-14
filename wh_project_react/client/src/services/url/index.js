import { useSearchParams } from "react-router-dom";

export function useGetUrlParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  let categories = searchParams.get('categories');
  let race = searchParams.get('race');
  let author = searchParams.get('author');
  let dateRealeased = searchParams.get('dateRealeased');
  let dateContext = searchParams.get('dateContext');
  let tags = searchParams.get('tags');
  let isbn = searchParams.get('isbn');
  let search = searchParams.get('search');

  return {categories, race, author, dateRealeased, dateContext, tags, isbn, search}
};


export const pathCol = (props) => {
  if(props){
    const {radioValue, selectFiltersArr} = props;

    const pathCol= {
      categories: [radioValue],
      race: [],
      author: [],
      dateRealeased: [],
      dateContext: [],
      tags: [],
    };

    if(selectFiltersArr.length>0) {
      selectFiltersArr.forEach((obj)=>{
        Object.keys(pathCol).forEach((key) => {
          if(obj.key === key) {
            pathCol[key].push(obj.value)
          }
        })
      })
    };
    
    function pathData() {
      let path=[];
    
      Object.values(pathCol).forEach((item,itemindex) => {
        if(item.length > 0) {
          Object.keys(pathCol).forEach((key,keyindex) => {
            if(keyindex === itemindex) {
              path.push(`${key}=${item.join(',')}`)
            }
          })
        }
      })

      return path
    }

    return pathData()
  }
};