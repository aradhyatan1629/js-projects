let input = document.getElementById('input');
let imgClosed = document.querySelector('#closed');
let inputBox = document.querySelector('.inputBox');

imgClosed.addEventListener('click', function(e) {
    console.log('hi');
    let imgOpen = document.createElement('img');
    if (input.type === 'password') {
        input.type = 'text';
        imgOpen.src = 'eye-open.png';
        imgOpen.className = 'container img';
        imgClosed.remove();
        inputBox.appendChild(imgOpen);

        // Add event listener to the open eye icon
        imgOpen.addEventListener('click', function() {
            input.type = 'password';
            imgOpen.remove();
            inputBox.appendChild(imgClosed);
        });
    } else {
        input.type = 'password';
        imgOpen.remove();
        inputBox.appendChild(imgClosed);
    }
});
