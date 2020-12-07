var hidden = document.getElementsByClassName('hidden');
var exitAddQuest = document.getElementsByClassName('addQuest-hide-button');
var addQuest = document.getElementById('addQuest-add');

function rehideAddQuest(event){
	/*for(var i = 0; i < hidden.length; i++){
		hidden[i].style.display = "none";
	}*/
	document.getElementById('addQuest-title-inp').value = "";
	document.getElementById('addQuest-desc-inp').value = ""; 
	document.getElementById('addQuest-date-inp').value = "yyyy-MM-dd"; //Possible errors later, we'll see
}

for(var i=0; i < exitAddQuest.length; i++)
	exitAddQuest[i].addEventListener('click', rehideAddQuest);

addQuest.addEventListener('click', function{
	//To be done once we figure out how it'll work
})