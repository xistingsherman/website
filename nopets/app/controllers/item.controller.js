const Item = require("../models/item.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Item
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    weight: req.body.weight,
    imageUrl: req.body.imageUrl
  });
  // Save Item in the database
  Item.create(item, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Item."
      });
    else res.send(data);
  });
};

// Retrieve all Items from the database (with condition).
exports.findAll = (req, res) => {
  Item.getAll( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    else res.send(data);
  });
};


// Find a single Item with a id
exports.findOne = (req, res) => {
  Item.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Item with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
// Update a Item identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Item.updateById(
    req.params.id,
    new Item(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Item with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Item with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};