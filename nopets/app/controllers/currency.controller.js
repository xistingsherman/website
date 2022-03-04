const Currency = require("../models/currency.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Currency
  const currency = new Currency({
    id: req.body.id,
    currency: req.body.currency,
  });
  // Save Currency in the database
  Currency.create(currency, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Currency."
      });
    else res.send(data);
  });
};

// Retrieve all Users from the database (with condition).
exports.findAll = (req, res) => {
  Currency.getAll( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving currencies."
      });
    else res.send(data);
  });
};


// Find a single Currency with a id
exports.findOne = (req, res) => {
  Currency.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Currency with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Currency with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
// Update a Currency identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Currency.updateById(
    req.params.id,
    new Currency(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Currency with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Currency with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};