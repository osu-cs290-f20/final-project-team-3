

let name = "John smith"
let level = "4"
let maxExp = 500;
let currExp = 150;


function insertNewPost(name, level, maxExp, currExp) {

    let context = {
      name: name,
      level: level,
      maxExp: maxExp,
      currExp: currExp,
    }
  
    let info = Handlebars.templates.userInfo(context);
  
    var header = document.getElementById('header-info');
    header.insertAdjacentHTML('beforeend', info);
    return info;
  
  }
  insertNewPost(name, level, maxExp, currExp);
  console.log("went into the function!");
  