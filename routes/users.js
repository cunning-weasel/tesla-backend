const express = require("express");
const router = express.Router();
// import lowdb
const lowdb = require("lowdb");
// import file interface
const FileSync = require("lowdb/adapters/FileSync");
// init mock db
const adapter = new FileSync("./data/db.json");
const db = lowdb(adapter);

// import controllers
const { login, register } = require("../controllers/users");

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

// login user
router.post("/login", login);

// register new users - write new entry into the users
router.post("/register", register);

module.exports = router;
