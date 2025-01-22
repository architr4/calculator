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

// Second Calculator 
const cDisplay = document.getElementById('cdisplay');
const cButtons = document.querySelectorAll('.cbuttons button');

cButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value === 'C') {
            cDisplay.value = '';
        } else if (value === 'fahrenheit') {
            const celsius = parseFloat(cDisplay.value);
            if (!isNaN(celsius)) {
                const fahrenheit = (celsius * 9/5) + 32;
                cDisplay.value = `${fahrenheit.toFixed(2)} °F`;
            } else {
                cDisplay.value = 'Error';
            }
        } else if (value === 'Celcius') {
            const fahrenheit = parseFloat(cDisplay.value);
            if (!isNaN(fahrenheit)) {
                const celsius = (fahrenheit - 32) * 5/9;
                cDisplay.value = `${celsius.toFixed(2)} °C`;
            } else {
                cDisplay.value = 'Error';
            }
        } else if (value === 'kg') {
            const pounds = parseFloat(cDisplay.value);
            if (!isNaN(pounds)) {
                const kilograms = pounds / 2.20462;
                cDisplay.value = `${kilograms.toFixed(2)} kg`;
            } else {
                cDisplay.value = 'Error';
            }
        } else if (value === 'lbs') {
            const kilograms = parseFloat(cDisplay.value);
            if (!isNaN(kilograms)) {
                const pounds = kilograms * 2.20462;
                cDisplay.value = `${pounds.toFixed(2)} lbs`;
            } else {
                cDisplay.value = 'Error';
            }
        } else {
            cDisplay.value += value;
        }
    });
});
