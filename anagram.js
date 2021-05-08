//check if one string is an anagram of another string


function anagram(s1, s2) {
    //come back and condense this!!
    const firstWord = new Map();
    const result = [];
    for (let i = 0; i < s1.length; i++) {
      firstWord.set(i, s1[i].toLowerCase());
    };
    if (s1.length === s2.length) {
      for (let value of firstWord.values()) {
        if (s2.toLowerCase().includes(value)) {
          result.push(true);
        } else {
          result.push(false);
        }
      }
      if (result.every((check) => check === true)) {
        return true;
      } else return false;
     } 
    return false;
  }