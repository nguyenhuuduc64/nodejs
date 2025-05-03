const express = require("express");
const router = express.Router();
const CourseController = require("../app/controllers/CourseController");

router.get("/create", CourseController.create);
router.post("/store", CourseController.store);
router.get("/:id/edit", CourseController.edit);
router.get("/:slug", CourseController.show);
router.put("/:id", CourseController.update);
module.exports = router;
