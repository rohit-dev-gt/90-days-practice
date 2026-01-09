/* 
In JavaScript, async and await are modern keywords used to simplify asynchronous programming, making promise-based code read and behave more like synchronous code. They were introduced as "syntactic sugar" on top of Promises in ES2017 (ES8). 
async Keyword
The async keyword is used to declare an asynchronous function. 
An async function always returns a Promise.
If you return a non-Promise value from an async function, JavaScript automatically wraps that value in a resolved Promise. 


await Keyword
The await keyword is used inside an async function to pause the execution of that function until a Promise is settled (either resolved or rejected). 

It waits for the asynchronous operation to complete and returns its fulfillment value.
await can only be used within an async function or at the top level of a JavaScript module. 
*/

/* for api, https://jsonplaceholder.typicode.com/users endpoint, fake api endpoint */

/* async await demo */
 const  getUsers = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users?limit=2')
    const users = await response.json()
    return users
 }
getUsers().then((users)=>{
    console.log(users)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log(`Data has been fetched`)
})

