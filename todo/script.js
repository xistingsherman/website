

const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo))
}


//https://stackoverflow.com/questions/12611983/typeerror-is-null

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo){
    let todoText = input.value
    
    if(todo){
        todoText = todo.text
    }

    if (todoText){
        const todoEl = document.createElement('li')
        if (todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {

            todoEl.classList.toggle('completed')
            updateLS()
        })

        //contextmenu is a right click
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })


        todosUL.append(todoEl)

        input.value = ''

        updateLS()
    }

}

function updateLS(){
    todosEl = document.querySelectorAll('li')
    const todos = [ ]

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos))
}

//you can stringify your object with JSON if you need to.
//when you take the object out of json, use JSON.parse
//localStorage.setItem('name', 'Brad')




