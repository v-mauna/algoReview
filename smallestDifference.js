const smallestDifference = (arr,arr2)=>{
    arr = arr.sort((a,b)=>{a-b})
    arr2 = arr2.sort((a,b)=>{a-b})
    let idx1 = 0;
    let idx2 = 0;
    let smallest = Infinity
    let current = Infinity
    let smallestPair = []
    while(idx1 < arr.length && idx2 <arr2.length){
        let firstNum = arr[idx1]
        let secondNum = arr2[idxTwo]
        if(firstNum <secondNum){
            current = secondNum - firstNum
            idxOne +=1
        }
    else if (secondNum<firstNum){
        current = firstNum - secondNum
        idxTwo+=1
    }else{
        return [firstNum,secondNum]
    }
    if(smallest > current){
        smallest = current
        smallestPair = [firstNum,secondNum]
    }
}
return smallestPair
}