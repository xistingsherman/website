module.exports = app => {
    
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();
    // Create a new User
    router.post("/", users.create);
    // Retrieve all Users
    router.get("/", users.findAll);
    // Retrieve a single User with id
    router.get("/:id", users.findOne);
    // Update a User with id
    router.put("/:id", users.update);
    
    app.use('/api/users', router);
}