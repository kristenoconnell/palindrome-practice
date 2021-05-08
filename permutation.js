//given a string, assess whether any anagram of that string is a palindrome

function permutationPalindrome(word) {
    //find half index (math.floor)
    //splice word in half at index
    //if word is uneven ignore the middle index and make second half index+! to end
   
    const map = new Map();
    for (let letter of word) {
      if (map.has(letter)) {
        //if the letter exists
        //add one to the current value
        let currentValue = map.get(letter);
        map.set(letter, (currentValue + 1));
      }
      //if the letter does not exist, add at value 1
      if (!map.has(letter)) {
        map.set(letter, 1);
      }
    }
    //if value is even, delete letter
    for (let [letter, value] of map) {
      if (value%2 === 0) {
        map.delete(letter);
      }
    }
    //if word is even and map is empty, true
    if (word.length%2===0) {
      if (map.size === 0) {
        return true;
      }
    }
    //if word is odd and map has one letter, true
    if (word.length%2 !==0) {
      if (map.size === 1) {
        return true;
      }
    }
    return false;
  }