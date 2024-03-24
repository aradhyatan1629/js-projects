const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btn = document.getElementById('btn');

btn.addEventListener('click',addTask);
inputBox.addEventListener('keypress',function(e){
    if(e.key == 'Enter')
    {
        e.preventDefault();
        addTask();
    }
})

function addTask(){
    if(inputBox.value === '')
    {
        alert('You must add a task');
    }
    else
    {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData(); 
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        console.log(e.target.classList);
    }
    else if(e.target.tagName === 'SPAN'){
        const listItem = e.target.parentElement;
        const isChecked = listItem.classList.contains('checked');
        if(isChecked)
        {
            listItem.remove();
            saveData();
        }
        else
        {
            alert('Please complete the task before deleting');
        }
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTasks();

