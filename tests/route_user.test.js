// NOTE: if using jest and mongodb, see these tests:
// https://mongoosejs.com/docs/jest.html
// https://medium.com/nongaap/beginners-guide-to-writing-mongodb-mongoose-unit-tests-using-mocha-chai-ab5bdf3d3b1d

const { setupDB } = require("./test-setup");
const app = require("../backend/server");
const request = require("supertest");

// Setup a Test Database
setupDB(global.__MONGO_URI__);

describe("API: User Endpoints", () => {
  const user = {
    username: "ErnieAtLYD",
    name: {
      firstName: "Ernie",
      lastName: "Hsiung",
    },
    password: "password",
  };

  it("gets users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
  });

  describe("POST", () => {
    it("registers a new user", async () => {
      const res = await request(app).post("/api/users").send(user);
      expect(res.statusCode).toEqual(201);
    });

    it("won't allow you to register an existing user by username", async () => {
      const res = await request(app).post("/api/users").send(user);
      expect(res.statusCode).toEqual(201);

      const res2 = await request(app).post("/api/users").send(user);
      expect(res2.statusCode).toEqual(400);
    });

    it("fails if no username", async () => {
      const noUsername = user;
      delete noUsername.username;
      const res = await request(app).post("/api/users").send(noUsername);
      expect(res.statusCode).toEqual(500);
    });
  });
});
