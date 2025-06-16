const Course = require("../models/Course");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../util/mongoose");
class MeController {
  storedCourses(req, res, next) {

    
    let courseQuery = Course.find({ deleted: false });
    if ('_sort' in req.query) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type 
      });
    }

    Promise.all([
      Course.findDeleted({}), // ✅ sửa chỗ này
      courseQuery
    ])
      .then(([deletedCourses, courses]) => {
        res.render('me/storedCourses', {
          deletedCount: deletedCourses.length,
          courses: mutipleMongooseToObject(courses),
          
        });
      })
      .catch(next);
  }

  trashCourses(req, res, next) {
    Course.findDeleted().then((courses) => {
      const onlyDeleted = courses.filter((course) => course.deleted);
      res.render("me/trashCourses", {
        courses: mutipleMongooseToObject(onlyDeleted),
      });
    });
  }
}

module.exports = new MeController();
