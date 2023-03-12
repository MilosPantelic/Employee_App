class Task{
    constructor(Obj){
        this.title = Obj.title;
        this.description = Obj.description;
        this.duedate = Obj.duedate;
        this.status = Obj.status;
        this.employe = Obj.employe;
        this.id = Obj.id;
        this.fullname = Obj.fullname;
        this.expired = Obj.expired;
    }

    AddTaskObject(tabela){
        let rowtr = document.createElement("tr");
        tabela.appendChild(rowtr);
        
        let titletd = document.createElement("td");
        titletd.className = 'title';
        titletd.innerHTML = this.title;

        let desctd = document.createElement("td");
        desctd.className = 'description';
        desctd.innerHTML = this.description;

        let datetd = document.createElement("td");
        datetd.className = 'date';
        datetd.innerHTML = this.expired ? `<font color="red">${(new Date(this.duedate)).toYMD()}</font>` : (new Date(this.duedate)).toYMD();

        let statustd = document.createElement("td");
        statustd.className = 'status';
        statustd.innerHTML = this.status ? "Closed" : "Opened";

        let employetd = document.createElement("td");
        employetd.className = 'employe';
        employetd.innerHTML = this.fullname;


        let buttonstd = document.createElement("td");
        buttonstd.className = 'buttons';
        buttonstd.innerHTML = `
            <a href="/tasks/finish/${this.id}" class="image"><img src="img/checkmark.png" alt="" width="24px" heigh="24px"></a>
            <a href="/edittask/?id=${this.id}" class="image"><img src="img/editing.webp" alt="" width="24px" heigh="24px"></a>
            <a href="/tasks/delete/${this.id}" method="delete" id="deleteem" class="image" ><img src="img/bin.webp" alt="delete" width="24px" heigh="24px"></a>
        `;


        rowtr.appendChild(titletd);
        rowtr.appendChild(desctd);
        rowtr.appendChild(datetd);
        rowtr.appendChild(statustd);
        rowtr.appendChild(employetd);
        rowtr.appendChild(buttonstd);
    }
    OneTask(){
        document.getElementById("id").value = this.id;
        document.getElementById("title").value = this.title;
        document.getElementById("description").value = this.description;
        document.getElementById("date").value = this.date;
        document.getElementById("status").value = this.status;
        document.getElementById("fullname").value = this.fullname;
        
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
    fetch("/tasks/getlist").then(m => {
        m.json().then(data => {
            let tabela = document.getElementById("rowtr");
            data.result.forEach(element => {
                let obj = new Task(element);
                obj.AddTaskObject(tabela);
            });
        });
    });
}

