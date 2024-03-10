const swap = (arr, first, second) => [arr[first], arr[second]] = [arr[second], arr[first]]

const compare = (first, second) => {
    return first - second
}

const bubble_sort  = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (compare(arr[j], arr[j+1]) > 0) {
                swap(arr, j, j+1)
            }
        }
    }
}


const bubble_sort  = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j+1]) > 0) {
                swap(arr, j, j+1)
            }
        }
    }
}
