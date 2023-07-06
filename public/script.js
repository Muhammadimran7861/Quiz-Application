var quizQuestions= [
  {
     questionText: "Html stands for _____",

  answerOptions:["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
  answer: "hyper text markup language"     },

    { questionText: "JS stands for _____",        
    answerOptions :["java script", "hyper text markup language", "css", "html"],       
      answer: "java script"
},
{  questionText: "CSS stands for _____",
answerOptions:["cascading style sheet", "hyper text markup language", "Java Script", "html"],        
   answer: "cascading style sheet" },


{
questionText:"RAM stands for _____",
answerOptions :["random access memoery","hyper text markup language","html","html"],
  answer:"random access memoery"
},
{
questionText:"ROM stands for _____",
answerOptions:["read only memory","hyper text markup language","html","html"],
  answer:"read only memory"
}
]
var currentQuestion = 0; 
var currentScore = 0;


var quizContainer = document.querySelector(".quiz-container");
var questionDisplay = document.querySelector(".question");
var answerList = document.querySelector(".answer-list");
var score = document.querySelector(".quiz-score");


var createQuizQuestion = quizQuestion => {
createQuestionText(quizQuestion.questionText);
createAnswerButtons(quizQuestion.answerOptions);
};

var createQuizScore = () => {
questionDisplay.style.display = "none";
answerList.style.display = "none";

score.style.display = "block";
score.textContent =
"You scored " + currentScore + " out of " + quizQuestions.length;
};

var createQuestionText = questionText => {

questionDisplay.textContent = "Q)" + questionText;
};

var createAnswerButtons = answerOptions => {

answerList.innerHTML = "";


answerOptions.map(answerOption => {

var answerItemDiv = document.createElement("div");
answerItemDiv.className = "answer-item";


var answerButton = document.createElement("button");
answerButton.textContent = answerOption;


handleAnswerButtonClick();

answerButton.addEventListener("click", () => {
 
  var question = quizQuestions[currentQuestion];

  if (question.answer === answerButton.textContent) {
    currentScore += 1;
  }


  currentQuestion += 1;

  if (quizQuestions[currentQuestion]) {
    createQuizQuestion(quizQuestions[currentQuestion]);
  } else {
    createQuizScore();
  }
});


answerItemDiv.appendChild(answerButton);

answerList.appendChild(answerItemDiv);
});
};

var handleAnswerButtonClick = answerButton => {};

(function() {
createQuizQuestion(quizQuestions[0]);
})();
