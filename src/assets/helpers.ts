// The function of sorting rows by rating or by name
export const patternSorting = (arrUnsorted, statusSort, type, colNum) => {
  let compare;

  // up
  if (!statusSort) {
    switch (type) {
      case 'num':
        compare = function(rowA, rowB) {
          return rowB[colNum] - rowA[colNum];
        };
        break;
      case 'str':
        compare = function(rowA, rowB) {
          return rowA[colNum] > rowB[colNum];
        };
        break;
      default: break;
    }
  }
  // -----------------------------------------------------------

  // down
  if (statusSort) {
    switch (type) {
      case 'num':
        compare = function(rowA, rowB) {
          return rowA[colNum] - rowB[colNum];
        };
        break;
      case 'str':
        compare = function(rowA, rowB) {
          return rowA[colNum] < rowB[colNum];
        };
        break;
      default: break;
    }
  }
  // -----------------------------------------------------------

  return arrUnsorted.sort(compare);
};
// -------------------------------- END ---------------------------------


export  const parseResponseInNewArray = (response) => {
  const data = response;
  let newArr = [];

  for (let i = 0; i < data.length; i += 1) {
    let arr = [];
    for (let index = 0; index <= 5; index += 1) {
      switch (index) {
        case 0:
          arr.push(data[i].show.id);
          break;
        case 1:
          arr.push(data[i].show.name);
          break;
        case 2:
          arr.push(data[i].show.language);
          break;
        case 3:
          arr.push(data[i].show.genres.length ? data[i].show.genres.join(', ') : '-');
          break;
        case 4:
          arr.push(data[i].show.status);
          break;
        case 5:
          arr.push(data[i].show.rating.average ? data[i].show.rating.average : 0);
          break;
        default: break;
      };
    }
    newArr.push(arr);
  }
  return newArr;
};
// -------------------------------- END ---------------------------------
