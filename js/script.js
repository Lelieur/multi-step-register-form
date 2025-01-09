const showNameForm = () => {
  nameForm.style.display = "block";
  topicForm.style.display = "none";
  summaryForm.style.display = "none";
};

const showTopicForm = () => {
  nameForm.style.display = "none";
  topicForm.style.display = "block";
  summaryForm.style.display = "none";
};

const showSummaryForm = () => {
  nameForm.style.display = "none";
  topicForm.style.display = "none";
  summaryForm.style.display = "block";
};

window.onload = showNameForm;

const continueButton = document.getElementById("submit-button");
continueButton.addEventListener("click", () => {
  console.log("Le he dado al botón!");
});

const stepper = document.getElementById("stepper");
const firstStep = stepper.querySelectorAll("span")[0];
const secondStep = stepper.querySelectorAll("span")[1];
const thirdStep = stepper.querySelectorAll("span")[2];

const nameForm = document.getElementById("name-form");
const topicForm = document.getElementById("topic-form");
const summaryForm = document.getElementById("summary-form");

firstStep.addEventListener("click", showNameForm);
secondStep.addEventListener("click", showTopicForm);
thirdStep.addEventListener("click", showSummaryForm);
