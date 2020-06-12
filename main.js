// Part 1: Create questions for the quiz.
const quiz = [
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

// Part 2: Click start button to set a timer (score as well) and load the quiz.
let timeLeft = quiz.length * 25;

$("#start-button").click(() => {
    $("#welcome-page").addClass("d-none");
    $("#quiz-section").removeClass("d-none");
    const timeInterval = setInterval(() => {
        $("#timer").text("Time: " + timeLeft);
        timeLeft--;

        if (timeLeft === 0 || questionCounter === quiz.length) {
            clearInterval(timeInterval);
            displyScore();
        }
    }, 1000);
    renderQuiz();
});

// Part 3: Rendering the quiz dynamically and adding event listener.
let questionCounter = -1;
let answer;

function renderQuiz() {
    questionCounter++;

    answer = quiz[questionCounter].answer;
    $("#questions").text(quiz[questionCounter].question);
    $("#choices").text(" ");

    let multipleChoices = quiz[questionCounter].choices;

    for (let i = 0; i < multipleChoices.length; i++) {
        const $nextChoice = $("<p>");
        $nextChoice
            .text(multipleChoices[i])
            .addClass("btn btn-dark d-flex justify-content-center");
        $("#choices").append($nextChoice);
    }
}

$("#choices").on("click", (event) => {
    if (answer === event.target.textContent) {
        $("#alert").text("Correct!").addClass("alert alert-success");
        setTimeout(() => {
            $("#alert").text(" ");
            $("#alert").removeClass("alert alert-success");
        }, 2000);
    } else {
        $("#alert").text("Incorrect!").addClass("alert alert-danger");
        setTimeout(() => {
            $("#alert").text(" ");
            $("#alert").removeClass("alert alert-danger");
        }, 2000);
        timeLeft -= 10;
    }
    renderQuiz();
});

// Part 4: displaying user score and submit it onto scoreboard
function displyScore() {
    $("#quiz-section").addClass("d-none");
    $("#submit-form").removeClass("d-none");
    timeLeft += 1;
    $("#user-score")
        .text("Your final score is " + timeLeft + ".")
        .addClass("alert alert-info");
}

let userInitial;

function submitScore() {
    userInitial = $("#userName").val();
    let newScore = {
        name: userInitial,
        score: timeLeft,
    };
    let highscores = JSON.parse(localStorage.getItem("highscores") || "[]");
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

$("#submit").on("click", (event) => {
    event.preventDefault();
    submitScore();
    window.location.replace("scoreboard.html");
});

//Part 5: Rendering highscores on scoreboard html
const highscores = JSON.parse(localStorage.getItem("highscores") || "[]");

highscores.sort((a, b) => {
    return b.score - a.score;
});

for (let i = 0; i < highscores.length; i++) {
    let userScores = $("<li>");
    userScores
        .text(highscores[i].name + " - " + highscores[i].score)
        .addClass(
            "d-flex justify-content-center border rounded-pill my-2 list-group-item list-group-item-info"
        );
    $("#list").append(userScores);
}

$("#restart").on("click", () => {
    window.history.back();
});

$("#clear").on("click", () => {
    localStorage.clear();
    location.reload(true);
});
