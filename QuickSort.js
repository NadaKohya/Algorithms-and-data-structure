      const array = [3, 7, 8, 5, 2, 1, 9, 5, 4];
           function QuickSort(array) {
        if (array.length <= 1) {
          return array;
        }
       const pivot = array[array.length - 1];

        const leftArray = [];
        const rightArray = [];

        for(let i=0; i<array.length-1; i++)
        {
          if (array[i] > pivot) {
            rightArray.push(array[i]);
          } else {
            leftArray.push(array[i]);
          }
        }

        const sortedLeft = QuickSort(leftArray);
        const sortedRight = QuickSort(rightArray);

        return sortedLeft.concat(pivot, sortedRight);
      }
      const finalSortedArray = QuickSort(array);
console.log(finalSortedArray);
