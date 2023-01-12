let input = document.getElementById('input');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function(){
    var list = document.createElement('li');
    if (!input.value)
        alert('내용을 입력해 주세요!');
    else
    {
        list.innerText = input.value;
        toDoList.appendChild(list);
        input.value= "";
    }

    list.addEventListener('click', function(){
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('dblclick', function(){
        toDoList.removeChild(list);
    })
})