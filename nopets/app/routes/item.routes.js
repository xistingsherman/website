module.exports = app => {
    
    const items = require("../controllers/item.controller.js");


    var router = require("express").Router();
    // Create a new User
    router.post("/", items.create);
    // Retrieve all Users
    router.get("/", items.findAll);
    // Retrieve a single User with id
    router.get("/:id", items.findOne);
    // Update a User with id
    router.put("/:id", items.update);

    app.use('/api/items', router);
}