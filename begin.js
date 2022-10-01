const question = document.getElementById("question");
const selections = Array.from(document.getElementsByClassName("question-text"));
console.log(selections);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
      question: "Which mask shape had the highest authority?",
      choice1: "circle",
      choice2: "Square",
      choice3: "star",
      choice4: "triangle",
      answer: 2
    },
    {
      question: "What color was the mask worn by 'The Front Man'?",
      choice1: "Dark-Blue",
      choice2: "Gold",
      choice3: "Purple",
      choice4: "Black",
      answer: 4
    },
    {
      question: "What number did the Oh Il-Nam/the old man wear on his jacket?",
      choice1: "001",
      choice2: "422",
      choice3: "677",
      choice4: "998",
      answer: 1
    },
    {
        question: "How much Won would the final player win?",
        choice1: "70 million won",
        choice2: "200 billion Won",
        choice3: "45.6 billion Won",
        choice4: "1 trillion Won",
        answer: 3
      },
      {
        question: "What are the four candy shapes in game 2 '?",
        choice1: "Circle, Star, Triangle, Umbrella",
        choice2: "Triangle, Rectangle, Hexagon, Square",
        choice3: "Umbrella, Star, Hexagon, Swirl ",
        choice4: "Square, Triangle, Star, Spiral",
        answer: 1
      },
      {
        question: "How many episodes are in season one?",
        choice1: "6",
        choice2: "22",
        choice3: "9",
        choice4: "15",
        answer: 3
      },
      {
        question: "What is the one thing all players had in common?",
        choice1: "They were all childless",
        choice2: "They all suffered from an illness",
        choice3: "They were all from China",
        choice4: "They all had Debt",
        answer: 4
      },
      {
        question: "What color was the mask worn by 'The Front Man'?",
        choice1: "Dark-Blue",
        choice2: "Gold",
        choice3: "Purple",
        choice4: "Black",
        answer: 4
      },
      {
        question: "How many players make it to game 6?",
        choice1: "2",
        choice2: "5",
        choice3: "7",
        choice4: "9",
        answer: 1
      },
      {
        question: "Which of these is the correct order in Squid Game?",
        choice1: "Squid Game, Tug of War, Red Light, Green Light, Marbles, The Glass Game, Ppopgi/Dalgona",
        choice2: "Red Light, Green Light, Ppopgi/Dalgona, Tug of War, Marbles, The Glass Game, Squid Game",
        choice3: "Ppopgi/Dalgona, Red Light, Green Light, Marbles, Tug of War,The Glass Game, Squid Game, ",
        choice4: "Red Light, Green Light, Tug of War, Marbles, Ppopgi/Dalgona, The Glass Game, Squid Game ",
        answer: 2
      }
  ];

  const CORRECT_POINTS = 5;
  const MAX_QUESTIONS = 15;

  beginGame = () => {
      questionCounter = 0;
      score = 0;
      availableQuestions = [...questions];
      console.log(availableQuestions);
      getNewQuestion();
  }
  
  getNewQuestion = () => {
      questionCounter++;
      const questionIndex = Math.floor(Math.random() * availableQuestions.length);
      currentQuestion = availableQuestions[questionIndex];
      question.innerText = currentQuestion.question;
  };

  beginGame();