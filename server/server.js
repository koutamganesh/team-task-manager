// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));

// app.use(express.json());

// // TEST ROUTE (KEEP TOP)
// app.get("/test", (req, res) => {
//   res.send("Server is working");
// });

// // DB CONNECT
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("DB Connected"))
//   .catch(err => console.log(err));

// // ROUTES
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/projects", require("./routes/projectRoutes"));
// app.use("/api/tasks", require("./routes/taskRoutes"));

// // START SERVER
// app.listen(8000, () => {
//   console.log("Server running on 8000");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// TEST
app.get("/test", (req, res) => {
  res.send("Server is working");
});

// ROUTES
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

app.listen(process.env.PORT, () =>
  console.log("Server running on", process.env.PORT)
);