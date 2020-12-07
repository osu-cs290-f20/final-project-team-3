var button = document.getElementsByClassName("Days");
for (var i = 0; i < button.length; i++) {    
    button[i].addEventListener('click', ((j) => {         
    return function() {
    var sellpage = document.getElementsByClassName('hidden');
    for(var i = 0; i < sellpage.length; i++){
        if (sellpage[i].style.display !== "block") {
          sellpage[i].style.display = "block";
        }
    }
    }
  })(i))
}
//X button to close the modal
var xClose = document.getElementById('modal-close');
function Xclose(event){
  var sellpage = document.getElementsByClassName('hidden');
  for(var i = 0; i < sellpage.length; i++){
    if (sellpage[i].style.display !== "none") {
      sellpage[i].style.display = "none";
    }
}
}
xClose.addEventListener('click',Xclose);
//Cancel Button to close the modal
var cancel = document.getElementById('modal-cancel');
function cancelation(event){
  var sellpage = document.getElementsByClassName('hidden');
  for(var i = 0; i < sellpage.length; i++){
    if (sellpage[i].style.display !== "none") {
      sellpage[i].style.display = "none";
    }
}
}
cancel.addEventListener('click',cancelation);

var save = document.get