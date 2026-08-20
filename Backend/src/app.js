// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   }),
// );

// // reqiure all the routes here
// const authRouter = require("./routes/auth.routes");
// const interviewRouter = require("./routes/interview.routes");

// // using all the routes heres

// // app.use.apply("/api/auth", authRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/interview", interviewRouter);

// module.exports = app;

// Claude Code
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// reqiure all the routes here
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

// using all the routes heres

// app.use.apply("/api/auth", authRouter);
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

// TEMP DEBUG: catches errors thrown in async route handlers
// (without this, Express 4 silently hangs/crashes on rejected promises
// unless every controller has its own try/catch)
app.use((err, req, res, next) => {
  console.error("🔴 ERROR:", err); // full stack trace in your terminal
  res.status(500).json({
    message: err.message,
  });
});

module.exports = app;
