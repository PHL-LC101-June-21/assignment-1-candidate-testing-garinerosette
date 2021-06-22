const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(question);

for (let i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//if (candidateAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
//  console.log("Great job! You are correct! ");
//} else { 
 // console.log("Sorry, not quite. Try again. ");
//}

  let grade = 0

  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      grade++;
    }
    console.log(`\nYour answer: ${candidateAnswers[i]} \nCorrect answer: ${correctAnswers[i]}\n`);
  }
  
let gradePercent = (grade/5) * 100

if (gradePercent >= 80) {
  console.log(`Congratulations! Your score is ${gradePercent}%. You passed the test! Welcome aboard, Astronaut ${candidateName}!`) 
} else {
console.log(`We regret to inform you that you have FAILED this test. Your score is ${gradePercent}%, but you need at least 80% to pass. Try again next year!`)
};

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};