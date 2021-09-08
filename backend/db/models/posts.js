const mongoose = require('mongoose');


const postSchema= mongoose.Schema({
    User:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    Body:{type:String},
    date:{type:date},
    img:{type:String},
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    likesCounter:{type:Number},
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:"Comment"}],
    commentsCounter:{type:Number},

});


module.exports=mongoose.model("Post",postSchema);