const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
const userRouter = require("./routes/users");

app.use(cors());
// router in server
app.use("/users", userRouter);

// create starting page route
app.get("/", (req, res) => {
  res.send("a rather cunning API");
});

// start the server / wait for requests on port 8090
const port = process.env.PORT || process.argv[2] || 8090;
app.listen(port, () => console.log(`server started on port 🔥${port}🔥`));
