function averagePair(arr, targetValue){
    if(arr.length < 2){
        return false
    }
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let average = (arr[start] + arr[end])/2;
        if(average === targetValue){
            return true
        }else if(average < targetValue){
            start++
        }else{
            end--
        }
        
    }
    return false

}