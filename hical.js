let hiCal = (arr) => {
  var obj = arr.reduce((acc,el) => {
    acc[el.startTime] = el.endTime;
    return acc;
  },{})
  var miniarr = [];
  for (var i = 1; i < arr.length; i++) {
      let temp  = arr[i].startTime - 1;
    if (obj[temp]) {
      obj[temp] = (obj[temp] < arr[i].endTime) ? arr[i].endTime : obj[temp];
      miniarr[0] = temp;
      miniarr[1] = obj[temp];
      if (obj[temp+1]) {
        delete obj[temp+1];
      }
    }  else if (arr[i].startTime >= miniarr[0] && miniarr[1] >= arr[i].endTime ) {
        delete obj[arr[i].startTime];
    }
  }
  return obj

}

let timeSheetArr = [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
]


console.log(hiCal(timeSheetArr));
