const mongoose = require("mongoose");
const app = require("../main");
const request = require("supertest");
mongoose.connect("mongodb://localhost:27017/Project4TestDb");
const User=require("../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
beforeAll(async () => {
    await User.remove();
  });

afterAll(async () => {
    await User.remove();
    mongoose.connection.close();
  });

describe("Testing User Model", () => {
    it("check if the model defined", () => {
      expect(User).toBeDefined();
    });

    it("should save a new user", async () => {
        const newUserInfo = {
            firstName: "Ahmad",
            email: "a@a.com",
            gender: "male",
            password: "123",
          };

          const user=new User(newUserInfo);
          await user.save();
          const checker = await User.findOne({ firstName: "Ahmad" });
          expect(checker.firstName).toEqual(newUserInfo.firstName);
        });
          
});

describe("testing User APIs", () => {
    const newUserInfo = {
        firstName: "Ahmad",
        email: "A@A.COM",
        gender: "male",
        password: "123",
      };
      const userLogin = {
        email: "a@a.com",
        password: "123",
      };
      let registerResult;
      let loginResult;
      let id;
      it("able to create a account ", async () => {
        registerResult = await request(app).post("/users").send(newUserInfo);
        id=registerResult.body.User._id
        // console.log(registerResult.body);
        expect(registerResult.body.User.email).toEqual(newUserInfo.email.toLowerCase());
        const valid = await bcrypt.compare(newUserInfo.password, registerResult.body.User.password);
        expect(valid).toBe(true);
        expect(registerResult.body.User).toHaveProperty("_id");
      });

        it("able to login ", async () => {
        loginResult = await request(app).post("/users/login").send(userLogin);        
      });

      it("able to login ", async () => {
      const token = loginResult.body.token;
      const theUser = await request(app)
      .get(`/users/${id}`)
      .set("Authorization", `Bearer ${token}`);
      expect(theUser.body.success).toBe(true);
      expect(theUser.body.posts.firstName).toEqual(newUserInfo.firstName);
      });

      it("able to update user", async () => {
        const token = loginResult.body.token;

        const updateUserInfo = {
          firstName: "Mai",
          gender: "Female",
        }
        const theUpdatedUser = await request(app)
        .put(`/users/${id}`)
        .send(updateUserInfo)
        .set("Authorization", `Bearer ${token}`);
        expect(theUpdatedUser.body.success).toBe(true);
        expect(theUpdatedUser.body.post.firstName).toEqual(updateUserInfo.firstName);
        expect(theUpdatedUser.body.post.gender).toEqual(updateUserInfo.gender);
      });
});
