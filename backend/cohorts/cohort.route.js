// /backend/cohorts/cohort.route.js

// https://www.youtube.com/watch?v=mbsmsi7l3r4

const Router = require("express");
const CohortController = require("./cohort.controller");
const StudentController = require("../students/student.controller");

const CohortRoutes = Router();

CohortRoutes.post("/", CohortController.postCohort);
CohortRoutes.post("/:id/students", StudentController.addStudentToCohort);

module.exports = CohortRoutes;
