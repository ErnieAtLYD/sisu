const { setupDB } = require("./test-setup");
const Student = require("../backend/students/student.model");
const User = require("../backend/users/user.model");
const Cohort = require("../backend/cohorts/cohort.model");

// Setup a Test Database
setupDB(global.__MONGO_URI__);

describe("Student Schema", () => {
  xit("ties a user to a student account", async () => {
    const user = new User({
      username: "user1",
      name: { firstName: "user1", lastName: "user1" },
    });
    await user.save();
    const cohort = new Cohort({
      programCode: "C",
      shortName: "C36",
    });
    await cohort.save();
    const student = new Student({
      userId: user._id,
      cohortId: cohort._id,
    });
    await student.save();
    const cohort2 = await Cohort.findByIdAndUpdate(
      { _id: cohort._id },
      { $push: { students: student._id } },
      { new: true }
    );
    expect(student.isNew).toBeFalsy();
    console.log(student);
    console.log(cohort2);
  });
});
