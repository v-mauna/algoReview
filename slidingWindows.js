// Sliding Window Approach


function maxSubarraySum(arr, len){
    if(arr.length < len){
        return null
    }
    let maxSum = 0;
    for(let i = 0; i< len; i++){
        maxSum += arr[i]
    }
    let currentSum = maxSum
    for(let j = len; j<arr.length;j++){
        currentSum+= arr[j] - arr[j-len];
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}

// 
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }