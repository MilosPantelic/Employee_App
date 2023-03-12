class Task{
    constructor(Obj){
        this.fullname = Obj.fullname;
        this.broj = Obj.broj;
    }

    AddTop5(tabela){
        let rowtr = document.createElement("tr");
        tabela.appendChild(rowtr);
        
        let fullnametd = document.createElement("td");
        fullnametd.className = 'fullname';
        fullnametd.innerHTML = this.fullname;

        let brojtd = document.createElement("td");
        brojtd.className = 'broj';
        brojtd.innerHTML = this.broj == 1 ? `${this.broj} task finished` : `${this.broj} tasks finished`;



        rowtr.appendChild(fullnametd);
        rowtr.appendChild(brojtd);

    }
    OneTask(){
        document.getElementById("title").value = this.title;
        document.getElementById("description").value = this.description;
    }
}






callfunctionep();
function callfunctionep(){
    fetch("/getTop5").then(m => {
        m.json().then(data => {
            let tabela = document.getElementById("rowtr");
            data.result.forEach(element => {
                let obj = new Task(element);
                obj.AddTop5(tabela);
            });
        });
    });
}

