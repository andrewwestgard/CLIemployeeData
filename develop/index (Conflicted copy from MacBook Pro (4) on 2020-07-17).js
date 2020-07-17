
const inquirer = require('inquirer')
var path = require("path");
var mysql = require("mysql");

var PORT = 3306;

//MySql Connection
var connection = mysql.createConnection({
    host: 'localHost',

    //port application is running on
    PORT: 3306,
    
    //username
    user: 'root',

    //Password and DB name
    password: '',
    database: 'company_dataDB'
});



//INQUIRER PROMPTS
function main (){
  console.log('Welcome to the Employee Tracker!!')
  inquirer
    .prompt ({
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View Employees',
        'View department',
        'View roles',
        'Add emplyees',
        'Add department',
        'Add role',
        'Update Role',
        'Update manager',
        'Display employee by manager',
        'Delete employee',
        'Delete a role',
        'Delete a department',
        'View utilized budget for a department',
        'Quit'
      ],
      name: 'choice'
    }).then (function ( {choice} ) {
      if (choice === "View employees") {
        orm.viewEmployees ()
        .then(function () {
          console.log('/n');
          main ()
        });
      } else if (choice === 'ViewDepartment') {
        orm.viewDepartment()
        .then(function () {
          console.log('/n');
          main ()
        });
      } else if (choice === 'View roles') {
        orm.viewRole()
        .then(function () {
          console.log('/n');
          main ()
        });
      } else if (choice === 'Add employees') {
        addEmployee();
      } else if (choice === 'Add department') {
        addDepartment ();
      } else if (choice === 'Add role') {
        addRole ();
      } else if (choice === 'Update role') {
        updateRole ();
      } else if (choice === 'Update manager') {
        updateManager ();
      } else if (choice === 'Display employee by manager') {
        displayManager ();
      } else if (choice === 'Delete employee') {
        deleteEmployee ();
      } else if (choice === 'Delete role') {
        deleteRole ();
      } else if (choice === 'deleteDepartment') {
        deleteDepartment ();
      } else if (choice === 'View utilized budget for a department') {
        viewBudget ();
      } else if (choice === 'Quit') {
        quit ();
      }
    }
    )
  }

function addEmployee () {
  orm.getEmployees()
  .then(function(res){
    const managerArray = [];
    for (let i = 0; i < res.length; i++) {
      managerArray.push(res[i].name);    
    }
    managerArray.push('none');
    
  })
}


