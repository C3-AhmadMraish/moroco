const User = require("../../db/models/user");

const register = (req, res) => {
    const { firstName, gender, email, password } = req.body;
    const user = new User({
      firstName,
      email,
      gender,
      password
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
        if (err.keyPattern) {             // <---- what is this ?
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

const checkIsFollower = (req, res) => {
const _idU = req.params.id
const _idF = req.params.id
User.findById(_idU ).then ((result) => {
  if(result.folowers.includes(_idF)){
    res.status(200).json(`User of id: ${_idF} is following User of id: ${_idU}`);
  }
  res.status(200).json(`User of id: ${_idF} is NOT FOLLOWING User of id: ${_idU}`);
})

}


module.exports = { getUserById, register, follwoUnfollwo,checkIsFollower };

/*findonebyid (_id) (req,res)

--> res.folowers --> look inside the array
if(found){
return "follower", found
}
return " Not follower " */