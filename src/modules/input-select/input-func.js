//Функция сортировки массива объектов по двум значениям
//Сначала сортирует по алфавиту, затем ставит выше те объекты
//У которых значение propNum выше
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
  setNewData(reIncludeArray(arr));
};

//Генерация рандомного числа в диапозоне от 0 до max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Внесение изменений в отсортированный список
const reIncludeArray = (array) => {
  let arr = [...array];
  arr.forEach((item) => {
    item.label = item.city + ` (${item.population})`;
    item.value = item.city;
    item.key = getRandomInt(99999);
  });
  return arr;
};
