let selectDiv = document.querySelector("#A2324");

let degreeInput = document.querySelector(".degree-input");

let resultInput = document.querySelector(".result-input");

let convertButton = document.querySelector(".btn-1");


convertButton.addEventListener("click", () => {

    if (selectDiv.value === "Celsius") {
        resultInput.value = ((degreeInput.value - 32) * 5 / 9) + "°C";
    }
    else if (selectDiv.value === "Fahrenheit") {
        resultInput.value = ((degreeInput.value * 1.8) + 32) + "°F";
    }
});
