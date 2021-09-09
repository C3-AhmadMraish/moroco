const User = require("../../db/models/user");

const register = (req, res) => {
    const { firstName, gender, email, password } = req.body;
    const user = new User({
      firstName,
      email,
      gender,
      password
    });
  
    console.log(gender);

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


}

const follwoUnfollwo=(req,res)=>{
  const _id = req.params.id;
  const curruntuser=req.body.user
 User.findById(_id).then(result=>
    {

      if(!result.followers.includes(curruntuser)){
        User.updateOne({_id:_id},{$push:{followers:curruntuser}}).exec();
        res.status(200).json("follow sccesfully")
      }else{
        User.updateOne({_id:_id},{$pull:{followers:curruntuser}}).exec();
        res.status(200).json("unfollow sccesfully")
    }
  }
    )

  

}


module.exports={getUserById,register,follwoUnfollwo};