const Trend = require("../../db/models/trending");
const Post = require("../../db/models/posts");

const getTrends = (req, res) => {
  Trend.find({})
    .populate("post")
    .then((result) => {
      if (result.length < 3) {
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
  //Check if post exists in trends
  Trend.findOne({ _id: postId })
    .then(async (result) => {
      if (!result) {
        const trends = await Trend.find({});
        const post = await Post.findOne({ _id: postId });
        trends.forEach((trend) => {
          if (trend.likesCounter < post.likesCounter) {
            Trend.deleteOne({ _id: trend._id });

            const newTrend = new Trend({ post: postId });
            return newTrend.save();
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  // get post by id which is comming from req
  // loop over trends and compare each with post.likesCounter
  // if post.likesCounter > one of them >>> then replace them
};

module.exports = { getTrends, addNewAndDeleteOld };
