const passwordBox = document.getElementById('password');
const btn = document.getElementById('btnGenerate');
const copyPass = document.getElementById('imgCopy')

const length = 12;
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-?/|}{<>+"

const allchars = uCase+lCase+numbers+symbols;

function createPassword(){
    let pass='';
    pass += uCase[Math.floor(Math.random()*uCase.length)];
    pass += lCase[Math.floor(Math.random()*lCase.length)];
    pass += numbers[Math.floor(Math.random()*numbers.length)];
    pass += symbols[Math.floor(Math.random()*symbols.length)];

    while(length > pass.length)
    {
        pass += allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordBox.value = pass;
}

function copyPassword(){
    console.log('hi');
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

btn.addEventListener('click',createPassword);
copyPass.addEventListener('click',copyPassword);



