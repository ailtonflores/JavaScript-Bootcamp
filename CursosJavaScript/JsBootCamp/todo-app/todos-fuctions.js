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



