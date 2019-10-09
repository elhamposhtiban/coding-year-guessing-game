// const result_div = document.getElementById("result1");
// const result_div = document.getElementById("result2");
// let userNumber = 10;
// let counter = 0;
// const maxTries = 3;
// let randomNumber = Math.floor(Math.random()*userNumber)+1;
// let Attempt = 0;
// while (Attempt!=randomNumber ) {
//      Attempt = prompt ("please pick a number between 1 and" +userNumber);
//      counter +=1;
//      if(counter>maxTries){
//      document.write("you have no more tries you lost the game ");
//     //  document.getElementById("try").innerHTML=
//       }  
//      break
//     }
// if (Attempt===randomNumber){
//     document.write("congrats! you have the correct number!");
//     document.write(" the random number is"+randomNumber);
//     document.write("it took you"+counter+"to guess the number");
// }
const computerValues=[
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
const randomHint=computerValues[Math.floor(Math.random()*9)];

const questionText = document.getElementById("question-text");
questionText.textContent= randomHint;


