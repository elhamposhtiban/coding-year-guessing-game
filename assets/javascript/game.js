const maxAttemps = 3;
const currentAttempt = 0;
// currentAttemp <= maxAttempts --> run the quiz function

const computerValues = [
    "what year was Html created?",
    "what year was Css created?", 
    "what year was SQL created?",
    "what year was C++ created?",
    "what year was JavaScript created?",
    "in which year the first computer was invented?",
    "what year was Paython created?",
    "what year was PHP created?",
    "what year was Matlab created?",
    "what year was ASP.net created?",
 ];
    const years = ["1990","1994","1970","1979","1995","1936","1989","1994","1984","2002"]
   //computer choose question random
    let randomHint = computerValues[Math.floor(Math.random()*9)];
    const questionText = document.getElementById("question-text");
    questionText.textContent = randomHint;
    let randomAnwser = years[Math.floor(Math.random()*9)];
    console.log(randomAnwser);
// create underscore based on year length
const underScore=[];
let rightAnswer = [];
let wrongAswer = [];
let generateUnderscore = () =>
 {
    for( let i=0 ;i<4 ;i++)
    {
    underScore.push ("_");
  
    }
    return underScore;
 }
console.log(generateUnderscore());
//get user guess
document.addEventListener("keypress",(event) => 
{
  let keycode = event.keyCode;
  let keypad = String.fromCharCode(keycode);  
 //if user guess is right
 if(randomAnwser.indexOf(keypad)>-1)
 {
   // console.log(true);
   //add to right array
   rightAnswer.push(keypad);
   //replace underscore with right answer
   underScore[randomAnwser.indexOf(keypad)] = keypad;
   if(underScore.join("")=== randomAnwser)
   {
      alert("you win");
      const rightguess = document.getElementById("right-guess");
       rightguess.textContent ="you win!" ;
   }
  // console.log(underScore);
   //console.log(rightAnswer);
}
 else 
 {
    wrongAswer.push(keypad);
    if(underScore.join("")!== randomAnwser)
    alert("game over");
   // console.log(wrongAswer);
 }
  
});

 const remainingNumbers = randomHint.length;

// display questions randomly



