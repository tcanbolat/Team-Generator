function Engineer(name, id, title, email, github) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
    this.github = github;
    getGithub();
    getRole();
  }

  module.exports = Engineer;