let level = 0;

let progressBar = document.getElementById('progress-bar');
let levelTracker = document.getElementById('current-level');

let maxExp = progressBar.max;
let currExp = progressBar.value;


// function insertNewPost(level, maxExp, currExp) {

//     let context = {
//       level: level,
//       maxExp: maxExp,
//       currExp: currExp,
//     }
  
//     let info = Handlebars.templates.userInfo(context);
  
//     var header = document.getElementById('header-info');
//     header.insertAdjacentHTML('beforeend', info);
//     return info;
  
//   }
//   insertNewPost(level, maxExp, currExp);


  let questListener = document.getElementById('add-quest-button');

function addExp(){
  currExp = currExp+50;

  if(currExp >= maxExp){
    level = level +1;
    currExp = currExp-maxExp;
    maxExp = maxExp+150;
  }

 progressBar.max = maxExp;
 progressBar.value = currExp;
 levelTracker.innerHTML = level;


}

  questListener.addEventListener('click', addExp);


  //console.log("went into the function");
  