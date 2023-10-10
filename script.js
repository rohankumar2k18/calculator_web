
const clickableButtons = document.querySelectorAll(".clickable");

const displayInput = document.querySelector(".display input");

clickableButtons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonValue = this.value;
        switch (buttonValue) {
            case 'AC':
                displayInput.value = "";
                break;
            case 'DE':
                displayInput.value = displayInput.value.toString().slice(0, -1);
                break;
            case '=':
                try {
                    const result = eval(displayInput.value);
                    if (Number.isFinite(result) && result % 1 !== 0) {
                        displayInput.value = result.toFixed(2);
                    } else {
                        displayInput.value = result;
                    }
                } catch (error) {
                    displayInput.value = "Error";
                }
                break;
            case 'AC':
                displayInput.value = "";
                break;

            case 'AC':
                displayInput.value = "";
                break;
            default:
                displayInput.value += buttonValue;
                break;
        }

    });
});
