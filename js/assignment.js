"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two mutable variables
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.innerText = todos;
    // console.log("1");
}

function updateAnswerTwo() {
    answerTwoEl.innerText = todos[2];
    console.log("2");
}

function removeLastValue() {
    popValue = todos.pop();

}

function removeFirstValue() {
    shiftValue = todos.shift();
}

function addShiftAndPopValues() {
    todos.push(popValue);
    todos.push(shiftValue);
}

function updateAnswerFour() {
    answerFourEl.innerText = todos;
}

function reverseTodoList() {
    const arrReverse = todos.reverse();
}

function updateAnswerFive() {
    answerFiveEl.innerText = todos;
}

function updateAnswerSix() {
    removeFirstValue();
    addShiftAndPopValues();
    answerSixEl.innerText = todos;
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    updateAnswerFour();
    reverseTodoList();
    updateAnswerFive();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
