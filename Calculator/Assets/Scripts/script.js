
document.addEventListener("DOMContentLoaded", function() {
    // Get DOM elements
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operatorSelect = document.getElementById("floatingSelect");
    const calculateBtn = document.querySelector("button.btn-primary");
    const resultInput = document.getElementById("result");

    // Event listener for the calculate button
    calculateBtn.addEventListener("click", function() {
        // Get the values of the inputs
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operator = operatorSelect.value;

        // Validate inputs
        if (isNaN(num1) || isNaN(num2)) {
            resultInput.value = "Please enter valid numbers";
            return;
        }

        // Perform the calculation based on the selected operator
        let result;
        switch (operator) {
            case "1":
                result = num1 + num2;
                break;
            case "2":
                result = num1 - num2;
                break;
            case "3":
                result = num1 * num2;
                break;
            case "4":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    alert("Division by zero is not allowed");
                    return;
                }
                break;
            default:
                result = "Invalid operator";
        }

        // Update the result input with the calculated value
        resultInput.value = result;
    });
});

