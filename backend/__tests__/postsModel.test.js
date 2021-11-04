const mongoose = require("mongoose");
const app = require("../main");
const request = require("supertest");
mongoose.connect("mongodb://localhost:27017/Project4TestDb");
const Posts = require("../db/models/posts");

beforeAll(async () => {
  await Posts.remove();
});
// afterEach(async () => {
//   await Posts.remove();
// });
afterAll(async () => {
  await Posts.remove();
  mongoose.connection.close();
});

describe("Testing Posts Model", () => {
  it("check if the model defined", () => {
    expect(Posts).toBeDefined();
  });

  it("should save a post", async () => {
    const postInfo = {
      body: "Hello post",
      date: new Date("02-03-2021"),
      likesCounter: 33,
      commentsCounter: 42,
    };
    const post = new Posts(postInfo);
    await post.save();
    const checker = await Posts.findOne({ body: "Hello post" });

    expect(checker.likesCounter).toEqual(postInfo.likesCounter);
  });
});

describe("testing Post APIs", () => {
  const postInfo = {
    body: "Hello post",
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
  let registerResult;
  let loginResult;

  it("able to create a post ", async () => {
    registerResult = await request(app).post("/users").send(newUserInfo);
    loginResult = await request(app).post("/users/login").send(userLogin);

    const token = loginResult.body.token;
    const thePost = await request(app)
      .post("/posts")
      .send(postInfo)
      .set("Authorization", `Bearer ${token}`);

    postId = thePost.body.message._id;

    expect(typeof thePost.body.message).toEqual(typeof postInfo);
    expect(thePost.statusCode).toBe(201);
    expect(thePost.body.message).toHaveProperty("_id");
  });

  it("able to get a post ", async () => {
    const token = loginResult.body.token;

    const thePost = await request(app)
      .get(`/posts/getpostbyid/${postId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(typeof thePost.body.post).toEqual(typeof postInfo);
    expect(thePost.statusCode).toBe(200);
    expect(thePost.body.post).toHaveProperty("_id");
    expect(thePost.body.post.body).toBe(postInfo.body);
  });

  it("able to get all posts", async () => {
    const thePosts = await request(app)
      .get(`/posts`)

    expect(typeof thePosts.body.posts[0]).toEqual(typeof postInfo);
    expect(thePosts.statusCode).toBe(200);
    expect(thePosts.body.posts[0]).toHaveProperty("_id");
    expect(thePosts.body.posts[0].body).toBe(postInfo.body);
  });

  it("able to update a post", async () => {
    const token = loginResult.body.token;

    const updatePostInfo = {
      body:'New body'
    }

    const thePost = await request(app)
      .put(`/posts/${postId}`)
      .send(updatePostInfo)
      .set("Authorization", `Bearer ${token}`);

    expect(typeof thePost.body.article).toEqual(typeof postInfo);
    expect(thePost.statusCode).toBe(202);
    expect(thePost.body.article).toHaveProperty("_id");
    expect(thePost.body.article.body).toBe(updatePostInfo.body);
  });
});