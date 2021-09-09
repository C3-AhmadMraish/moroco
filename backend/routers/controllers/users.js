const User = require("../../db/models/user");

const register = (req, res) => {
  const { firstName, email,gender, password } = req.body;
  const user = new User({
    firstName,
    email,
    password,
    gender
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `User Created Successfully`,
        User: result,
      });
    })
    .catch((err) => {
      if (err.keyPattern) {
        // <---- what is this ?
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  User.findById({_id:id})
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `the user with id =>${id}`,
        posts: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err,
      });
    });
};

const follwoUnfollwo = (req, res) => {
  const _id = req.params.id;
  const curruntuser = req.body.user;
  User.findById(_id).then((result) => {
    if (!result.followers.includes(curruntuser)) {
      User.updateOne(
        { _id: _id },
        { $push: { followers: curruntuser } }
      ).exec();
      res.status(200).json("follow sccesfully");
    } else {
      User.updateOne(
        { _id: _id },
        { $pull: { followers: curruntuser } }
      ).exec();
      res.status(200).json("unfollow sccesfully");
    }
  });
};

module.exports = { getUserById, register, follwoUnfollwo };
