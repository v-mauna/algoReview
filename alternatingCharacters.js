function alternatingChars(str){
    let deletedCount = 0;
    let idx = 0;
    while(idx < str.length){
        if(str[idx] === str[idx+1]){
            deletedCount+=1;
            idx+=2;
        }
       
    }
    return deletedCount

}

console.log(alternatingChars('AAABBB'))