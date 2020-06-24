// backend/students/student.controller.js

const Student = require("./student.model");

/**
 * @route    POST api/cohorts/:id/students
 * @desc     Add a new student to cohort :id
 * @access   public
 */
exports.addStudentToCohort = async (req, res) => {
  try {
    let user = await User.findOne(req.body.userId);
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User doesn't exist" }] });
    }
    let cohort = await Cohort.findOne({ shortName: req.query.id });
    if (!cohort) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Cohort doesn't exist" }] });
    }
    let student = new Student({
      ...req.body,
      userId: user._id,
      cohortId: cohort._id,
    });
    await student.save();
    const payload = { student: { id: student._id } };
    res.status(201).json(payload);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
