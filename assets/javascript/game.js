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
    let question =[];
    // here we add two arrayes computer values and years
    for( i=0 ; i<computerValues.length; i++)
    {
     question [i]= computerValues[i]+ years [i];
    }
   //computer choose question random
    let randomHint = computerValues[Math.floor(Math.random()*9)];
    const questionText = document.getElementById("question-text");
    questionText.textContent = randomHint;
    let randomAnwser =question[Math.floor(Math.random()*9)];
    console.log(randomAnwser);

const underScore=[];
let rightAnswer = [];
let wrongAnswer = [];
let underscoreText = [];
triesText = document.getElementById("tries-text");
underscoreText = document.getElementsByClassName("underscores");
 rightguessText =document.getElementsByClassName("rightGuess");
 wrongguessText =document.getElementsByClassName("wrongGuess");
// create underscore based on 4 digit length
let generateUnderscore = () =>
 {
    for( let i=0 ;i<4 ;i++)
    {
    underScore.push ("_");
    }
    return underScore;
 }
//console.log(generateUnderscore());
//get user guess
document.addEventListener("keypress",(event) => 
{
  let keycode = event.keyCode;
  //change it to digit but type string
  let keypad = String.fromCharCode(keycode);  
  //console.log(keypad);
 //if user guess is right
 if(randomAnwser.indexOf(keypad)>-1)
 {
   // console.log(true);
   //add to right array
   rightAnswer.push(keypad);
   //replace underscore with digit of year
   underScore[randomAnwser.indexOf(keypad)]= keypad;
   underscoreText[0].innerHTML= underScore.join("");
   rightguessText[0].innerHTML = rightAnswer;
   //console.log(rightAnswer);
   if(underScore.join("")=== randomAnwser)
   {
      // alert("you win");
   }
 // console.log(rightAnswer);
}
 else 
 {
    wrongAnswer.push(keypad);
    wrongguessText[0].innerHTML = wrongAnswer;
   // console.log(wrongAswer); 
    if(underScore.join("")!== randomAnwser)
    {
       for(i=0;i<maxAttemps; i++)
       {
         maxAttemps-=
         triesText[0].innerHTML = maxAttemps;
       }
    }
   // alert("game over");
    
 }
  
});

underscoreText[0].innerHTML= generateUnderscore().join("");

// display questions randomly



