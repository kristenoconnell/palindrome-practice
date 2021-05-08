
//i misunderstood the problem but i'm proud of this algo:

//assess whether a given word is a palindrome given the current order of the word
//using Maps as a data structure 
function palindrome(word) {
    const index = Math.floor((word.length - 1)/2);
     let firstHalf;
     let secondHalf;
     //if word is even
     //split at index
       if (word.length%2 === 0) {
         firstHalf = word.slice(0, index+1);
         secondHalf = word.slice(index+1, word.length);
       } 
     //if word is odd
     //split at index but ignore the letter at index
     if (word.length%2 !== 0) {
         firstHalf = word.slice(0, index);
         secondHalf = word.slice(index+1, word.length);
       }
       
     let firstMap = new Map();
     let secondMap = new Map();
     
     for (let i = 0; i < firstHalf.length; i++){
       firstMap.set(i, firstHalf[i]);
     }
     for (let i = 0; i < secondHalf.length; i++) {
       secondMap.set(i, secondHalf[i]);
     }
     console.log("firstHalf:", firstHalf);
     console.log("firstMap:", firstMap);
     console.log("secondHalf:", secondHalf);
     console.log("secondMap:", secondMap)
     
     //then reverse the index to see if they match
   }