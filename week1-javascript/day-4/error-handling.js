/*
Error handling: managing and responding to errors that occur during the program execution to prvent script from crashing and provide a better user experience
it contains try, catch and finally block
try contains code that might throw an error
catch recieves an error object containing details about  exception, name, message and stack trace
finally block: this block executes unconditionally after the try and catch blocks have finished, regardless whether an error occured or was handled.its commonly used  for cleanup tasks like closing file connections or hiding loading spinners. 
*/
function makePayment(amount){
    try{
        console.log('Processing payment...')

        if(amount<=0){
            throw new Error('Invalid Amount')
        }

        console.log('Payment successful')
    }catch(error){
        console.log('Payment Failed '+ error.message)
    }finally{
        console.log('Payment attempt finished')
    }
}

makePayment(400)
makePayment(0)

/* 
throw statement: in programming immediately stops the current code execution and generates  a user-defined execption (an error) passing the control to the nearest catch block in the call stack to handle it or terminate the program if no handler found. its used to signal than an error has occured

Error object: built-in object that represents a runtime error
*/