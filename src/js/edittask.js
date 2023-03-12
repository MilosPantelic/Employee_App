class Task{
    constructor(Obj){
        this.title = Obj.title;
        this.description = Obj.description;
        this.duedate = Obj.duedate;
        this.status = Obj.status;
        this.employe = Obj.employe;
        this.id = Obj.id;
        this.fullname = Obj.fullname;
    }
    oneTask(){
        document.getElementById("id").value = this.id;
        document.getElementById("title").value = this.title;
        document.getElementById("description").value = this.description;
        document.getElementById("duedate").value = this.duedate.split("T")[0];
    }
}

class GetEmployeerName {
    constructor(Obj){
        this.fullname = Obj.fullname;
        this.id = Obj.id;
    }
    AddTaskObject(select){
        let opt = document.createElement("option");
        opt.value = this.id;
        opt.innerHTML = this.fullname;
        select.appendChild(opt);
    }
    OneEmployee(){
        document.getElementById("id").value = this.id;
    }
}

Date.prototype.toYMD = function() {
    let month, day;
    month = String(this.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = String(this.getDate());
    if (day.length == 1) {
        day = "0" + day;
    }
    return `${day}/${month}/${String(this.getFullYear())}`;
}
let date = new Date();
date = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`;
document.getElementById("duedate").min=date;

let getParameter = (key) => {
    return new URLSearchParams(window.location.search).get(key);
}


callfunctionep();
function callfunctionep(){
    let defoultId;
    fetch("/edittask/get/"+getParameter("id")).then(m => {
        m.json().then(data => {
            console.log(JSON.stringify(data));
            data.result.forEach(element => {
                let obj = new Task(element);
                obj.oneTask();
                defoultId = obj.employe;
            });
        });
    });

    fetch("/employees/getlist").then(m => {
        m.json().then(data => {
            let selectOpt = document.getElementById("employe");
            data.result.forEach(element => {
                let obj = new GetEmployeerName(element);
                obj.AddTaskObject(selectOpt);
            });
            console.log(defoultId);
            selectOpt.value = defoultId;//Set the selected option to 2, which is Option 2
        });
    });

}

