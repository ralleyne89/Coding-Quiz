$(document).ready(function() {

// create an alert to begin the quiz
alert('Welcome to your Quiz! Click OK to get started');

// make a timer when the quiz begins, have a variable to hold the time input 
var seconds = 91;

// create an action that makes the timer countdown
function timerCountdown() {
    // $("#timer").html(minutes + ':' + seconds);
     var count = setInterval(function(){
         seconds--;
        
        // once the number hits zero, clear the number then start over  
        if (seconds === 0 ) {
             clearInterval(count);
             $('#timer').text("DONE!")
         } else {
             $("#timer").html(": " + seconds + " remain");
         } 
     }, 1000);
};

timerCountdown();
// // first create the header
//  $("#header").append("<h1>Web Development Quiz</h1><hr>");

 //   next create a paragraph with questions
// $("#para").append('<h2>Question 1</h2><hr><p>Which of the languages uses a $ </p>');

// // create 4 radio buttons for answer selection
// $('<input type = "radio" name = "dynradio" value = "A" /> HTML<br><br>').appendTo('#radios');
// $('<input type = "radio" name = "dynradio" value = "B" /> CSS<br><br>').appendTo('#radios');
// $('<input type = "radio" name = "dynradio" value = "C" /> Javascript<br><br>').appendTo('#radios');
// $('<input type = "radio" name = "dynradio" value = "D" /> Jquery<br><br>').appendTo('#radios');

// // create a button to submit the answer
// $('').appendTo('#submit');

// create a variable that holds the answers to the quiz, also create a loop to go through the array of answers
// for (i = 0; i < answers.length; i++){
//     answer1 += answers.charAt(Math.floor(i));
// }
// const shuffledQuestions, currentQuestionIndex

// function setNextQuestion() {

// }

var score = 0;
var myQuestions = [
    {
        question: 'Which of the following use the $ symbol to begin a command?',
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

function startQuiz() {
    var output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];
            for (letter in currentQuestion.answers) {
                output.push(`<div class = para></div>`)
            }
        }
    )
}

// create a function to submit your answer
$('#submit').on('click', function nextPage(){
    
// after question 1 is submitted question 2 will appear in its place 
$('#para').html("<h2>Question 2</h2><hr><p>this is where the question goes, choose an answer</p>");
$('#radios').html('<input type = "radio" name = "dynradio" value = "A" /> Dog <br> <br> <input type = "radio" name = "dynradio" value = "B" /> Cat <br> <br> <input type = "radio" name = "dynradio" value = "C" /> Horse <br> <br> <input type = "radio" name = "dynradio" value = "D" /> Fish<br><br>');


});

// alert will appear to verify the answers
});



/*
Our goal was to create a coding quiz with functionality. 
The quiz is timed so a timer will need to be created.
We want the test to display a question with 4 possible answers. 
After an answer is selected the user clicks the submit button to answer. 
An alert will  pop up, if the answer is correct it will display RIGHT!, 
however if the answer is incorrect it will display WRONG!
*/