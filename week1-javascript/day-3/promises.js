/* JavaScript Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner, more manageable alternative to traditional callbacks, helping to avoid "callback hell" and improve code readability.  */

const myPromise = new Promise((resolve,reject)=>{
    resolve('The function is completed: resolved')
})
myPromise.then((success)=>{
    console.log(success)
}).catch((error)=>{
    console.log(error)
})
/* there are three states: 
1. pending: promise is still pending, not resolve or rejected
2. fulfilled: promise is resolved
3. rejected: promise is rejected

*/

//onFullfileed, onRejected, callback demo
/* 
i have made a users.json file which contains 10 users having these properties
{
    "id": 1,
    "username": "rohit_dev",
    "email": "rohit@example.com",
    "profile": {
      "fullName": "Rohit Sharma",
      "age": 30,
      "address": {
        "city": "Delhi",
        "country": "India"
      }
    },
    "settings": {
      "theme": "dark",
      "notifications": {
        "email": true,
        "sms": false
      }
    },
    "account": {
      "isActive": true,
      "loginCount": 120,
      "lastLogin": "2025-12-28T10:30:00Z"
    }
  },

i will use fetch api inbuilt of javascript, to get the data also it will be practiced with async and await
*/

/* 
.then(onFulfilled) - handle success
.catch(onRejected) - handle error
.finally(callback) - runs regardless of outcome
demo  */

const userPromise = new Promise((resolve, reject)=>{
    //using live server
    fetch('http://127.0.0.1:5500/users.json').then((result)=>result.json()).then((data)=>{
        resolve(data)
    })
})

userPromise.then((data)=>{
    console.log(data.length) //gives 10
    //i can loop through it 
})
.catch((error)=>{
    console.log(`Error: `.error)
})
.finally((msg)=>{
    console.log('Operation complete')
})

//Promise methods
//1. all([p1,p2]) method: wait for all promises to be resolved

const p1 = new Promise((resolve,reject)=>{
    resolve('P1 Resolved')
})
const p2 = new Promise((resolve,reject)=>{
    resolve('P2 Resolved')
})
const all = Promise.all([p1,p2]).then(([resul1,result2])=>{
    console.log(resul1,result2)
})
//2. race([p1,p2]) method: wait for first promise to be resolve

const p11 = new Promise((resolve,reject)=>{
    resolve('P1 Resolved')
})
const p12 = new Promise((resolve,reject)=>{
    resolve('P2 Resolved')
})
const first = Promise.race([p11,p12]).then((data)=>{
    console.log(data)
})

//Promise.allSettled([p1,p2])
const p111 = new Promise((resolve,reject)=>{
    resolve('P1 Resolved')
})
const p112 = new Promise((resolve,reject)=>{
    reject('P2 Resolved')
})

const allSettled = Promise.allSettled([p111,p112]).then((data)=>{
    console.log(data)
})
/* 
Difference between Promise.all([p1,p2]) and Promise.allSettled([p1,p2]) is that, 
Promise.all() Fails immediately(rejects) on the first rejected promise, ignoring others
Promise.allSettled() Waits for all promises to settle and report on every single one, making it great for batch processing or logging all results
*/

//Promise.any([p1,p2]) -  first fulfilled
const a = new Promise((resolve, reject)=>{
    resolve('Promise 1 Resolved')
})
const b = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve('Promise 2 Resolved')
    },100)
})
const c = new Promise((resolve, reject)=>{
   resolve('Promise 3 Resolved')
})

const firstResolvedAny = Promise.any([a,b,c]).then((data)=>{
    console.log(data)
})