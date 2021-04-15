const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const userRouter = require("./routes/users");

// route
app.use("/users", userRouter);




// start the server / wait for requests on port 8080
const port = process.env.PORT || process.argv[2] || 8080;
app.listen(port, () => console.log("🔥 server started on port " + port));

