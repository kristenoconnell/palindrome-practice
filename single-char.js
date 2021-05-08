//given a word, return the first character that appears only once in the word

function firstSingleCharacter(word) {
    const map = new Map();
    const singleChars = [];
    
    if (word.length > 0) {
    for (let letter of word) {
      if (map.has(letter)) {
        let currentValue = map.get(letter);
        map.set(letter, (currentValue + 1));
      }
      if (!map.has(letter)) {
        map.set(letter, 1);
      }
    }
    for (let [letter, value] of map) {
      if (value === 1) {
        singleChars.push(letter);
      }
    }
      if (singleChars.length) {
        return singleChars[0];
      } else return null;
    } return null;
  }