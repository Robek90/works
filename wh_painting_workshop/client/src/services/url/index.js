import { useSearchParams } from "react-router-dom";

export function useUrlParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  let catalog = searchParams.get('catalog');
  let category = searchParams.get('category');

  return {catalog, category}
};