const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for(let i=array.length - 1; i>0; i--) {
        for(let j=0; j<i; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    // return array;
}

bubbleSort(numbers);
console.log(numbers);
// console.log(numbers[numbers.length]);