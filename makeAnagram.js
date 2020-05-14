function makeAnagram(a, b) {
    let lettersA = {};
    let lettersB = {}
    let count = 0;
    let c;
    for(let i = 0; i < a.length; i++){
        let char = a[i];
        lettersA[char] ? lettersA[char] +=1 : lettersA[char] = 1;
    }
    for(let i=0; i < b.length; i++){
        let char = b[i];
        lettersB[char] ? lettersB[char] +=1 : lettersB[char] = 1;
          console.log(lettersB)
    }
    for(let key in lettersA){
        c = lettersA[key] - (lettersB[key] || 0);
      count+= (c > 0) ? c : 0;
    }
    for(let key in lettersB){
      c = lettersB[key] - (lettersA[key] || 0);
      count+=  (c > 0) ? c : 0;
    }
    return count
    }