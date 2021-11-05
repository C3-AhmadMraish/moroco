const mongoose = require("mongoose");
 const app = require("../main");
const request = require("supertest");
mongoose.connect("mongodb://localhost:27017/test");
const Comment = require("../db/models/comments");
const Posts = require("../db/models/posts");


beforeAll(async () => {
  await Comment.remove();
});

afterAll(async () => {
  await Comment.remove();
  mongoose.connection.close();
});

describe("Testing Comments Model", () => {
    it("check if the model defined", () => {
        expect(Comment).toBeDefined();
    });

    it(" should save a comment", async () => {
        const commentP = {
            comment:"hello",
            commenter:"61457c1fa8fb1d2c28caa1df",
            date:Date()
        };
        const comment = new Comment(commentP);
        await comment.save();
        const checker = await Comment.findOne({ comment: "hello" });
        expect(checker.comment).toEqual(commentP.comment);
    })
})

describe("testing Comment APIs", () => {
  const commentInfo = {
    body: "Hello",
  };

  const newUserInfo = {
    firstName: "Ahmad",
    email: "a@a.com",
    gender: "male",
    password: "123",
  };

  const userLogin = {
    email: "a@a.com",
    password: "123",
  };

  let postId;
  let commentId;
  let registerResult;
  let loginResult;

  it("able to create a comment ", async () => {
    registerResult = await request(app).post("/comment").send(newUserInfo);
    loginResult = await request(app).post("/users/login").send(userLogin);

    const token = loginResult.body.token;
    const theComment = await request(app)
      .post("/comment")
      .send(commentInfo)
      .set("Authorization", `Bearer ${token}`);

    commentId = theComment.body.message._id;

    expect(typeof theComment.body.message).toEqual(typeof commentInfo);
    expect(theComment.statusCode).toBe(201);
    expect(theComment.body.message).toHaveProperty("_id");
  });

  it("able to get a comment ", async () => {
    const token = loginResult.body.token;

    const theComment = await request(app)
      .get(`/${commentId}/comment`)
      .set("Authorization", `Bearer ${token}`);

    expect(typeof theComment.body.comment).toEqual(typeof commentInfo);
    expect(theComment.statusCode).toBe(200);
    expect(theComment.body.comment).toHaveProperty("_id");
    expect(theComment.body.comment.body).toBe(commentInfo.body);
  });

  it("able to update a comment", async () => {
    const token = loginResult.body.token;

    const updatecommentInfo = {
      body:'New body'
    }

    const theComment = await request(app)
      .put(`/comment/${commentId}`)
      .send(updatecommentInfo)
      .set("Authorization", `Bearer ${token}`);

    expect(typeof theComment.body.comment).toEqual(typeof commentInfo);
    expect(theComment.statusCode).toBe(202);
    expect(theComment.body.comment).toHaveProperty("_id");
    expect(theComment.body.comment.body).toBe(updatecommentInfo.body);
  });

  it("able to delete a comment", async () => {
    
    const token = loginResult.body.token;

    postId = Posts.body.message._id;

    const theComment = await request(app)
      .delete(`${postId}/comment/${commentId}`)
      .send(commentP)
      .set("Authorization", `Bearer ${token}`);

    expect(typeof theComment.body.comment).toEqual(typeof commentInfo);
    expect(theComment.statusCode).toBe(200);
    expect(theComment.body.comment).toHaveProperty("_id");
    expect(theComment.body.comment.body).toBe(commentP.body);
  });

});