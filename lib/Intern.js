function Intern(name, id, title, email, school) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
    this.school = school;
    getSchool();
    getRole();
  }

  module.exports = Intern;