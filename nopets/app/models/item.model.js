const sql = require("./db.js");


// constructor
const Item = function(Item) {
  this.id = Item.id;
  this.name = Item.name;
  this.description = Item.description;
  this.weight = Item.weight;
  this.imageUrl = Item.imageUrl;
};
Item.create = (newItem, result) => {
  sql.query("INSERT INTO items SET ?", newItem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Item: ", { name: res.insertId, ...newItem });
    result(null, { id: res.insertId, ...newItem });
  });
};

Item.findById = (id, result) => {
  sql.query(`SELECT * FROM items WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Item: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Item with the id
    result({ kind: "not_found" }, null);
  });
};


Item.getAll = (result) => {
  let query = "SELECT * FROM items";

  sql.query(query, (err, res) => {
      console.log("check if this is working");
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Items: ", res);
    result(null, res);
  });
}

Item.updateById = (id, Item, result) => {
  sql.query(
    "UPDATE items SET name = ?, description = ?, weight = ?, imageUrl = ? WHERE id = ?",
    [Item.name, Item.description, Item.weight, Item.imageUrl, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Item with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated Item: ", { id: id, ...Item });
      result(null, { id: id, ...Item });
    }
  );
};
module.exports = Item;
