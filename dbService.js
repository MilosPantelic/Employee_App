const mysql = require("mysql");

let pool;

exports.createConnectionPool=()=>{
    pool = mysql.createConnection(
        {
            /*host : 'sql7.freemysqlhosting.net',
            user : 'sql7604184',
            password: "C4j4cw6Dar",
            database: "sql7604184"*/
            host : 'localhost',
            user : 'root',
            password: "",
            database: "employeesdb"
        });
}

exports.employeeGetList = async function(res){
    pool.query('SELECT * FROM employees WHERE deleted=0', function(err, result, fields) {
        res.json({result});
    });
}

exports.newemployeeAdd = async function(res, par){
    const parametars = [
        par.body.fullname,
        par.body.email,
        par.body.phone,
        par.body.birthdate,
        par.body.montly
    ]

    //check do data contain some value
    let ok = true;
    if (parametars.includes('')){ok = false;}

    //failsafe, back if something is wrong with data
    if (!ok){
        res.redirect('back');
    }else{
        pool.query('INSERT INTO employees (fullname,email,phone,birthdate,montly,data_created) VALUES (?,?,?,?,?, NOW())',parametars, function(err, result, fields) {
            if (err) throw err;
        });
        res.redirect('/');
    }
}

exports.employeeDelete = async function(res, e){
    const deleteemp = e;
    pool.query('UPDATE employees SET deleted=1 WHERE id=?',deleteemp, function (err, result, fields) {
        if (err) throw err;
    });
    res.redirect('/');
}

exports.editemployeerGetData = async function(res, e){
    const gotem = e;
    pool.query('SELECT * FROM employees WHERE id=? AND deleted=0',gotem, function(err, result, fields) {
        res.json({result});
    });
}

exports.editEmployeeSave = async function(res, par){
    const parametars = [
        par.body.fullname,
        par.body.email,
        par.body.phone,
        par.body.birthdate,
        par.body.montly,
        par.body.id
    ]

    //check do data contain some value
    let ok = true;
    if (parametars.includes('')){ok = false;}

    //failsafe, back if something is wrong with data
    if (!ok){
        res.redirect('back');
    }else{
        pool.query('UPDATE employees SET fullname=?, email=?, phone=?, birthdate=?, montly=?  WHERE id=?',parametars, function(err, result, fields) {
            if (err) throw err;
        });
        res.redirect('/');
    }
}

exports.tasksGetList = async function(res){
    pool.query('SELECT tasks.*, employees.fullname FROM tasks LEFT JOIN employees ON tasks.employe = employees.id WHERE tasks.deleted=0',
    function(err, result, fields) {
        result.forEach(element => {
            //upored datuma da li je isteko ili nije sa backenda
            let date = new Date();
            date = parseInt(`${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${date.getDate()}`);
            dueDate = element.duedate;
            dueDate = parseInt(`${dueDate.getFullYear()}${("0" + (dueDate.getMonth() + 1)).slice(-2)}${("0" + (dueDate.getDate() + 1)).slice(-2)}`);
            element.expired = date > dueDate ? 1 : 0;
        });
        res.json({result});
    });
}

exports.newtaskAdd = async function(res, par){
    const parametars = [
        par.body.title,
        par.body.description,
        par.body.duedate,
        par.body.employe
    ]

    //check do data contain some value
    let ok = true;
    if (parametars.includes('')){ok = false;}

    //failsafe, back if something is wrong with data
    if (!ok){
        res.redirect('back');
    }else{
        pool.query('INSERT INTO tasks (title,description,duedate,employe,createddate) VALUES (?,?,?,?, NOW())',parametars, function(err, result, fields) {
            if (err) throw err;
        });
        res.redirect('./../tasks');
    }
}

exports.employeesGetList = async function(res){
    pool.query('SELECT id, fullname FROM employees WHERE deleted=0', function(err, result, fields) {
        res.json({result});
    });
}

exports.tasksDelete = async function(res, e){
    pool.query('UPDATE tasks SET deleted=1 WHERE id=?', e, function (err, result, fields) {
        if (err) throw err;
    });
    res.redirect('../../tasks');
}


exports.edittaskGet = async function(res, e){
    pool.query('SELECT * FROM tasks WHERE id=? AND deleted=0',e, function(err, result, fields) {
        res.json({result});
    });
}

exports.edittaskSave =  async function(res, par){
    const parametars = [
        par.body.title,
        par.body.description,
        par.body.duedate,
        par.body.employe,
        par.body.id
    ];

    //check do data contain some value
    let ok = true;
    if (parametars.includes('')){ok = false;}

    //failsafe, back if something is wrong with data
    if (!ok){
        res.redirect('back');
    }else{
        pool.query('UPDATE tasks SET title=?, description=?, duedate=?, employe=?  WHERE id=?',parametars, function(err, result, fields) {
            if (err) throw err;
        });
        res.redirect('/tasks');
    }
}

exports.taskFinish =  async function(res, parm){
    pool.query('UPDATE tasks SET status=1, duedate=NOW(), deleted=1 WHERE id=?', parm, function(err, result, fields) {
        if (err) throw err;
    });
    res.redirect('/tasks');
}

exports.getTop5 = async function(res){
    pool.query(`
        SELECT
            COUNT(status) as broj, employees.fullname
        FROM tasks
        LEFT JOIN employees ON
            tasks.employe = employees.id
        WHERE
            status = 1
                AND YEAR(duedate) = YEAR(CURRENT_DATE() - INTERVAL 1 MONTH)
                AND MONTH(duedate) = MONTH(CURRENT_DATE() - INTERVAL 1 MONTH)
        GROUP BY employe
        ORDER BY broj DESC LIMIT 5`, function(err, result, fields) {
        console.log(result);
        res.json({result});
    });
}