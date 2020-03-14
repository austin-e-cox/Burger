const express = require("express");
// import the burger model to use its database functions.
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
// controller that executes functions in burger.js on through to the database
//   and gets data back to potentially post to the page
router.get("/", function(req, res) {
    burger.all(
      function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
      }
    );
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create(req.body.name,
      function(result) {
        // Send back the id of the new burger
        console.log(`burger created with name ${req.body.name}`);
        res.json({ id: result.insertId });
      }
    );
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id=" + req.params.id;
    console.log("condition:", condition);
  
    burger.update({devoured: 1}, condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, the burger with that id does not exist, so return 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  

module.exports = router;

