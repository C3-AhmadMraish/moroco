const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      console.log("1",err)
      return res.status(403).json({
        success: false,
        message: `Forbidden`,
      });
    }
    const token = req.headers.authorization.split(" ").pop();

    jwt.verify(token, process.env.SECRET, (err, result) => {

      // console.log(result)
      if (err) {
        console.log("2",err)
        res.status(403).json({
          success: false,
          message: `The token is invalid or expired`,
          err: err,
        });
      } else {
        req.token = result;
        next();
      }
    });
  } catch (err) {
    console.log(err,"3")
    res.status(500).json({
      success: false,
      message: `Server Error`,
      // err: err,
    });
  }
};

module.exports = authentication;