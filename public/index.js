

let name = "Johnny smith"
let level = "0"
let maxExp = 500;
let currExp = 0;


function insertNewPost(name, level, maxExp, currExp) {

    let context = {
      name: name,
      level: level,
      maxExp: maxExp,
      currExp: currExp,
    }
  
    let info = Handlebars.templates.userInfo(context);
  
    var header = document.getElementById('header-info');
    header.insertAdjacentHTML('afterbegin', info);
    return info;
  
  }
  insertNewPost(name, level, maxExp, currExp);
  console.log("went into the function!");
  