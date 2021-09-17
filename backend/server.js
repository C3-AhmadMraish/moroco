const express = require("express");
const cors = require("cors");
const db = require("./db/db");

//routers
const postsRouter = require("./routers/routes/posts");
const usersRouter = require("./routers/routes/users");
const trendsRouter = require("./routers/routes/trending");
//  const authRouter = require("./routers/routes/auth/login");


const app = express();

//built-in middleware
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use("/posts", postsRouter);
app.use("/users", usersRouter);
app.use("/trends", trendsRouter);
// app.use(authRouter);

// //Page not found 404 handler
 app.use("*", (req, res) => res.status(404).json("NO content at this path"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
