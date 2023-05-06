const array = [
  { id: 1, name: "Sam" },
  { id: 3, name: "Sarah" },
  { id: 5, name: "John" },
  { id: 6, name: "Burke" },
  { id: 10, name: "Simona" },
  { id: 12, name: "Asim" },
  { id: 13, name: "Niki" },
  { id: 15, name: "Aysegul" },
  { id: 17, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 19, name: "Marc" },
  { id: 21, name: "Chris" },
  { id: 23, name: "Brian" },
  { id: 24, name: "Ben" },
];

function binarySearch(id, array) {
  let min = 0;
  let max = array.length - 1;
        while(min<=max){
    let centeredIndex = Math.floor((min + max) / 2);
    let element = array[centeredIndex];
    if(element.id > id){
      max = centeredIndex - 1;
    }else if(element.id < id){
      min=centeredIndex+1;
      }else{
          console.log("finally, we found it!");
          console.log(element);
          return element;
        }
  }
}

binarySearch(23,array);
