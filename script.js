//your JS code here.
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1,
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3,
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1912", "1905", "1898", "1923"],
        answer: 0,
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Leo Tolstoy"],
   

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: 2
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
        answer: 1
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "120°C", "80°C"],
        answer: 1
    }
];

let selectedOptions = JSON.parse(sessionStorage.getItem('progress')) || Array(questions.length).fill(null);
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const scoreDisplay = document.getElementById('score');

function displayQuiz() {
    quizContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<h3>${q.question}</h3>`;
        
        q.options.forEach((option, optionIndex) => {
            const isChecked = selectedOptions[index] === optionIndex ? 'checked' : '';
            questionElement.innerHTML += `
                <div class="options">
                    <input type="radio" name="question${index}" value="${optionIndex}" ${isChecked}>
                    ${option}
                </div>
            `;
        });
        
        quizContainer.appendChild(questionElement);
    });
    
    if (selectedOptions.every(option => option !== null)) {
        submitButton.classList.remove('hidden');
    } else {
        submitButton.classList.add('hidden');
    }
}

function saveProgress() {
    const inputs = document.querySelectorAll('input[type="radio"]:checked');
    selectedOptions = Array.from({ length: questions.length }, (_, index) => {
        const input = inputs.find(input => input.name === `question${index}`);
        return input ? parseInt(input.value) : null;
    });
    
    sessionStorage.setItem('progress', JSON.stringify(selectedOptions));
}

function calculateScore() {
    return selectedOptions.reduce((score, selected, index) => {
        return selected === questions[index].answer ? score + 1 : score;
    }, 0);
}

function submitQuiz() {
    const score = calculateScore();
    scoreDisplay.textContent = `Your score is ${score} out of ${questions.length}.`;
    scoreDisplay.classList.remove('hidden');
    localStorage.setItem('score', score);
}

quizContainer.addEventListener('change', saveProgress);
submitButton.addEventListener('click', submitQuiz);
window.addEventListener('load', displayQuiz);


// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
