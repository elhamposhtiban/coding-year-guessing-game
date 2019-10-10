const maxAttemps = 3;
let currentAttempt = 0;
// currentAttemp <= maxAttempts --> run the quiz function

const computerValues = [
    "what year was Apple founded?",
    "what year was Microsoft created?", 
    "what year was C++ created?",
    "what year was Adobe founded?",
    "in which year the first computer was invented?",
    "what year was Paython created?",
    "what year was Matlab created?",
];
    
const years = ["1976","1975","1970","1982","1936","1989","1984"]    
let question =[];
let answer = [];
const questionText = document.getElementById("question-text");
console.log(questionText);

// here we add two arrays computer values and years
i = Math.floor(Math.random()*6);
question[i] = computerValues[i];
answer[i] = years[i];
console.log(question[i]);
questionText.textContent = question[i];
console.log(answer[i]);
randomAnwser = answer[i];

const underScore = [];
let rightAnswer = [];
let wrongAnswer = [];
let underscoreText = [];

const triesText = document.getElementById("tries-text");
underscoreText = document.getElementsByClassName("underscores");
rightguessText = document.getElementsByClassName("rightGuess");
wrongguessText = document.getElementsByClassName("wrongGuess");

function generateUnderscore() {
   for(let i=0; i<4; i++) {
      underScore.push("_");
   }
   return underScore;
}

//get user guess
document.addEventListener("keypress",(event) => {
  let keycode = event.keyCode;
  //change it to digit but type string
  let keypad = String.fromCharCode(keycode);  

  console.log(randomAnwser.indexOf(keypad));
 // if user's guess is right
 if(randomAnwser.indexOf(keypad) > -1) {
   //add to right array
   rightAnswer.push(keypad);
   //replace user answer with underscore
   underScore[randomAnwser.indexOf(keypad)] = keypad;
  // console.log("underscoreText", underscoreText[0].innerHTML);
   underscoreText[0].innerHTML = underScore.join("");
   rightguessText[0].innerHTML = rightAnswer;
   if(underScore.join("") === randomAnwser) {
       alert("you win");
   }

}
 else {
    wrongAnswer.push(keypad);
    wrongguessText[0].innerHTML = wrongAnswer;

   //  if(); {
    
   // }
   // else {
      
   // }
   if (underScore.join("") !== randomAnwser && currentAttempt <= maxAttemps) {
      currentAttempt = currentAttempt + 1;
      // console.log('currentAttempt', currentAttempt);
       triesText.textContent = currentAttempt;
   }
    else {
       alert("Game over!");
   }
 }
  
});

underscoreText[0].innerHTML= generateUnderscore().join("");

function renew() {
 location.reload();
 }