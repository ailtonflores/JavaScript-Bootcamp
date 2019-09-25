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
//Get the DOM element for a individual note
const generateTodoDOM = function (todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    return p

}

//Get the DOM elements to list summary
const generateSummaryDOM= function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
return summary
}