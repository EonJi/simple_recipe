var express = require("express");
var router  = express.Router();
var app = express();

// Home
router.get("/", function(req, res){
  res.render("home/welcome");
});

router.get("/about", function(req, res){
  res.render("home/about");
});


router.get("/recipe", function(req, res){
  res.render("home/recipe");
});

router.get("/duck", function(req, res){
  res.render("html/duck");
});

router.get("/dack", function(req, res){
  res.render("html/dack");
});

router.get("/denjang", function(req, res){
  res.render("html/denjang");
});

router.get("/gan", function(req, res){
  res.render("html/gan");
});

router.get("/jae", function(req, res){
  res.render("html/jae");
});

router.get("/kimbob", function(req, res){
  res.render("html/kimbob");
});

router.get("/kimchi", function(req, res){
  res.render("html/kimchi");
});

router.get("/kimgook", function(req, res){
  res.render("html/kimgook");
});

router.get("/kong", function(req, res){
  res.render("html/kong");
});

router.get("/mi", function(req, res){
  res.render("html/mi");
});

router.get("/ramen", function(req, res){
  res.render("html/ramen");
});

router.get("/youboo", function(req, res){
  res.render("html/youboo");
});


module.exports = router;
