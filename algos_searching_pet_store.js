function findFish(fishesToSearch, fishToFind) {
    for (var i = 0; i < fishesToSearch.length; i++) {
      if (fishesToSearch[i] === fishToFind) {
        return "You netted a " + fishToFind + " from the fish tank";
      }
    }
    return "There is no " + fishToFind + " in the tank";
  }
  
  var fishTank = ['goldfish','goldfish','green swordtail','commmon molly','goldfish','platy','white-spotted goldfish','platy','common molly','goldfish'];
  
  findFish(fishTank, 'white-spotted goldfish');