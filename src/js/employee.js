class Employee{
    constructor(Obj){
        this.fullname = Obj.fullname;
        this.email = Obj.email;
        this.phone = Obj.phone;
        this.birthdate = Obj.birthdate;
        this.montly = Obj.montly;
        this.id = Obj.id;
    }

    AddEmployeeObject(tabela){
        let rowtr = document.createElement("tr");
        tabela.appendChild(rowtr);
        
        let fullnametd = document.createElement("td");
        fullnametd.className = 'fullname';
        fullnametd.innerHTML = this.fullname;

        let emailtd = document.createElement("td");
        emailtd.className = 'email';
        emailtd.innerHTML = this.email;

        let phonetd = document.createElement("td");
        phonetd.className = 'phone';
        phonetd.innerHTML = this.phone;

        let birthdatetd = document.createElement("td");
        birthdatetd.className = 'date';
        birthdatetd.innerHTML = (new Date(this.birthdate)).toYMD();

        let montlytd = document.createElement("td");
        montlytd.className = 'montly';
        montlytd.innerHTML = this.montly;

        let buttonstd = document.createElement("td");
        buttonstd.className = 'buttons';
        buttonstd.innerHTML = `<a href="./../editemployee/?id=${this.id}" class="image"><img src="img/editing.webp" alt="" width="24px" heigh="24px"></a>
        <a href="./employee/delete/${this.id}" method="delete" id="deleteem" class="image" ><img src="img/bin.webp" alt="delete" width="24px" heigh="24px" ></a>`;
        
        rowtr.appendChild(fullnametd);
        rowtr.appendChild(emailtd);
        rowtr.appendChild(phonetd);
        rowtr.appendChild(birthdatetd);
        rowtr.appendChild(montlytd);
        rowtr.appendChild(buttonstd);
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

callfunctionep();
function callfunctionep(){
    fetch("/employee/getlist").then(m => {
        m.json().then(data => {
                let tabela = document.getElementById("rowtr");
                data.result.forEach(element => {
                    let obj = new Employee(element);
                    obj.AddEmployeeObject(tabela);
                   
            });
        });
    });
}
