const express = require('express');
var router = express.Router();

const{employeeGetList, newemployeeAdd, employeeDelete, editemployeerGetData, editEmployeeSave} = require('./dbService');
const{tasksGetList, newtaskAdd,  employeesGetList, tasksDelete, edittaskGet, edittaskSave, taskFinish, getTop5} = require('./dbService');

const app = express();

/* employee */

router.get('/', function(req, res, next){
   res.redirect('/employee');
});

router.get('/employee', function(req, res, next){
    res.sendFile(__dirname + '/pages/employee.html');
});

router.get('/employee/getList',async function(req, res, next){
    employeeGetList(res);
});

router.get('/employee/delete/:id', function (req, res) {
    let e = req.params['id'];
    employeeDelete(res, e);
});

router.get('/newemployee',async function(req, res, next){
    res.sendFile(__dirname + '/pages/newemployee.html');
});

router.post('/newemployee/add', async function(req, res){
    newemployeeAdd(res, req);
});

router.get('/editemployee', function(req, res, next){
    res.sendFile(__dirname + '/pages/editemployee.html');
});

router.get('/editemployee/getData/:id', function(req, res, next){
    editemployeerGetData(res, req.params['id']);
});

router.post('/editemployee/save', function(req, res, next){
    editEmployeeSave(res, req);
});

router.get('/employees/getlist', async function(req, res){
    employeesGetList(res);
});



/* tasks */

router.get('/tasks',async function(req, res, next){
    res.sendFile(__dirname + '/pages/tasks.html');
});

router.get('/tasks/delete/:id', function (req, res) {
    let e = req.params['id'];
    tasksDelete(res, e);
});

router.get('/tasks/finish/:id', function(req, res, next){
    taskFinish(res, req.params['id']);
});

router.get('/tasks/getlist',async function(req, res, next){
    tasksGetList(res);
});

router.get('/newtask',async function(req, res, next){
    res.sendFile(__dirname + '/pages/newtask.html');
});

router.post('/newtask/add', async function(req, res){
    newtaskAdd(res, req);
});

router.get('/edittask', function(req, res, next){
    res.sendFile(__dirname + '/pages/edittask.html');
});

router.get('/edittask/get/:id', function(req, res, next){
    edittaskGet(res, req.params['id']);
});

router.post('/edittask/save', function(req, res, next){
    edittaskSave(res, req);
});



/* top 5 */

router.get('/top5',async function(req, res, next){
    res.sendFile(__dirname + '/pages/top5.html');
});

router.get('/getTop5', function(req, res, next){
    getTop5(res);
});




module.exports = router;