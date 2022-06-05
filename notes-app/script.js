//This is a CRUD application where we can create, read, update, and delete notes.

const addBtn = document.getElementById('add')
addBtn.addEventListener('click', () => addNewNote())

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', () => clearAllNotes())

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach(note =>addNewNote(note))
}

function addNewNote(text = ''){
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>    
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>`

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked.parse(text)
    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) =>{
        const {value} = e.target
        main.innerHTML = marked.parse(value)
        updateLS()
    })

    document.body.appendChild(note)
}

function clearAllNotes(){
    localStorage.clear()
    location.reload()
}


function updateLS(){
    const notesText = document.querySelectorAll('textarea')
    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}
