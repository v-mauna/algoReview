function pairSum(arr, sum) {
    let leftPointer = 0
    let rightPointer = arr.length - 1
    while (leftPointer < rightPointer) {
      const currentSum = arr[leftPointer] + arr[rightPointer]
      if (currentSum === sum) {
        return true
      } else if (currentSum < sum) {
        leftPointer++
      } else {
        rightPointer--
      }
    }
    return false
  }