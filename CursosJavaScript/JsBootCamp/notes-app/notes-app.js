// DOM - Document Object Model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
//const ps = document.querySelectorAll('p')

//ps.forEach(function (p) {
   // p.textContent = '***k*'
    // console.log(p.textContent)
    // p.remove()
//})

const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
   
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})