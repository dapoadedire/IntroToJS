
function filter(arr) {
    let negative_array = []
    let positive_array = []
    for (i in arr) {
        if (arr[i] < 0) {
            negative_array.push(arr[i])
        } else {
            positive_array.push(arr[i])
        }
    }
    console.log(negative_array)
    console.log(positive_array)
}

filter([2, 4, 6, 8, 10, -1, -3, -5, -7, -9])