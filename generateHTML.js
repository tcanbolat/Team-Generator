// const employeeCards = (employeeArray) => {
//   employeeArray.forEach((employee) => {

//   return `<div class="card col col-sm-6">
//             <h3>${employee.name}</h3>
//             <h3>${employee.id}</h3>
//             <h3>${employee.email}</h3>
//             <h3>${employee.github}</h3>
//           </div>`
//   });
// }

const generateHTML = (managerArray, engineerCards, internCards) => {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Team</title>
      <body>
      <div class="wrapper">
          <div class="card-deck">

            <div class="card col col-sm-6">
              <h3>${managerArray[0].name}</h3>
              <h3>${managerArray[0].id}</h3>
              <h3>${managerArray[0].email}</h3>
              <h3>${managerArray[0].officeNumber}</h3>
            </div>

            ${engineerCards}
            ${internCards}
          </div>
          <br>
      </div>
      </body>
      </html>
      `;
};

module.exports = generateHTML;
