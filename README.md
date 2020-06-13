# 04-Code-Quiz

## Description

This project is to build a timed code quiz with multiple-choice questions.

This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

### Mindset

I opted to use bootstrap library for the sake of aesthetics and which saves me from writing media queries for the responsiveness.

I also used jQuery so that my script.js looks neat and clean and saving itself from being overwhelmed with a plethora of variables at the beginning.

That being said, I spent most of my time trying to figure out the logic behind and how I can progress and build it up step-by-step.

The good thing is I can build this app around Acceptance Criteria, and there are a few thing I write them down to remind me constantly:

-   Keyword: `click, answer, <button>`
    This reminds me that I need to creat `document.getElementById("").addEventListener('click', ()=>{})` although I can use jQuery to simplify it further.

-   keyword: `timer`
    This reminds me to use `setInterval()` to create a timer.

-   keyword: `incorrectly or correctly`
    This reminds me to create `if...else` statement to set a condition.

-   keyword: `save`
    This reminds me to use `localStorage.setItem()` and I might use `JSON.parse()` to save 'my initials and score' to an object.

In conclusion, creating this application is a good opportunity to go through some basic concepts, such as web APIs, Events, and localstorage.

#### Demo

The following animation demonstrates the application functionality:
![code quiz](./Assets/04-code-quiz.gif)

Please also visit the deployed page (https://vulgarity2elegance.github.io/04-Code-Quiz/) and try it yourself!
