// backend/cohorts/cohort.controller.js

import Cohort from "./cohort.model";

/**
 * @route    POST api/cohorts
 * @desc     Create a new cohort
 * @access   public
 */
exports.postCohort = async (req, res) => {
  try {
    let cohort = new Cohort(req.body);
    await cohort.save();
    const payload = { cohort: { id: cohort.shortName } };
    res.status(201).json(payload);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * @route    PUT api/cohorts/:cid
 * @desc     Edit a cohort by its cohort number
 * @access   public
 */
exports.editCohort = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
