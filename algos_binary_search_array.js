let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function binarySearch(array, term) {
  
  let left = 0;
  let right = array.length -1;
  
  console.log( "left: " + left + " | right: " + right);
  
  while (left <= right) {

  const mid = left + Math.floor((right - left) / 2);
  console.log( "mid: " + mid);
    
    if (mid === term) {
      console.log(term + " found");
      return mid;
    }
    if (array[mid] < term) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log (term + " not found!")
  return -1;
}

binarySearch(array, 2);