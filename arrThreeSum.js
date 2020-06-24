function arrayThreeSum(arr, targetSum){

    //sorts the input arr from least to greatest
    arr.sort((a, b) => a-b)
  
    const solution = []
  
    for (let i = 0; i < arr.length-2; i++){
      let element = arr[i]
      let leftIndex = i + 1
      let rightIndex = arr.length - 1
  
      //for each element in the array check to see if any two other integers in the array add to the target sum
      while(leftIndex < rightIndex){
        let currentSum = element + arr[leftIndex] + arr[rightIndex]
  
        //if the currentSum is equal to the target sum add an array of those 3 integers to the solution array
        if(currentSum === targetSum){
          solution.push([element, arr[leftIndex], arr[rightIndex]])
          leftIndex ++
          rightIndex --
        } else if(currentSum > targetSum){
          rightIndex --
        } else if (currentSum < targetSum){
          leftIndex ++
        }
      }
    }
    return solution
  }