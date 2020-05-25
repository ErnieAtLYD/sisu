# Sisu

The finnish phrase for the chinese phrase for eating bitterness

### Explanation

Exploratory monogoose data modelling of a hypothetical student managment system. Connects to cloud SAAS database via MongoDB Atlas. Uses ES6 JavaScript on the NodeJS side via Babel. Uses jest for testing, even though [mongoose isn't crazy about that](https://mongoosejs.com/docs/jest.html) in general.

### Installation

Fill in your MongoDB connection inside the `.env` file. Inside `.env.sample` is the general format I used to connect to MongoDB Atlas.

To run:

```
yarn dev
```

### Testing

Uses `mongodb-memory-server` to run MongoDB tests without actually creating a test DB instance.

Otherwise, the routes and mongoose DB unit tests are currently under development. To run unit tests:

```
yarn test-dev
```

### To Do

- [ ] Finish REST API implementation
- [ ] Document REST APIs (using API blueprint? Swagger?)
- [ ] Implement bcrypt and JWT
