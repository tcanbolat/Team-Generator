function Manager(name, id, title, email, OfficeNum) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
    this.OfficeNum = OfficeNum;
    getRole();
  }

  module.exports = Manager;