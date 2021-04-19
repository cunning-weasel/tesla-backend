// Login controller 
exports.login = (req, res) => {
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
};

// register controller
exports.register = (req, res) => {
  db.get("users").push(req.body).write();
  res.json(db.get("users").value());
};

