array = [
  20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000,
  3001, 1200, 633
];

function getLongestLength(array) {
  let longestLength = 0;
  for (let i = 0; i < array.length ; i++) {
    const currentLength = array[i].toString().length;
    longestLength = currentLength > longestLength? currentLength : longestLength;
  }
  return longestLength;
}

// number = 1391, place = 0, longestLength = getLongestLength() --> return 1;
// number = 1391, place = 1, longestLength = getLongestLength() --> return 9;
// number = 1391, place = 2, longestLength = getLongestLength() --> return 3;
// number = 1391, place = 3, longestLength = getLongestLength() --> return 1;

function getDigit(number, place, longestLength){  
 const currentNumber = number.toString();
 const currentNumberLength = currentNumber.length;

 // mod is because you need the last number in the array and then we are counting backwards
 // mod = 4 - 4 = 0
 const mod = longestLength - currentNumberLength;

 // 1st round: digit = 1391[0-0] = 1
 // 2nd round: digit = 1391[1-0] = 9
 // 3rd round: digit = 1391[2-0] = 3
 // 4th round: digit = 1391[3-0] = 1
 const digit = currentNumber[ place - mod ] || 0;

 return digit;
}

function radixSort(array){
    // find longest length
    const longestLength = getLongestLength(array);

    // create how many buckets you need
    // an array of 10 arrays ..
    // it takes O(d*(n+b)) time and in our case we will put the base case 10 ..
    // then we have a bucket for 0123456789
    // buckets here should be array of 26 if we radix sort anglish alphabet
    const buckets= new Array(10).fill().map(()=>[]); // this will just fill it with empty array .. we will have an array of 10 empty arrays

    // for loop for how many iterations you need to do
        // while loop
        // enqueue numbers into their buckets
        // for loop for each bucket
            //dequeue all items out of bucket
    for(let i = longestLength - 1; i >= 0; i--){
        while(array.length){
            const current = array.shift();
            buckets[getDigit(current, i, longestLength)].push(current);
        }

        for(let j = 0; j < buckets.length-1; j++){
             while(buckets[j].length){
                array.push(buckets[j].shift())
            }
        }
    }

    console.log(array);
    return array;
}

radixSort(array);