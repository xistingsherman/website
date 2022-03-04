module.exports = app => {
    
    const currencies = require("../controllers/currency.controller.js");

    var router = require("express").Router();
    // Create a new User
    router.post("/", currencies.create);
    // Retrieve all Users
    router.get("/", currencies.findAll);
    // Retrieve a single User with id
    router.get("/:id", currencies.findOne);
    // Update a User with id
    router.put("/:id", currencies.update);

    app.use('/api/currencies', router);
}