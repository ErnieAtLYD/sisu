const { setupDB } = require("./test-setup");
const Cohort = require("../backend/cohorts/cohort.model");

// Setup a Test Database
setupDB(global.__MONGO_URI__);

describe("Cohort Schema", () => {
  beforeEach(async (done) => {
    const cohort = new Cohort({
      programCode: "C",
      shortName: "C36",
    });
    await cohort.save();
    done();
  });

  xit("creates a cohort", async (done) => {
    const cohort = await Cohort.findOne();
    expect(cohort.isNew).toBeFalsy();
    done();
  });
  xit("has a short name", async (done) => {
    const cohort = await Cohort.findOne();
    expect(cohort.shortName).toBe("C36");
    done();
  });
});
