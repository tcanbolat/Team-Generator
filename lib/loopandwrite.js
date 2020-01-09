html = require("./generateHTML");


const loopandwrite = () => {

    // generate cards
    const internCards = internArray.map(employee => {
      return `<div class="card col col-sm-6">
                <h3>${employee.name}</h3>
                <h3>${employee.id}</h3>
                <h3>${employee.email}</h3>
                <h3>${employee.school}</h3>
              </div>`;
    });

    console.log(internCards);




                // generate cards
  const engineerCards = engineerArray.map(employee => {
      return `<div class="card col col-sm-6">
                    <h3>${employee.name}</h3>
                    <h3>${employee.id}</h3>
                    <h3>${employee.email}</h3>
                    <h3>${employee.github}</h3>
                    </div>`;
    });

    console.log(engineerCards);

    // trigger next step for writing html
    html = generateHTML(managerArray, engineerCards, internCards);

    fs.writeFile("./output/team.html", html, function(err) {
      if (err) {
        return console.log(err);
      }
    });

}

module.exports = loopandwrite