const Course = require("../models/Course");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../util/mongoose");
class SiteController {
  // GET /
  home(req, res) {
    Course.find({})
      .then((courses) => {
        //đưa ra mảng các khóa học để khắc phục lỗi không có khóa học nào
        res.render("home", { courses: mutipleMongooseToObject(courses) });
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
