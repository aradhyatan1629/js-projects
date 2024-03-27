const buttons = document.querySelectorAll('input[type=button]');
const display = document.getElementById('display');

buttons.forEach(function (btns) {
    btns.addEventListener('click', function (e) {
        if (btns.value !== 'AC' && btns.value !== 'DE' && btns.value !== '=') {
            if (display.value.includes('ERROR')) {
                display.value='';
            }
            else {
                display.value += btns.value;
            }
        }
        else if (btns.value === '=') {
            if (display.value.includes('ERROR')) {
                display.value='';
            }
            else {
                let result = eval(display.value);
                if (isNaN(result) || !isFinite(result)) {
                    display.value = 'ERROR';
                }
                else {
                    display.value = result;
                }
            }
        }
        else {
            if (btns.value === 'AC') {
                display.value = '';
            }
            else if (btns.value === 'DE') {
                if (display.value.includes('ERROR')) {
                    display.value='';
                }
                else{
                    display.value = display.value.toString().slice(0, -1);
                }
            }
        }
    })
})

