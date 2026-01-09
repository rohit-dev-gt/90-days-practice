//Parallel execution with Promise.all()
//Getting users, posts, comments at the same time using Promise.all, async and await

const loadDashboard = async ()=>{
    const  [users,posts,comments] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()),
        fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(response=>response.json()),
    ])

    return {users,posts,comments}
}
loadDashboard().then(({users,posts,comments})=>{
    console.log(users.length, posts.length,comments.length)
})

//Top-level await (in modules)
/* 
scrpit.js
const response = await  fetch('https://jsonplaceholder.typicode.com/users')
const users = await response.json()

export {users}
*/
