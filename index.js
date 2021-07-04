const mysql = require('mysql');
const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,


  user: 'root',


  password: 'password',
  database: 'employee_tracker',
});

connection.connect((err) => {
  if (err) throw err;
  startPrompt();
});


function startPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "What do you want to do?",
            choices: ["View all employees", "View departments"," View roles", "Add employees","Add departments", "Add roles", "Update employee roles"]
        }   
    ])
    .then(results => {
        if(results.option === "View all employees"){
        viewAllEmployees();    
        }else if(results.option === "View departments"){
            viewDepartments()
        }else if(results.option === " View roles"){
            viewRoles()
        }else if(results.option === "Add employees"){
            addEmployees()
        }else if(results.options === "Add departments"){
            addDepartments()
        }else if(results.options === "Add roles"){
            addRoles()
        }else if(results.options === "Update employee roles"){
            updateEmployee()
        }
    }) 
}

function viewAllEmployees(){
    connection.query('select * from employees', (err, data)=>{
        if(err) throw err
        console.table(data)
        startPrompt()
    })
}

function viewDepartments(){
    connection.query('select * from Departments', (err, data)=>{
        if(err) throw err
        console.table(data)
        startPrompt()
    })
    
}

function viewRoles(){
    connection.query('select * from Roles', (err, data)=>{
        if(err) throw err
        console.table(data)
        startPrompt()
    })
}

function addDepartments(){
    inquirer.prompt([
        {
            type: "input",
            name: "departments",
            message: "What is the departments name?"
        }   
    ]).then(results =>{
        connection.query('insert into departments set ?', results,  (err, data)=>{
            if(err) throw err
            console.table(data)
            startPrompt()
    })
    
    })
}