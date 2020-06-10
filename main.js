// Part 1: Click start button to set a timer and load the quiz

let timeLeft = 75; // complete this quiz within 75 seconds

$("#start-button").click(function () {
    $("#welcome-page").addClass("d-none"); // add bootstrap 'd-none' class by using jQuery
    $("#quiz-section").removeClass("d-none"); // using jQuery removeClass()
    const timeInterval = setInterval(() => {
        $("#timer").text("Time: " + timeLeft);
        timeLeft--;

        if (timeLeft === 0) {
            $("#timer").text(" ");
            clearInterval(timeInterval);
        }
    }, 1000);
});

// Part 2: create questions and rendering quizes

let quiz = [
    {
        question: "Commonly used data type DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if ... else statement is enclosed with:",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
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
        choices: ["commas", "curley brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
];

// Part 3: displaying user score and submit it into scoreboard

const userscoreEl = document.getElementById("user-score");
