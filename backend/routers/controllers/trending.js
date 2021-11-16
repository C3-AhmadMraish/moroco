const Trend = require("../../db/models/trending");
const Post = require("../../db/models/posts");
const { deleteOne } = require("../../db/models/trending");

const getTrends = (req, res) => {
  Trend.find({})
    .populate("post")
    .then( async(result) => {
      if (result.length < 3) {
        await Trend.remove({})
        const trends = [];
        Post.find({})
          .sort({ likesCounter: -1 })
          .limit(3)
          .then((resultP) => {
            trends.push(resultP[0]);
            trends.push(resultP[1]);
            trends.push(resultP[2]);

            const newtrend1 = new Trend({
              post: resultP[0]._id,
              likesCounter: resultP[0].likesCounter,
            });
            const newtrend2 = new Trend({
              post: resultP[1]._id,
              likesCounter: resultP[1].likesCounter,
            });
            const newtrend3 = new Trend({
              post: resultP[2]._id,
              likesCounter: resultP[2].likesCounter,
            });

            newtrend1.save();
            newtrend2.save();
            newtrend3.save();

            return res.status(201).json({
              success: true,
              message: `Trending posts.`,
              trends: trends,
            });
          })
          .catch((err) => {
            console.log("err" + err);
          });
      }

      return res.status(200).json({
        success: true,
        message: `Trending posts.`,
        trends: result,
      });
    });
};

const addNewAndDeleteOld = (req, res) => {
  const postId = req.params.id;
  let isChanged = false;
  //Check if post exists in trends
  Trend.findOne({ post: postId })
    .populate("post")
    .then(async (result) => {

      if (!result) {

        const trends = await Trend.find({}).populate("post");
        const post = await Post.findOne({ _id: postId });

        trends.forEach(async (trend) => {

          if (trend.post.likesCounter < post.likesCounter) {
            const _id = await trend.post._id;
            Trend.findByIdAndDelete(trend._id).then((result) => {
              console.log("delete" + result);
            });

            const newTrend = await new Trend({ post: postId });
            
            newTrend.save();
          }
          isChanged=true;
          
        });
        
      }
      return res.status(200).json({
        success: true,
        changedTrend: isChanged,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: `Eroor`,
      });
    });
  // get post by id which is comming from req
  // loop over trends and compare each with post.likesCounter
  // if post.likesCounter > one of them >>> then replace them
};

const shoshoDelete = (req, res) => {
  console.log("we entered shosho");
  // we enetered here
  const _id = req.params.id;
  console.log("shoshoDelete", _id);
  Trend.findOne({post:_id})
    .then((result) => {
      console.log("bashar",result)
      if (result) {
        console.log("beforedeleteone",result)
        Trend.deleteOne({ post: _id }).then((result) => {
          // re-call getTrends   to replace deleted post
          if (result){
            console.log("after deleteone result", result)
            getTrends()
          }
         ; //headers problem
        });
      }
    })
    // .catch
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getTrends, addNewAndDeleteOld, shoshoDelete };
