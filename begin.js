const question = document.getElementById("question");
const selections = Array.from(document.getElementById("question-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    
]