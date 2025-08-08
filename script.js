let i = 1;
let flag = 0;
const display = document.getElementById('display');
const history = document.getElementById('history');

function clearone() {
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    if (display.value == 'Error' || flag == 1) {
        display.value = '';
    }
    flag = 0;
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function clearHist() {
    history.value = '';
    i = 1;
}

function calculate() {
    try {
        const exp = display.value;
        display.value = eval(display.value);
        history.value += `${i}) ${exp}=${display.value}\n`;
        flag = 1;
        i += 1;
    } catch (error) {
        display.value = 'Error';
    }
}