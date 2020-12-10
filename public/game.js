var Questions = [
    {
        "question": "Who is your favorite Professor",
        "answer": "Rob Hess",
        "hint": "He teaches CS courses, and a tea lover"
},
{
    "question": "How much does the human brain weigh? In pounds",
    "answer": "3",
    "hint": "between 1 and 4"
},
{
    "question": "What does the N stand for in NATO?",
    "answer": "North",
    "hint": "What's the opposite of south?"
},
{
    "question": "At what temperature are Celsius and Fahrenheit equal? In degrees",
    "answer": "-40",
    "hint": "It's Below 0"
},
{
    "question": "The Earth's air is composed of about what percentage of CO2? In Percentage",
    "answer": "0.04",
    "hint": "It's between 0 and 0.1"
},
{
    "question": "What planet is farthest from the sun?",
    "answer": "Neptune",
    "hint": "Starts with N"
},
{
    "question": "The study of the weather is called what?",
    "answer": "Meteorology",
    "hint": "Starts with M"
}
];
var answer;
var Correct;
var hint;
//Question Generator
function questionGen(){
    var random = [Math.floor(Math.random()*Questions.length)];
    document.getElementById("Question").textContent=Questions[random].question;
    Correct = Questions[random].answer;
    hint = "Hint: "+Questions[random].hint;
}
questionGen();
// Saving the answer
var answer_input = document.getElementById("Answer");
function saveAnswer(event){
    answer = event.currentTarget.value;
}
answer_input.addEventListener('change',saveAnswer);
//Clearning the text
function Clear() {
    answer_input.value = "";
}

let progressBar = document.getElementById('progress-bar');
let levelTracker = document.getElementById('current-level');
let level = 0;

let maxExp = progressBar.max;
let currExp = progressBar.value;

function addExp(value){ // function that gets adds xp to the current progress bar
    console.log("inside the xp function");
    currExp = currExp+value; // adds it first

    if(currExp >= maxExp){ // checks if a level up accured 
        currExp = currExp - maxExp; // semi-reset the progress bar, keeping overflown xp
        maxExp = maxExp+150; // makes it harder to level up
        level = level+1; // level up
    }
    


     progressBar.max = maxExp; // set the values.
     progressBar.value = currExp;
     levelTracker.innerHTML = level;
    }

// click button

let questButton = document.getElementById("addQuest-add");
questButton.addEventListener('click', addExp(50));



var button = document.getElementsByClassName("btn-primary")
function Click(event){
if(answer.toLowerCase() == Correct.toLowerCase()){
    alert("Correct! You earned 10xp!");
    Clear();
    addExp(10);
    questionGen();
  }
  else{
    alert("Wrong Answer! try again");
    if(hint){
    alert(hint);
    }
    Clear();
    return false;
  }
}
button[0].addEventListener('click',Click);