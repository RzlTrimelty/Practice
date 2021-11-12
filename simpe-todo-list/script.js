const div = document.querySelector('.container')
const tbl = document.querySelector('.body-table')
const tombol = document.querySelector('button')

tombol.addEventListener('click', function(){
    const input = document.querySelector('input')
    let newTodo = '<tr><td>' + input.value +  '</td>' + '<td onclick="toggle(this)" class="toggle-done">| Done</td>' + '<td onclick="toggleDelete(this)" class="toggle-delete">| Delete</td>' + '</tr>'

    tbl.insertAdjacentHTML('afterbegin',newTodo)

    input.value = ''
})

function toggle(el){
    el.parentElement.classList.toggle('done')

}

function toggleDelete(el){
    el.parentElement.remove()
}