const Course = require("../models/Course");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../util/mongoose");
class MeController {
  storedCourses(req, res, next) {
    Course.find({}).then((courses) => {
      res.render("me/storedCourses", {
        courses: mutipleMongooseToObject(courses),
      });
    });
  }
}

module.exports = new MeController();
