//In case i mess up something const display = document.getElementById('display'); const buttons = document.querySelectorAll('.buttons button'); buttons.forEach(button => {button.addEventListener('click', () => {const value = button.dataset.value; if (value === '=') {try {display.value = eval(display.value);} catch (error) {display.value = 'Error';} } else { display.value += value;  } }); });

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (value === '=') {
            try {
                // Use eval with '**' for exponentiation safely
                display.value = eval(display.value.replace('^', '**'));
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'C') { // Clear the display if 'C' is pressed
            display.value = '';
        } else {
            display.value += value;
        }
    });
});
