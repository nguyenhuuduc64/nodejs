const Course = require('../models/Course');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    storedCourses(req, res, next) {
        Course.find({deleted: false}).then((courses) => {
            res.render('me/storedCourses', {
                courses: mutipleMongooseToObject(courses),
            });
        });
    }
    trashCourses(req, res, next) {
      Course.findDeleted().then(courses => {
        const onlyDeleted = courses.filter(course => course.deleted);
        res.render('me/trashCourses', { courses: mutipleMongooseToObject(onlyDeleted) });
      });
    }
      
 

}

module.exports = new MeController();
