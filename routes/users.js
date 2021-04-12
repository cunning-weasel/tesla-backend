const express = require("express");
const router = express.Router();

// users 
const users = [
    {
        name: "weasel",
        password: "cunning",
        id: 0
    },
    {
        name: "root",
        lastName: "toor",
        id: 1
    }
];

// add users routing below
router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(users);    
});

router.post("/", (req, res) => {
    // console.log(req.body);
    const user = { name: req.body.name, lastName: req.body.lastName, id: users.length }
    users.push(user);
    res.redirect("/users");
});

router.get("/:id", (req, res) => {
    const findUser = users.find(user => user.id === req.params.id);
    if (findUser === null) {
        res.send("can't find user guv'nor");
    } else {
        res.json(findUser);
    }
});

module.exports = router;
