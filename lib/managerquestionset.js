const managerQ = [
    {
      type: "input",
      name: "name",
      message: "What is the Manager's Name?",
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
      name: "officenumber",
      message: this.name,
      validate: function(val) {
        return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(val) || "Please use a correct phone number format";
      }
    }
  ]

  module.exports = managerQ