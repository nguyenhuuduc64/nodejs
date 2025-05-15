const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.post('/store', CourseController.store);

router.delete('/:id', CourseController.deleteCourse);
router.patch('/:id/restore', CourseController.restoreCourse);
router.get('/:id/edit', CourseController.edit);
router.get('/:slug', CourseController.show);
router.put('/:id', CourseController.update);
module.exports = router;
