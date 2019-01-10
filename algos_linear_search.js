let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearSearch(array, term) {
  
  for (let i = 0; i <= array.length; i++) {
    if (array[i] == term) {
      console.log( term + " was found in position: " + i);
      return i;
    }
  }
  console.log( term + " not found ");
  return -1;
}

linearSearch(array, 10);