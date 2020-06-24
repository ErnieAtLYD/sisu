// NOTE: if using jest and mongodb, see these tests:
// https://mongoosejs.com/docs/jest.html
// https://medium.com/nongaap/beginners-guide-to-writing-mongodb-mongoose-unit-tests-using-mocha-chai-ab5bdf3d3b1d

const { setupDB } = require("./test-setup");
const app = require("../backend/server");
const request = require("supertest");

let token;
const user = {
  username: "ErnieAtLYD",
  name: {
    firstName: "Ernie",
    lastName: "Hsiung",
  },
  password: "password123",
};

// Setup a Test Database
setupDB();

describe("API: User Endpoints", () => {
  describe("POST /api/users/", () => {
    it("registers a new user", async () => {
      const res = await request(app).post("/api/users").send(user);
      expect(res.statusCode).toEqual(201);
    });

    it("won't allow you to register an existing user by username", async () => {
      await request(app).post("/api/users").send(user);
      const res = await request(app).post("/api/users").send(user);
      expect(res.statusCode).toEqual(400);
    });

    it("fails if no username", async () => {
      const noUsername = { ...user };
      delete noUsername.username;
      const res = await request(app).post("/api/users").send(noUsername);
      expect(res.statusCode).toEqual(400);
    });
  });

  describe("POST /api/users/logout", () => {
    it("should require authorization", async () => {
      const res = await request(app).post("/api/users/logout").send();
      expect(res.statusCode).toEqual(401);
    });

    it("should logout appropriately", async () => {
      // register user first...
      let res = await request(app).post("/api/users").send(user);
      token = res.body.token;

      // then make the API call
      res = await request(app)
        .post("/api/users/logout")
        .set("Authorization", `Bearer ${token}`)
        .send();
      expect(res.statusCode).toEqual(200);
    });
  });

  describe("POST /api/users/login", () => {
    it("returns a login request of 200", () => {});
  });
});
