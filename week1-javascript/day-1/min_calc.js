function calc(op,first,second){
    let result = null
    switch(op){
        case '+':result = first+second
        break;
        case '-':result = first-second
        break;
        case '*':result = first*second
        break;
        case '/':
            if(second==0){
                return 'Divider can not be zero';
            }
            result = first/second;
        break;
        default:return 'Invalid operation';
        break;
    }
    return result
}

console.log(calc('+',100,200))
console.log(calc('*',100,200))
console.log(calc('-',100,200))
console.log(calc('/',100,200))
console.log(calc('/',100,0))
console.log(calc('',100,0))