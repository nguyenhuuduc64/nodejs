const Course = require("../models/Course");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../util/mongoose");
class CourseController {
  // GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug }).then((course) => {
      res.render("courses/show", { course: mongooseToObject(course) });
    });
  }
  create(req, res, next) {
    res.render("courses/create");
  }
  // [POST] /courses/store
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {
        console.log(error);
      });
  }
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
