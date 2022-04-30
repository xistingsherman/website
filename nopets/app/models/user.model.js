const sql = require("./db.js");


// constructor
const User = function(User) {
  this.username = User.username;
  this.password = User.password;
  this.salt = User.salt;
  this.firstName = User.firstName;
  this.gender = User.gender;
  this.birthdate = User.birthdate;
  this.country = User.country;
  this.state = User.state;
};
User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created User: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (id, result) => {
  sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found User: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};

User.findByUsername = (username, result) => {
  sql.query(`SELECT * FROM users WHERE username = ${username}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found User: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};


User.getAll = (result) => {
  let query = "SELECT * FROM users";

  sql.query(query, (err, res) => {
      console.log("check if this is working");
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Users: ", res);
    result(null, res);
  });
}

User.updateById = (id, User, result) => {
  sql.query(
    "UPDATE users SET username = ?, password = ?, birthdate = ? WHERE id = ?",
    [User.username, User.password, User.birthdate, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated User: ", { id: id, ...User });
      result(null, { id: id, ...User });
    }
  );
};

module.exports = User;
