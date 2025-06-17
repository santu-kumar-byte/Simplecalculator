let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

function calculatePercentageExpression(expr) {
    return expr.replace(/(\d+(?:\.\d+)?)\s*([\+\-\*\/])\s*(\d+(?:\.\d+)?)%/g, (_, base, op, percent) => {
        const percentValue = (parseFloat(base) * parseFloat(percent)) / 100;
        return `${base} ${op} ${percentValue}`;
    });
}
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value == '=') {
            try {
                const parsed = calculatePercentageExpression(string);
                string = eval(parsed).toString();
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        } else if (value == 'Ac') {
            string = "";
            input.value = string;
        } else if (value == 'Del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});
