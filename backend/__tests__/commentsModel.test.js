const mongoose = require("mongoose");
// const app = require("./main");
const request = require("supertest");
mongoose.connect("mongodb://localhost:27017/moroco");
const Comment = require("../db/models/comments");


//   afterEach(async () => {

//   });
  afterAll(async () => {
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