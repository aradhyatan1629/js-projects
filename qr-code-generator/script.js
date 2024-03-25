let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');
let btn = document.getElementById('btn');
let container = document.querySelector('.container');

let flag = false;
function generateQr(){
    const text = document.createElement('p');
    text.id = 'error';
    if(qrText.value==='')
    {
        if(!flag){
            text.innerHTML = 'Please enter a Text or Url';
            text.className = 'warning';
            container.appendChild(text);
        }
        flag=true;
    }
    else
    {
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        if(document.getElementById('error'))
        {   
            document.getElementById('error').remove();
        }
        flag=false;
    }
}


btn.addEventListener('click',generateQr);










