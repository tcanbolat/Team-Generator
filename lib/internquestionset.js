const internQ = [
    {
      type: "input",
      name: "name",
      message: "What is the Intern's Name?",
      validate: function(val) {
        return /[a-z]/i.test(val);
      }
    },
    {
      type: "input",
      name: "idnumber",
      message: this.name,
      validate: function(val) {
        return /[1-9]/i.test(val);
      }
    },
    {
      type: "input",
      name: "email",
      message: this.name,
      validate: function(val) {
        return /[a-z1-9]/i.test(val);
      }
    },
    {
      type: "input",
      name: "school",
      message: this.name,
      validate: function(val) {
        return /[a-z1-9]/i.test(val);
      }
    },
    {
      type: "confirm",
      name: "choice",
      message: "add another employee?"
    }
  ]

  module.exports = internQ