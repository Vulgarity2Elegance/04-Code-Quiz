// Part 1: Click start button to set a timer and load the quiz
let timeLeft = 75; // complete this quiz within 75 seconds

$("#start-button").click(() => {
    $("#welcome-page").addClass("d-none"); // add bootstrap 'd-none' class by using jQuery
    $("#quiz-section").removeClass("d-none"); // using jQuery removeClass()
    const timeInterval = setInterval(() => {
        $("#timer").text("Time: " + timeLeft);
        timeLeft--;

        if (timeLeft === 0 || questionCounter === quiz.length) {
            $("#timer").text("Finished");
            clearInterval(timeInterval);
        }
    }, 1000);

    renderQuiz();
});

// Part 2: create questions and rendering quizes
const CORRECT_BONUS = 25;

let score = 0;
let questionCounter = -1;
let answer;

let quiz = [
    {
        question: "Commonly used data type DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if ... else statement is enclosed with:",
        choices: ["quotes", "parentheses", "curly brackets", "square brackets"],
        answer: "parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store ____",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        answer: "all of the above",
    },
    {
        question:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["quotes", "curly brackets", "parentheses", "commas"],
        answer: "quotes",
    },
];

function renderQuiz() {
    questionCounter++;

    answer = quiz[questionCounter].answer;
    $("#questions").text(quiz[questionCounter].question); // generate questions from quiz array.
    $("#choices").text(" ");

    let multipleChoices = quiz[questionCounter].choices;

    for (let i = 0; i < multipleChoices.length; i++) {
        const $nextChoice = $("<p>");
        $nextChoice
            .text(multipleChoices[i])
            .addClass(
                "btn btn-light btn-outline-success d-flex justify-content-center"
            );
        $("#choices").append($nextChoice);
    }
}

$("#choices").on("click", (event) => {
    if (answer === event.target.textContent) {
        $(".feedback").text("Correct!").addClass("alert alert-success");
        score += CORRECT_BONUS;
        $("#score").text("Score: " + score);
    } else {
        $(".feedback").text("Incorrect!").addClass("alert alert-danger");
        timeLeft -= 10;
    }
    renderQuiz();
});

// Part 3: displaying user score and submit it into scoreboard
