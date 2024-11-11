// Perguntas e respostas
const questions = [
    {
      question: "Qual é a capital da França?",
      answers: ["Paris", "Londres", "Roma", "Berlim"],
      correctAnswer: 0
    },
    {
      question: "Qual é o maior planeta do nosso sistema solar?",
      answers: ["Terra", "Marte", "Júpiter", "Saturno"],
      correctAnswer: 2
    },
    {
      question: "Quem escreveu 'Dom Casmurro'?",
      answers: ["Machado de Assis", "Jorge Amado", "Carlos Drummond", "Monteiro Lobato"],
      correctAnswer: 0
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll("#answers button");
    const questionData = questions[currentQuestion];
  
    questionElement.textContent = questionData.question;
    answerButtons.forEach((button, index) => {
      button.textContent = questionData.answers[index];
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
  
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      resultElement.textContent = "Correto!";
      score++;
    } else {
      resultElement.textContent = "Errado!";
    }
  
    scoreElement.textContent = score;
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      resultElement.textContent += " Jogo terminado!";
    }
  }
  
  window.onload = loadQuestion;
  