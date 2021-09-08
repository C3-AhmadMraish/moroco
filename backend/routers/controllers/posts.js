const Post=require("../../db/models/posts");

const createNewPost=(req,res)=>{
    const {body,img,user}=req.body;
    const newPost=new Post({
        body,
        img,
        user
    });

    newPost
    .save()
    .then(result=>res.status(201).json({success:true,message:result}))
    .catch((err)=>res.status(500).json({success:false,message:"Server Error"}));
}


module.exports=createNewPost;