import {changeCheckedStatus, getCheckboxFromUrl} from "./index";
import {checkedStatusData, chekedStatusUrlData} from "./filterstestmock";

describe('Checkbox sidebar filters test', () => {
  test('Checked status change',()=>{
    expect(changeCheckedStatus(checkedStatusData())).toEqual(
      {
        "updatedCheckedState":[
          [
            [false,false,false],
            [true,false,false],
            [false,false,false],
          ]
        ]
      }
    );
  });

  test('Checked status get from url',()=>{
    expect(getCheckboxFromUrl(chekedStatusUrlData())).toEqual(
      {
        filtersArray: [
          {
              "key": "race",
              "value": "imperium"
          },
          {
              "key": "author",
              "value": "Дэн Абнетт"
          },
          {
              "key": "dateRealeased",
              "value": "2006"
          }
          ], 
        urlCheckList: [
          [
            [ true, false, false ],
            [ true, false, false ],
            [ true, false, false ]
          ]
        ]}
      );
  });
})