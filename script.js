// First Calculator
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (value === '=') {
            try {
                display.value = eval(display.value.replace('^', '**'));
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'C') {
            display.value = '';
        } else {
            display.value += value;
        }
    });
});

// Second Calculator (Converter)
const cDisplay = document.getElementById('cdisplay');
const cButtons = document.querySelectorAll('.cbuttons button');

cButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (value === 'C') {
            cDisplay.value = ''; 
        } else if (value === 'kg') {
           
            cDisplay.value = `${(parseFloat(cDisplay.value) * 0.453592).toFixed(2)} kg`;
        } else if (value === 'lbs') {
            cDisplay.value = `${(parseFloat(cDisplay.value) / 0.453592).toFixed(2)} lbs`;
        }  else if (value === 'fahrenheit') {
            cDisplay.value = `${((parseFloat(cDisplay.value) *.55 ) + 32)).toFixed(2)} F`;
        }
        else {
            cDisplay.value += value;
        }
    });
});
