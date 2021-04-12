const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const userRouter = require("./routes/users");

// add routers
app.use("/users", userRouter);

// route definition
// app.get("/", (req, res) => {
//     res.send(`
//         <form action="/users" method="post">
//             <label>First Name :</label>
//             <input type="text" name="name" /><br />
//             <label>Last Name :</label>
//             <input type="text" name="lastName" /><br /><br />
//             <input type="submit" value="Submit" />
//         </form>
//     `);
// });

// app.get("/search", (req, res) => {
//     res.json({result: `Are you looking for ${req.body.name}?`})
// });

// start the server / wait for requests on port 8080
const port = process.env.PORT || process.argv[2] || 8080;
app.listen(port, () => console.log("server started on port " + port));

