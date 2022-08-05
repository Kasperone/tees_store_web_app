function findItems(arr, param1, param2, param3) {
  const findElem = arr.filter((elem) => elem[param1] === param2);
  return findElem.map((elem) => elem[param3]);
}

export { findItems };

// const getTshirtPrice = state.tshirtPriceCover.filter(
//   (elem) => elem.id === state.radioBtn,
// );
// return getTshirtPrice.map((elem) => elem.price);
