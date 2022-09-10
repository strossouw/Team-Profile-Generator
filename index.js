const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const teamArray = [];


function toEmployeeClass(data) {
  const { name, id, email, github, school, officeNumber } = data;
  if (data.role === "Engineer") {
    return new Engineer(name, id, email, github);
  }
  if (data.role === "Intern") {
    // return new Intern;
    return new Intern(name, id, email, school);
  }
  if (data.role === "Manager") {
    // return new Manager
    return new Manager(name, id, email, officeNumber);
  }
}

function createCard(employee) {
  const getUniqueProperty = () => {
    if (employee.role === "Engineer") {
      return employee.getGithub();
    }
    if (employee.role === "Intern") {
      return employee.getSchool();
    }
    if (employee.role === "Manager") {
      return employee.getOfficeNumber();
    }
    return "unexpected role";
  };
  const uniqueProperty = getUniqueProperty();

  return `<div class="card">
  <div class="card-header">
    <h2 class="name">${employee.name}</h2>
    <h3 class="role">${employee.role}</h3>
  </div>
  <div class="card-body">
    <div class="id">${employee.id}</div>
    <div class="email">${employee.email}</div>
    <div class="unique-property">${uniqueProperty}</div>
  </div>
</div>`;
}


const questions = [
  {
    name: "name",
    question: "What is your employee name?",
    type: "input",
  },
  {
    name: "id",
    question: "What is your employee ID",
    type: "input",
  },
  {
    name: "email",
    question: "What is your email?",
    type: "input",
  },
  {
    name: "role",
    question: "What is your role at the company",
    type: "list",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    name: "office",
    question: "What office do you work at?",
    type: "input",
    when: (ans) => ans.role === "Manager",
  },
  {
    name: "github",
    question: "What is your github username?",
    type: "input",
    when: (ans) => ans.role === "Engineer",
  },
  {
    name: "school",
    question: "What school do you currently attend?",
    type: "input",
    when: (ans) => ans.role === "Intern",
  },
];

function generateHeader(){

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile Generator</title>
    </head>
    <body>`;
  
  }
  
  function generateFooter(){
   return `</body> </html>`
  
  }

function menu (){
  inquirer.prompt(questions)
  .then((data) => {
  teamArray.push( createCard([toEmployeeClass(data)]))}
  
  )
  .then (CreateTeam);
};

function CreateTeam(){
  inquirer.prompt ([{
      type: "confirm",
      name: "continue",
      message: "Do you want to add more team members?",
  }])

  .then(data => {
      if (data.continue){
          menu()
      }
      else{
      console.log(teamArray);
      fs.writeFileSync(
          `./output/index.html`,
          createTemplate(generateHeader,[toEmployeeClass(teamArray)],generateFooter)
       )}
  })
}

  menu();