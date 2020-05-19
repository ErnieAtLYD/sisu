const { setupDB } = require("./test-setup");
const User = require("../backend/models/user.model");

// Setup a Test Database
setupDB(process.env.DB_TEST_URL);

describe("User Schema: CREATE", () => {
  it("creates a user", async (done) => {
    const user = new User({
      username: "user1",
      name: { firstName: "user1", lastName: "user1" },
      password: "password",
    });
    await user.save();
    expect(user.isNew).toBeFalsy();
    done();
  });
});

describe("User Schema: READ", () => {
  beforeEach(async (done) => {
    const user = new User({
      username: "user1",
      name: { firstName: "Joe", lastName: "Wong" },
      password: "password",
    });
    await user.save();
    done();
  });

  it("finds the user by username", async (done) => {
    const foundUser = await User.findOne({ username: "user1" });
    expect(foundUser.username === "user1").toBeTruthy();
    done();
  });

  it("gets the preferred name", async (done) => {
    const foundUser = await User.findOne({ username: "user1" });
    expect(foundUser.preferredName).toBe("Joe");
    done();
  });

  it("gets the appropriate full name", async (done) => {
    const foundUser = await User.findOne({ username: "user1" });
    expect(foundUser.fullName).toBe("Joe Wong");
    done();
  });
});