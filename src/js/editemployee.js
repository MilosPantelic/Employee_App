class Employee{
    constructor(Obj){
        this.fullname = Obj.fullname;
        this.email = Obj.email;
        this.phone = Obj.phone;
        this.birthdate = Obj.birthdate;
        this.montly = Obj.montly;
        this.id = Obj.id;
    }

    OneEmployee(){
        document.getElementById("id").value = this.id;
        document.getElementById("fullname").value = this.fullname;
        document.getElementById("email").value = this.email;
        document.getElementById("phone").value = this.phone;
        document.getElementById("birthdate").value = (new Date(this.birthdate)).toYMD();
        document.getElementById("montly").value = this.montly;
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
    return `${String(this.getFullYear())}-${month}-${day}`;
}

let getParameter = (key) => {
    return new URLSearchParams(window.location.search).get(key);
}


callfunctionep();
function callfunctionep(){
    fetch("/editemployee/getData/"+getParameter("id")).then(m => {
        m.json().then(data => {
                data.result.forEach(element => {
                    let obj = new Employee(element);
                    obj.OneEmployee();
            });
        });
    });
}

