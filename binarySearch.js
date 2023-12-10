function binarySearch(arr, target) {
   let leftIndex = 0;
   let rightIndex = arr.length - 1;
   if (target < arr[leftIndex] || target > arr[rightIndex]) {
      return -1;
   }
   while(leftIndex <= rightIndex) {
     let midIndex = Math.floor((leftIndex + rightIndex) / 2);
     if (target === arr[midIndex]) {
        return midIndex;
     }
     else if (target > arr[midIndex]) {
        leftIndex = midIndex + 1;
     }
     else {
        rightIndex = midIndex - 1;
     }
   }
   return -1;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 2;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Izlanayotgan qiymat-${targetValue} berilgan qatordagi ${result}-indeksda topildi.`);
} else {
    console.log(`Izlanayotgan qiymat-${targetValue} berilgan qatorda topilmadi.`);
}