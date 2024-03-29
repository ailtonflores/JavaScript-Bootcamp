//Fecth existing todos from localstorage
const getsavedtodos = function (){
    const todosJason = localStorage.getItem('todos')
    if (todosJason !== null )    {
        return JSON.parse(todosJason)
    }else{
        return []
    }
    
}

//save todos to local storage

const savetodos = function (todos){
const itemsaved=   localStorage.setItem('todos',JSON.stringify(todos))
    return itemsaved
}

//render todos
const renderTodos = function (todos, filters) {
    var filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

   
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}
//Remove a todo from the list
const removeNote = function(id){
const todoindex = todos.findIndex(function (todo){
    return todo.id === id
})
if (todoindex > -1){
    todos.splice(todoindex,1)

}
}
// Toggle the completed value for a given todo
const toggleTodo = function(id){
    const todo = todos.find( function (todo){
    return todo.id ===id
} )
    if (todo !== undefined){
        todo.completed = !todo.completed
    }

}

//Get the DOM element for a individual note
const generateTodoDOM = function (todo){
    const TodoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const Removebutton= document.createElement('button')

    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    TodoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function (){
        toggleTodo(todo.id)
        savetodos(todos)
        renderTodos(todos,filters)
    })
    
    //setup the remove todo button
    todoText.textContent = todo.text
    TodoEl.appendChild(todoText)

    Removebutton.textContent= 'X'
    TodoEl.appendChild(Removebutton)
    //remove item
    Removebutton.addEventListener('click',function (){
    removeNote(todo.id)
    savetodos(todos)
    renderTodos(todos, filters)     
    
    })
    return TodoEl
}


//Get the DOM elements to list summary
const generateSummaryDOM= function(incompleteTodos){
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
return summary
}
