// NOTE: if using jest and mongodb, see these tests:
// https://mongoosejs.com/docs/jest.html
// https://medium.com/nongaap/beginners-guide-to-writing-mongodb-mongoose-unit-tests-using-mocha-chai-ab5bdf3d3b1d

const { setupDB } = require("./test-setup");
const app = require("../backend/server");
const request = require("supertest");

// Setup a Test Database
setupDB(global.__MONGO_URI__);

describe("API: Cohort Endpoints", () => {
  const cohort = { programCode: "C", shortName: "C37" };
  describe("POST", () => {
    xit("registers a new cohort", async () => {
      const res = await request(app).post("/api/cohorts").send(cohort);
      expect(res.statusCode).toEqual(201);
    });
  });
});
