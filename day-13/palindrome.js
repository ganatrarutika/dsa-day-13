function isPalindrome(str) {
    let stack = [];
    let length = str.length;

    for (let i = 0; i < length; i++) {
        stack.push(str[i]);
    }
    for (let i = 0; i < length; i++) {
        if (str[i] !== stack.pop()) {
            return false; 
        }
    }
   return true; 
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 
