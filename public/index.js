var hidden = document.getElementsByClassName('hidden');
var exitAddQuest = document.getElementsByClassName('addQuest-hide-button');
var addQuest = document.getElementById('addQuest-add');
var addQuestButton = document.getElementById('add-quest-button');



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