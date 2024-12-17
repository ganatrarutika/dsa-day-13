let stack = [1,2,3,4,5];

function reverse (stack){
    let reversestack = [];

    while(stack.length>0){
       reversestack.push(stack.pop());
    }
    return reversestack;
}
console.log(reverse(stack));