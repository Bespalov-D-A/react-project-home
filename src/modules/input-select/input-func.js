export const sortFunc = (data, setNewData, propText, propNum) => {
  let arr = [...data];
  arr.sort((a, b) => {
    return a[propText].localeCompare(b[propText]);
  });
  arr.sort((a, b) => {
    if (a[propText][0].localeCompare(b[propText][0]) === 0) {
      if (Number(a[propNum]) > Number(b[propNum])) return -1;
      else if (Number(a[propNum]) < Number(b[propNum])) return 1;
    }
  });
  setNewData( reIncludeArray(arr) );
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const reIncludeArray = array => {
    let arr = [...array]
    arr.forEach((item) => {
    item.label = item.city + ` (${item.population})` 
    item.value = item.city
      item.key = getRandomInt(99999)
    })
    return arr
}
