const sql = require("./db.js");


// constructor
const Currency = function(Currency) {
  this.userId = Currency.userId;
  this.currency = Currency.currency;
};
Currency.create = (newCurrency, result) => {
  sql.query("INSERT INTO user_currency SET ?", newCurrency, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Item: ", { ...newCurrency });
    result(null, { ...newCurrency });
  });
};

Currency.findById = (id, result) => {
  sql.query(`SELECT * FROM user_currency WHERE userId = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Currency: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Currency with the id
    result({ kind: "not_found" }, null);
  });
};


Currency.getAll = (result) => {
  let query = "SELECT * FROM user_currency";

  sql.query(query, (err, res) => {
      console.log("check if this is working");
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Currencys: ", res);
    result(null, res);
  });
}

Currency.updateById = (id, Currency, result) => {
  sql.query(
    "UPDATE user_currency SET currency = ? WHERE userId = ?",
    [Currency.currency, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Currency with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated Currency: ", { id: id, ...Currency });
      result(null, { id: id, ...Currency });
    }
  );
};

module.exports = Currency;
