const arrayList = {};

arrayList.map = (arr, callback) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = callback(arr[i], i);
  }
  return newArray;
};

arraylist.filter = (arr, callback) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)){
      newArray.push(arr[i]);
    } 
  }
  return newArray;
};


module.exports = arrayList;
