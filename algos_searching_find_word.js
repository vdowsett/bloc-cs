function wordSearch(arrayToSearch, wordToFind) {
    var lowElement = arrayToSearch[0];
    var highElement = arrayToSearch[arrayToSearch.length - 1];
  
    while (lowElement <= highElement) {
      var middleElement = (arrayToSearch.indexOf(lowElement) + arrayToSearch.indexOf(highElement)) / 2;
      middleElement = Math.round(middleElement);
  
      if (arrayToSearch[middleElement] > wordToFind) {
        highElement = arrayToSearch[middleElement - 1];
      } else if (arrayToSearch[middleElement] < wordToFind) {
        lowElement = arrayToSearch[middleElement + 1];
      } else {
        return arrayToSearch[middleElement];
      }
    }
    return 'That name is not in the list';
  }

  var dictionary = ['Albatross','Baboon','Cat','Dog','Egret','Falcon','Gorilla','Hare','Incubus','Jellyfish','Killer Whale'];
wordSearch(dictionary, 'Albatross');