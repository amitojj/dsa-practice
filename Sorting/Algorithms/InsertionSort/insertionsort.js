const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
let arr = [3, 2, 1, 5, 6, 4, -2, 44, 0, 0, 1, 99];
insertionSort(arr);
console.log(arr);