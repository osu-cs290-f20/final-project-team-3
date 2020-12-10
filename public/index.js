var hidden = document.getElementsByClassName('hidden');
var exitAddQuest = document.getElementsByClassName('addQuest-hide-button');
var addQuest = document.getElementById('addQuest-add');
var addQuestButton = document.getElementById('add-quest-button');



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
	

function rehideAddQuest(){
	for(var i = 0; i < hidden.length; i++){
		hidden[i].style.display = "none";
	}
	document.getElementById('addQuest-desc-inp').value = ""; 
	document.getElementById('addQuest-date-inp').value = "";
}

function addQuest_DB(desc, date){
	var request = new XMLHttpRequest();
	var requestURL = '/';
	request.open('POST', requestURL);

	var reqBody = JSON.stringify({
		desc: desc, 
		date: date
	});

	request.setRequestHeader('Content-Type', 'application/json');
	request.addEventListener('load', function(event){
		if(event.target.status == 200){
			//Code for adding onto client
		}
		else
			window.alert('Error adding quest:' + event.target.response);
	})
	console.log("Made it here");
	addExp(50); // rewards xp when user adds a quest.
	console.log(reqBody);
	request.send(reqBody);
}

for(var i=0; i < exitAddQuest.length; i++)
	exitAddQuest[i].addEventListener('click', rehideAddQuest);

addQuest.addEventListener('click', function(){
	var desc = document.getElementById('addQuest-desc-inp').value.trim(); 
	var date = document.getElementById('addQuest-date-inp').value.trim();

	// console.log('Title:', title);
	// console.log('Description:', desc);
	// console.log('Date:', date);

	if(desc == '' || date == ''){
		window.alert("You didn't enter all info");
	}
	else{
		addQuest_DB(desc, date);
		rehideAddQuest();
	}
});

addQuestButton.addEventListener('click', function(){
	for(var i = 0; i < hidden.length; i++){
		hidden[i].style.display = "block";
	}
})