const generateHTML = require("./generateHTML");
const fs = require("fs");


const loopandwrite = (managerObject, internObject, engineerObject) => {

    // generate Intern cards
    const internCards = internObject.map(employee => {
      return `<div class="card text-white shadow-lg" style="max-width: 18rem;">
      <div class="card-header bg-primary">
        <h3>${employee.name}</h3>
        <h4><i class="fas fa-mug-hot"></i> ${employee.getRole()}</h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush text-dark shadow-sm">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>

      </div>
    </div>`
    });

                // generate Engineer cards             
  const engineerCards = engineerObject.map(employee => {
      return `<div class="card text-white shadow-lg" style="max-width: 18rem;">
      <div class="card-header bg-primary">
        <h3>${employee.name}</h3>
        <h4><i class="fas fa-mug-hot"></i> ${employee.getRole()}</h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush text-dark shadow-sm">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>          </ul>

      </div>
    </div>`
    });


    // trigger next step for writing html
    html = generateHTML(managerObject, engineerCards, internCards);

    fs.writeFile("./output/team.html", html, function(err) {
      if (err) {
        return console.log(err);
      }
    });

}

module.exports = loopandwrite