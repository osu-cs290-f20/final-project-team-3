// code infulenced by https://github.com/niinpatel/calendarHTML-Javascript


let today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthAndYear = document.getElementById('monthAndYear')
function ButtonGenerator(day){
    var targetDay = '#d' + day;
    var Button = document.createElement('button');
    Button.setAttribute('type','button');
    Button.classList.add('btn');
    Button.classList.add('btn-primary');
    Button.setAttribute('data-bs-toggle','modal');
    Button.setAttribute('data-bs-target',targetDay);
    Button.textContent = day;
    return Button;
}
function ModalGenerator(date,questDesc){
    // var content = document.getElementsByClassName('content');
    var content = document.getElementsByClassName('content');
    var modal_footer = document.createElement('div');
    modal_footer.classList.add('modal-footer');
    //button close
    var buttonClose = document.createElement('button');
    buttonClose.setAttribute('type','button');
    buttonClose.classList.add('btn');
    buttonClose.classList.add('btn-secondary');
    buttonClose.setAttribute('data-bs-dismiss','modal');
    buttonClose.textContent = 'Close';
    modal_footer.appendChild(buttonClose);
    // button save changes
    var buttonSave = document.createElement('button');
    buttonSave.setAttribute('type','button');
    buttonSave.classList.add('btn');
    buttonSave.classList.add('btn-primary');
    buttonSave.innerHTML = 'Save Changes';
    modal_footer.appendChild(buttonSave);
    // modal-body main
    var modal_bodyDiv = document.createElement('div');
    modal_bodyDiv.classList.add('modal-body');
    var quests_check = document.createElement('div');
    quests_check.classList.add('form-check');
    ////////////////////////////////////////// input part
    var input = document.createElement('input');
    input.classList.add('form-check-input');
    input.setAttribute('type','checkbox');
    input.setAttribute('value','');
    input.setAttribute('id','flexCheckDefault');
    modal_bodyDiv.appendChild(input);
    //////////////////////////////////////// label part 
    var label = document.createElement('label');
    label.classList.add('form-check-label');
    label.setAttribute('for','flexCheckDefault');
    label.textContent = questDesc;
    modal_bodyDiv.appendChild(label);
/////////////////////////////////////////// modal-header
    var header = document.createElement('div');
    header.classList.add('modal-header');
    ////////////////////////h5
    var h5 = document.createElement('h5');
    h5.classList.add('modal-title');
    h5.setAttribute('id','d'+date+'label');
    h5.textContent = "Quests";
    header.appendChild(h5);
    ////////////////////////////button empty
    var buttonempty = document.createElement('button');
    buttonempty.setAttribute('type','button');
    buttonempty.classList.add('btn-close');
    buttonempty.setAttribute('data-bs-dismiss','modal');
    buttonempty.setAttribute('aria-label','Close');
    buttonempty.textContent = '';
    header.appendChild(buttonempty);

    var FormDiv = document.createElement('div');
    FormDiv.classList.add("modal");
    FormDiv.classList.add("fade");
    FormDiv.setAttribute("id",'d'+date);
    FormDiv.setAttribute("tabindex",'-1');
    FormDiv.setAttribute('d'+date+'label','-1');
    FormDiv.setAttribute("aria-hidden",'true');
    var modal_content = document.createElement('div');
    modal_content.classList.add('modal-content');
    modal_content.classList.add('d'+date);
    modal_content.appendChild(header);
    modal_content.appendChild(modal_bodyDiv);
    modal_content.appendChild(modal_footer);
    var modal_dialog = document.createElement('div');
    modal_dialog.classList.add('modal-dialog');
    modal_dialog.appendChild(modal_content);
    FormDiv.appendChild(modal_dialog);
    content[0].appendChild(FormDiv);
}
// console.log(dataJSON[0][1]);
function bodygenerator(date,questDesc){
    var modal_bodyDiv = document.createElement('div');
    modal_bodyDiv.classList.add('modal-body');
    var quests_check = document.createElement('div');
    quests_check.classList.add('form-check');
    ////////////////////////////////////////// input part
    var input = document.createElement('input');
    input.classList.add('form-check-input');
    input.setAttribute('type','checkbox');
    input.setAttribute('value','');
    input.setAttribute('id','flexCheckDefault');
    modal_bodyDiv.appendChild(input);
    //////////////////////////////////////// label part 
    var label = document.createElement('label');
    label.classList.add('form-check-label');
    label.setAttribute('for','flexCheckDefault');
    label.textContent = questDesc;
    modal_bodyDiv.appendChild(label);
    ModalGenerator(date).appendChild(modal_bodyDiv);
}
showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body");
    tbl.innerHTML = ""

    monthAndYear.innerHTML = months[month] + " " + year
// filter array by month and a year
    var filteredMonth;
    var filteredDay;
    filteredMonth= parseInt(1+month);
    if(parseInt(month) < 10){
        filteredMonth = '0'+month;
    }
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(ButtonGenerator(date));
                filteredDay = date;
                if(parseInt(date) < 10){
                    filteredDay = '0' + date;
                }
                // console.log(year+"-"+filteredMonth+"-"+filteredDay);
                fulldate = year+"-"+filteredMonth+"-"+filteredDay;
                // ModalGenerator(date);
                // bodygenerator(date);
                // console.log(dataJSON[0][1]);
                // console.log("fake date:",fulldate);
                row.appendChild(cell);
                for(var x = 0; x < dataJSON.length; x++){
                    // console.log(dataJSON[x][1]);
                    // console.log("fake date:",fulldate);
                    if(dataJSON[x][1] == fulldate){
                        ModalGenerator(date,dataJSON[x][0]);
                    }
                }
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear -1: currentYear
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1
    showCalendar(currentMonth, currentYear);
}

function next() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear
    currentMonth = (currentMonth + 1) % 12
    showCalendar(currentMonth, currentYear);
}