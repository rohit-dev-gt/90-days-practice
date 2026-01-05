const add=(a,b)=>{return a+b}
const sub = (a,b)=>{return a-b}
const mul = (a,b)=>{return a*b}
const div = (a,b)=>{ return(b==0)?'divider can not be zero':a/b;}

//sign


const calc = (op,a,b)=>{
    let result = null;
    switch(op){
    case '+':result =  add(a,b)
    break;
    case '-':result =  sub(a,b)
    break;
    case '*':result =  mul(a,b)
    break;
    case '/':result= div(a,b)
    break;
    default:result = 'Invalid operation'
    break;
}
return result
}


console.log(calc('/',100,200))