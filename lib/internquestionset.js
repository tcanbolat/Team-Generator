const internQ = [
    {
      type: "input",
      name: "name",
      message: "What is the Intern's Name?",
      validate: function(val) {
        return /^[a-zA-Z]+$/i.test(val) || "Must only be letters!";
      }
    },
    {
      type: "input",
      name: "idnumber",
      message: this.name,
      validate: function(val) {
        return /^[0-9]*$/i.test(val) || "Must only be numbers!";
      }
    },
    {
      type: "input",
      name: "email",
      message: this.name,
      validate: function(val) {
        return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(val) || "Please use a correct email format";
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