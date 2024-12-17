let str = "hello";

function reverse (str){
    let stack = [];
    for(let i=0;i<str.length;i++){
        stack.push (str[i]);
    }
    let reversedstr = "";
    while(stack.length>0){
        reversedstr += stack.pop();
    }
    return reversedstr;
}
console.log(reverse(str));