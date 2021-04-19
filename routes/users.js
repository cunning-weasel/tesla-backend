const express = require("express");
const router = express.Router();
// import lowdb
const lowdb = require("lowdb");
// import file interface
const FileSync = require('lowdb/adapters/FileSync');

// init mock db
const adapter = new FileSync("./data/db.json");
const db = lowdb(adapter);

// set defaults
db.defaults({ email: "weasel@weasels.com", password: "weasel" }).write();

// add user
db.get("email", "password").write();
console.log("pretending to user-state server-side");

// list all users
router.get("/", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(db.get("users").value());
});

// register new users - write new entry into the users
router.post("/register", (req, res) => {
  db.get("users").push(req.body).write();
  res.json(db.get("users").value());
});

// login user
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // get user from db
  const foundUser = db.get("users").find({email: email}).value();
  if (!foundUser) {
    res.json({ error: "User not found brethren!" });
  } else {
    // check passsword
    if (password === foundUser.password) {
      const loggedInUser = foundUser;
      delete loggedInUser.password;
      rs.json({ 
        status: "logged-in bruh", 
        user: loggedInUser 
      });
    } else {
      res.json({error: "Wrong password brethren!!!!"});
    }
  }
});

module.exports = router;
