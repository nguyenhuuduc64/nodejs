const Course = require("../models/Course");
class SiteController {
  // GET /
  home(req, res) {
    Course.find({})
      .then((courses) => {
        res.json(courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // GET /news
  news(req, res) {
    res.render("home");
  }
  // GET /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
