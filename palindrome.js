function longestPalindrome(s) {
    let maxLen = 0;
    let start = 0;
    let end = 0;
    for(let i = 0; i< s.length; i++){
        let len1 = check(s, i, i);
        let len2 = check(s, i, i+1);
        let len = Math.max(len1,len2)
        if(len > maxLen){
            start = i - Math.floor((len-1)/2);
            end = i + Math.floor(len/2);
            maxLen = len;
        }
    }
    return s.substring(start, end +1);
    
    
    function check(s, left, right){
        while(left >=0 && right <s.length && s[left] === s[right]){
            left--;
            right++;
        }
        return right -left -1;
    }
};