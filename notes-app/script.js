const btn = document.getElementById('create-notes');
const container = document.querySelector('.container');

btn.addEventListener('click',function(e){
    const noteContainer = document.createElement('div'); // Create a div to contain the input and delete image
    noteContainer.className = 'add-notes';

    const input = document.createElement('input');
    input.setAttribute('type', 'text');

    const deleteImg = document.createElement('img');
    deleteImg.src = './images/delete.png';
    deleteImg.className = 'delete-button'; // You can add a class to style the delete button if needed

    noteContainer.appendChild(input);
    noteContainer.appendChild(deleteImg);
    container.appendChild(noteContainer);
    
},false)

container.addEventListener('click',function(e){
    if(e.target.tagName == 'IMG')
    {
        e.target.parentElement.remove();
    }
})




