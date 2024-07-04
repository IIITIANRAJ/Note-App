const addNote = document.querySelector('.addNote')
const deleteForm = document.querySelector('.icon')
const addForm = document.querySelector('.addForm')
const addBtn = document.querySelector('.addBtn')

addNote.addEventListener('click',()=>{
    addForm.style.display = 'block'
    document.getElementById('tittle').value = ""
    document.getElementById('description').value = ""
})

deleteForm.addEventListener('click',()=>{
    addForm.style.display = 'none'
})

addBtn.addEventListener('click',()=>{
    addForm.style.display = 'none'
    const div = document.createElement('div')
    div.classList.add('myNotes')
    div.innerHTML = `
    <h2>${document.getElementById('tittle').value}</h2>
    <p>${document.getElementById('description').value}</p>
    <button>Delete</button>`
    document.querySelector('.newNotes').appendChild(div)
    div.querySelector('button').addEventListener('click',()=>{
        div.remove()
    })
})