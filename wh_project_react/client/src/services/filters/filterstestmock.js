let isChecked = [
  [
    [false,false,false],
    [false,false,false],
    [false,false,false],
  ]
];

export let checkedStatusData = () => {
  return {
    eCheck: true,
    keysIndex: 1,
    filtersIndex: 0,
    isChecked: isChecked
  }

};

export let chekedStatusUrlData = () => {
  let filters = {
    "race": [
      "imperium",
      "chaos",
      "necrons",
    ],
    "author": [
      "Дэн Абнетт",
      "Гремм Макнилл",
      "Бен Каунтер",
    ],
    "dateRealeased": [
      "2006",
      "2007",
      "2008",
    ],
}

  let url = [
    "imperium",
    "Дэн Абнетт",
    "2006",
  ];

  return {filters,url,isChecked}
};