const { setupDB } = require("./test-setup");
const Cohort = require("../backend/cohorts/cohort.model");

// Setup a Test Database
setupDB(global.__MONGO_URI__);

describe("Cohort Schema", () => {
  it("creates a cohort", async (done) => {
    const cohort = new Cohort({
      programCode: "C",
      cohortNumber: 36,
    });
    await cohort.save();
    expect(cohort.isNew).toBeFalsy();
    done();
  });
});
