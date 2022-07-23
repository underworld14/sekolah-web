var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("landing", { layout: "landing/layout" });
});

router.get("/admin", function (req, res, next) {
  res.render("admin", { layout: "admin/layout" });
});

router.get("/admin/siswa", function (req, res, next) {
  res.render("admin/siswa", { layout: "admin/layout" });
});

router.get("/admin/form", function (req, res, next) {
  res.render("admin/form", { layout: "admin/layout" });
});

module.exports = router;
