//given an array of words, group together the words that are anagrams of each other 

function anagramGroups(words) {
    //for each word
    //all lowercase
    //put in new array and sort alphabetically
    //make new map
    //if map has matching key with that array
    //map.set (key, current array of words + word)
    //else map.set (key = sorted string, value = array of current word aka [word]);
    const map = new Map();
    
    for (let word of words) {
      word = word.toLowerCase();
      let wordArray = word.split("").sort().join();
        if (map.has(wordArray)) {
          map.get(wordArray).push(word);
        } else {
           map.set(wordArray, [word]);
        }
    }
    return [...map.values()];
  }
  