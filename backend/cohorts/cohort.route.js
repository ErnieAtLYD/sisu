// /backend/cohorts/cohort.route.js

// https://www.youtube.com/watch?v=mbsmsi7l3r4

import { Router as ExpressRouter } from "express";
import CohortController from "./cohort.controller";

const CohortRoutes = ExpressRouter();

CohortRoutes.post("/", CohortController.postCohort);

export default CohortRoutes;
