let currentStep = 0;

const forms = document.querySelectorAll("form");
const stepper = document.getElementById("stepper");
const stepNumber = document.getElementById("step");
const continueButton = document.querySelectorAll("[id=continue-button]");

showStep(currentStep);

function showStep(step) {
  Array.from(forms).forEach((form) => {
    console.log(window.location.hash);

    if (Array.from(forms).indexOf(form) === step) {
      form.style.display = "block";
      stepper.querySelectorAll("[id=radio]")[step].className = "current-step";
      stepNumber.textContent = step + 1;
    } else {
      form.style.display = "none";
      stepper.querySelectorAll("span")[step].classList.remove("current-step");
    }
  });
}

continueButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    currentStep++;
    showStep(currentStep);
  });
});
