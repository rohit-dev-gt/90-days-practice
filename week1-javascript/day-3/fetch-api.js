/* 
use to make http requests to the server, Fetch is the modern replacement for XMLHttpRequest
returns 
*/
//demo
//https://jsonplaceholder.typicode.com/users

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //by default fetch makes GET Request

    /* 
    to make post request, we need to send additional headers
    fetch('https://jsonplaceholder.typicode.com/users',{method:'POST'})
    */

    /* 
    response.ok: shows response status 200
    response.status: shows status 200, 404 or any server error like 501, or 500
    */

    //const users  = await response.text() //gives text response
    //response.blob() - gets binary data

    const users = await response.json() //parsing json
    console.log(users)
}

//getUsers()

//Request options: method, headers, body
/* 
const response = await fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // Automatically converted to "username=example&password=password"
  body: new URLSearchParams({ username: "example", password: "password" }),
  // …
});
*/

//getting any network error using try catch

const getAllUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error('HTTP error: Status ' + response.status)
        }
        const data = await response.json();
        console.log('Data fetched successfully:', data);
        return data
    } catch (error) {
        console.error('An error occurred:', error.message);
    }


}

getAllUsers()

