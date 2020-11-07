const { response } = require("express");
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burgerName"], 
    [req.body.burgerName], function (result) {
        res.redirect("/");  
    });
});

router.put("/api/burgers/:id", function (req, res) {
   
    var devoured = (req.body.devoured == 0) ?  1 : 0;

    console.log(req.body.devoured); 
    console.log(devoured); 
    
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: devoured
    }, condition, function (result) {
      res.end();
    });
    
});

// router.delete("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     burger.deleteOne(condition, function (result) {

    
//     });
// });

module.exports = router;
