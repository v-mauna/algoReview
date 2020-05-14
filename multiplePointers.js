// count unique vals in sorted array
function countUniqueValues(arr){
    if(arr.length < 2){
        return arr.length
    }
    let start = 0;
    for(let next = 1; next < arr.length; next++){
        if(arr[start] !== arr[next]){
            start++
            arr[start] = arr[next]
        }
    }
    // returning the length of the array
    return start + 1
}