

/*Comentei aqui para efetua o exercicio da lição 7 pat 2
------------------------------------------------------------------------------

const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

console.log(`You have ${todos.length} todos!`)
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)

// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog



//my solution 
const rotinamatinal = ['levantar','tomar banho', 'escovar os dentes', 'tomar café', 'sair para o trabalho' ]


console.log(`Você tem ${rotinamatinal.length-2} coisas para fazer!`)
console.log("Sua rotina matinal hoje é :"  , rotinamatinal[1],"," ,rotinamatinal[2] ,",",rotinamatinal[rotinamatinal.length -1])
// alternativo

console.log(`Sua rotina hoje é : ${rotinamatinal[1]}, ${rotinamatinal[2]} e ${rotinamatinal[rotinamatinal.length-1]}.`)

// my soluction exercice two
const listadecompras=["bolachas ", "café", "feijão", "açucar", "farinha"]

// excluir o terceiro ítem
// Adicionar ítem no final
// remover o primeiro item da lista


console.log(listadecompras.splice(1,1))
console.log(listadecompras)
console.log(listadecompras.push("frutas"))
console.log(listadecompras)
console.log(listadecompras.shift())
console.log(listadecompras)
listadecompras.forEach(function( item, index){
    console.log(`${index + 1}. ${item}`)
    
})
 
// my solution 
// Apresenta a lista ao inverso utilizando o for
for (count = listadecompras.length -1 ; count >= 0 ; count-- ){

    console.log(`${count +1 }. ${listadecompras[count]}`)
}
*/

//exercicio da lição 7 pat 2

const books = [{
        titulo : 'Os desaparecidos',
        autor: 'Maria Alba',
        body:' Historia do golpe de 64',
        disponivel: true


},{
        titulo : 'Programando em C',
        autor: 'Pedro Paulo',
        body:'aprenda a programar em C',
        disponivel: true
        
},{
        titulo : 'Mil Léguas submarinas',
        autor: 'Victor Hugo',
        body:'Aventura',
        disponivel: true
        
},{
        titulo : 'Sem Saida',
        autor: 'Eduard Snownd',
        body:'revelando os segredos da CIA',
        disponivel: false
        
}]
//Deleta um item do array
const deleteBook = function (books, noteTitle) {
        const index= books.findIndex(function (campo) {
            return campo.titulo.toLowerCase() === noteTitle.toLowerCase()
        })
if (index > -1){
books.splice(index,1)

}

    }
//Encontra uma entrada que corresponde ao titulo

const findBook = function (book, noteTitle) {
    return book.find(function (campo, index) {
        return campo.titulo.toLowerCase() === noteTitle.toLowerCase()
    })
}

//Pesquisa strings correspondentes aao critério adotado
const findNotes = function (books, query) {
        return books.filter(function (livro, index) {
            const isTitleMatch = livro.titulo.toLowerCase().includes(query.toLowerCase())
            const isAutorMatch = livro.autor.toLowerCase().includes(query.toLowerCase())
            const isBodyMatch = livro.body.toLowerCase().includes(query.toLowerCase())
            
            return isTitleMatch || isBodyMatch  ||  isAutorMatch

        })
    }

//Encontra  o item disponivel

    const itensDisponiveis= function(books,index) {
       const indexdisponivel= books.filter(function (livro) {
            return livro.disponivel 

            })

return indexdisponivel

}

// Organizr os itens



    
    const sortBooks = function (books) {
        books.sort(function (a, b) {
            if (!a.disponivel && b.disponivel) {
                return -1
            } else if (!b.disponivel && a.disponivel) {
                return 1
            } else {
                return 0
            }
        })
    }
    
    
   
    // console.log(getThingsToDo(todos))
     
    // deleteTodo(todos, '!!buy food')
    // console.log(todos)



//lista o livro que preenchi o titulo
//const livro = findBook(books, 'Mil Léguas submarinas')
//console.log(livro)
//lista todos os livros menos o que deletei
//deleteBook(books, "Programando em C")
//console.log(books)

//console.log(findNotes(books, 'ed'))

//console.log (itensDisponiveis (books ) )

 
sortBooks(books)
console.log(books)

