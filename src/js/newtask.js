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
date = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`
document.getElementById("duedate").min=date;
document.getElementById("duedate").value=date;

callfunctionep();
function callfunctionep(){
    fetch("/employees/getlist").then(m => {
        m.json().then(data => {
            let selectOpt = document.getElementById("employe");
            data.result.forEach(element => {
                let obj = new GetEmployeerName(element);
                obj.AddTaskObject(selectOpt);
            });
        });
    });
}