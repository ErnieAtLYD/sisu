// NOTE: if using jest and mongodb, see these tests:
// https://mongoosejs.com/docs/jest.html
// https://medium.com/nongaap/beginners-guide-to-writing-mongodb-mongoose-unit-tests-using-mocha-chai-ab5bdf3d3b1d

const { setupDB } = require("./test-setup");
const app = require("../backend/server");
const request = require("supertest");

// Setup a Test Database
setupDB(process.env.DB_TEST_URL);

describe("API: User Endpoints", () => {
  it("should get users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
  });
});
