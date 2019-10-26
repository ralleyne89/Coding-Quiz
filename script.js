$(document).ready(function() {
  
    // create an alert to begin the quiz
  alert("Welcome to your Quiz! Click OK to get started");

  // make a timer when the quiz begins, have a variable to hold the time input
  var seconds = 91;

  // create an action that makes the timer countdown
  function timerCountdown() {

    // in this section the time begins to subtract
    var count = setInterval(function() {
      seconds--;

      // once the number hits zero, display done
      if (seconds === 0) {
        clearInterval(count);
        $("#timer").text("DONE!");
      } else {
        $("#timer").html(": " + seconds + " remain");
      }
    }, 1000);
  }

  // call the countdown timer
  timerCountdown();

  //   for some reason the question will only display when I append it like this, I could not figure out how to append the array of questions to the page
  $("#quiz").append(
    "<h2>Question 1</h2><hr><p>Which of the following use the $ symbol to begin a command?</p>"
  );

  $('#nextquestion').on('click', function() {
      $('#quiz').html('<h2>Question 2</h2><hr><p>What does API stand for</p>')
  });


  var quizContainer = document.getElementsById("quiz");
  var resultsContainer = document.getElementsById("results");
  var submitButton = document.getElementsByClassName("submit");
  var score = 0;

  function startQuiz() {
   
    // a container to hold the output of questions
    var output = [];

    // create an array of questions and answers for the quiz
    var myQuestions = [
      {
        question: "Which of the following use the $ symbol to begin a command?",
        answers: {
          a: "html",
          b: "css",
          c: "javascript",
          d: "jquery"
        },
        correctAnswer: "c"
      },
      {
        question: "What does API stand for?",
        answers: {
          a: "artifical programming interface",
          b: "application programming interface",
          c: "atomic platform intel",
          d: "ajax platform interface"
        },
        correctAnswer: "b"
      },
      {
        question: "Jquery is a ...",
        answers: {
          a: "Javascript Library",
          b: "Javascript Language",
          c: "Javascript Method",
          d: "PHP Method"
        },
        correctAnswer: "a"
      },
      {
        question: "Which sign does jQuery use as a shorcut for jQuery?",
        answers: {
          a: "the % sign",
          b: "the ? sign",
          c: "the $ sign",
          d: "all of the above"
        },
        correctAnswer: "c"
      },
      {
        question: "Which jQuery method is used to hide selected elements?",
        answers: {
          a: "hidden()",
          b: "hide()",
          c: "visible(false)",
          d: "display(none)"
        },
        correctAnswer: "b"
      }
    ];
    // this is going to be the section that changes to the next question, using a "forEach" loop
    // honestly im not sure how to use it, which is why it isnt working, very difficult
    myQuestions.forEach((currentQuestion, questionNumber) => {
      var answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<div name = "question${questionNumber}" value = "${letter}">${letter} : ${currentQuestion.answers[letter]}</div>`
        );
      }
    });
    output.push(
      `<div class = "question">${
        currentQuestion.question
      }</div> <div class = "answers">${answers.join("")}</div>`
    );
    // inputs the question on the page
    quizContainer.innerHTML = output.join("");
  }

  startQuiz();

  function showResults() {
    var answersContainers = quizContainer.querySelectorAll(".answers");
    var numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      var answerContainer = answersContainers[questionNumber];
      var selector = "input[name = question" + questionNumber + "]: checked]";
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // now create a loop to check if the answers are correct
      if (userAnswer === currentQuestion.correctAnswer) {
        score++;
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answersContainers[questionNumber].style.color = "red";
      }
    });
    resultsContainer.innerHTML = score + " out of " + myQuestions.length;
    submitButton.addEventListenner("click", showResults);
  }
  showResults();
});

/*
Our goal was to create a coding quiz with functionality. 
The quiz is timed so a timer will need to be created.
We want the test to display a question with 4 possible answers. 
After an answer is selected the user clicks the submit button to answer. 
An alert will  pop up, if the answer is correct it will display RIGHT!, 
however if the answer is incorrect it will display WRONG!
*/
