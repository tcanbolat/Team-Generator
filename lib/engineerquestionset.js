const engineerQ = [
    {
      type: "input",
      name: "name",
      message: "What is the Engineer's Name?",
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
      name: "github",
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

  module.exports = engineerQ