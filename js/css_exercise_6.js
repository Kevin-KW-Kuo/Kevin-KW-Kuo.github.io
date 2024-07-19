class Calculator {
    constructor(calculatorScreen) {
        this.calculatorScreen = calculatorScreen;
        this.reset();
    }

    reset() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operator = null;
        this.updateScreen();
    }

    appendNumber(number) {
        if (this.currentValue === '0' && number !== '.') {
            this.currentValue = number;
        } else {
            this.currentValue += number;
        }
        this.updateScreen();
    }

    chooseOperator(operator) {
        if (this.currentValue === '') return;
        if (this.previousValue !== '') {
            this.calculate();
        }
        this.operator = operator;
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }

    calculate() {
        let result;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            default:
                return;
        }
        this.currentValue = result;
        this.operator = null;
        this.previousValue = '';
        this.updateScreen();
    }

    updateScreen() {
        this.calculatorScreen.value = this.currentValue;
    }

    toggleSign() {
        if (this.currentValue === '') return;
        this.currentValue = this.currentValue.charAt(0) === '-' ? this.currentValue.slice(1) : '-' + this.currentValue;
        this.updateScreen();
    }
}

const calculatorScreen = document.querySelector('.calculator-screen');
const calculator = new Calculator(calculatorScreen);

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event => {
    const { target } = event;
    if (!target.matches('button')) return;

    switch (target.value) {
        case 'all-clear':
            calculator.reset();
            break;
        case '±':
            calculator.toggleSign();
            break;
        case '=':
            calculator.calculate();
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
        case '%':
            calculator.chooseOperator(target.value);
            break;
        default:
            calculator.appendNumber(target.value);
            break;
    }
});
