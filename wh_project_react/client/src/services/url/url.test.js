import {useGetUrlParams, pathCol} from "./index";

let pathMock = {radioValue:'allbooks', selectFiltersArr: [
  {key: 'race', value: 'imperium'},
  {key: 'dateRealeased', value: '2009'},
  {key: 'tags', value: 'примарх'},
  {key: 'tags', value: ' фулгрим фенексиец'},
]};

const searchParams = {categories: 'allbooks', race: 'imperium', author: 'Дэн Абнетт', dateRealeased: '2006', dateContext: '31000', tags: 'примарх'};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => [new URLSearchParams(searchParams)],
}));

describe('urlServicesTests', () => {
  test('useGetUrlParams passed',()=>{
    expect(useGetUrlParams()).toEqual({categories: 'allbooks', race: 'imperium', author: 'Дэн Абнетт', dateRealeased: '2006', dateContext: '31000', tags: 'примарх', isbn: null, search: null});
    expect(useGetUrlParams()).not.toEqual({categories: 'allbooks', race: 'imperium', author: 'Дэн Абнетт', dateRealeased: '2006', dateContext: '31000', tags: 'примарх'});
  });

  test('pathCol passed',()=>{
    expect(pathCol(pathMock)).toEqual(['categories=allbooks', 'race=imperium', 'dateRealeased=2009', 'tags=примарх, фулгрим фенексиец']);
    expect(pathCol({radioValue:'allbooks',selectFiltersArr:[]})).toEqual(['categories=allbooks']);
  });
})