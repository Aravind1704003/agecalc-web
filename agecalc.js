document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const birthdateInput = document.getElementById("birthdate");
    const result = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const birthdate = new Date(birthdateInput.value);
        const today = new Date();
        const ageInMilliseconds = today - birthdate;
        const ageInSeconds = ageInMilliseconds / 1000;
        const ageInMinutes = ageInSeconds / 60;
        const ageInHours = ageInMinutes / 60;
        const ageInDays = ageInHours / 24;
        const ageInYears = ageInDays / 365.25; // Account for leap years

        if (isNaN(ageInYears)) {
            result.textContent = "Please enter a valid date of birth.";
        } else {
            result.textContent = `Your age is approximately ${ageInYears.toFixed(2)} years.`;
        }
    });
});
