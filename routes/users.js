const express = require("express");
const router = express.Router();

// users
const users = [
  {
    email: "weasel@weasel.com",
    password: "cunning",
    id: 0,
  },
  {
    email: "root@root.com",
    lastName: "toor",
    id: 1,
  },
];

//  users routing
router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(users);
});

router.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  // find user
  const foundUser = users.find((user) => user.email === email);
  if (!foundUser) {
    res.json({ error: "User not found" });
  } else {
    // check passsword
    if (password === foundUser.password) {
      rs.json({ status: "logged-in bruh", user: foundUser });
    } else {
      res.json({ error: "Wrong password" });
    }
  }
});

module.exports = router;
