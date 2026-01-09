//add todo
let todos = []
const todoInput = document.querySelector("#todo")
const submitBtn = document.querySelector("#submit")
const list = document.querySelector("#todos")
const addTodo = async (todo)=>{
    const id = todos.length+1
    const todoObj = {id,name:todo}
    console.log(todoObj)
    await todos.push(todoObj)
    await syncTodos(todos)
    listTodos()
}
const syncTodos = async  (todos)=>{
    const todos_string = await JSON.stringify(todos)
    localStorage.setItem('todos',todos_string)

}
const getTodos =  async ()=>{
    if(localStorage.getItem('todos')){
        let mytodosString = await localStorage.getItem('todos')
        let mytodos = await JSON.parse(mytodosString)
        todos = mytodos
    }
    return todos
}

const listTodos = async ()=>{
    await getTodos()
    list.innerHTML = ''
    todos.forEach((item)=>{
        list.innerHTML +=`<li>${item.name}</li>`
    })
}

const clearTodos = ()=>{
    localStorage.removeItem('todos')
    todos = []
    listTodos()
}

listTodos() //show existing todos by default

submitBtn.addEventListener('click',function(){
    const input = todoInput.value
    addTodo(input)
    todoInput.value = ''
    
})
