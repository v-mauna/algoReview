function validAnagram(word1,word2){
    if(word1.length !== word2.length){
        return false
    }
    const letters = {};
    for(let i = 0; i < word1.length; i++){
        let letter = word1[i];
        letters[letter] ? letters[letter]+=1 : letters[letter] = 1;
    }
    for(let i = 0 ; i < word2.length; i++){
        let letter = word2[i];
        if (!letters[letter]){
            return false
        }else{
            letters[letter] -=1
        }
    }
    return true

}