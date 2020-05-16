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

// maxSubArraySum - array of integers and a num = n. Function should calculate maxSum of n consecutiv elements in the array.

// without multiple pointers: 
function maxSubarraySum(arr,num){
    if(num > arr.length){
        return null
    }
    let max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        let temp = 0;
        for (let j = 0; j < num ; j++){
            temp+= arr[i+j];
        }if ( temp > max){
            max = temp
        }
    }
    return max
}

// with multiple pointers

function maxSubArraySum(arr, num){
    if(arr.length < num){
        return null
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i=num; i < arr.length; i++){
        console.log('arr[i-num]', arr[i-num])
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
    
}

// Frequency Counter

function sameFrequency(num1,num2){
    let freqCounter = {};
    num1 = [...num1];
    num2 = [...num2]
    for(let i =0; i<num1.length; i++){
        let num = num1[i];
        freqCounter[num] ? freqCounter[num] = freqCounter[num]+=1 : freqCounter[num] = 1
    }
    for(let j = 0; j<num2.length; j++ ){
        let num= num2[j];
        if(!freqCounter[num]){
            return false
        }
        freqCounter[num] -=1
    }
    return true
}

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
