var express = require("express");
var router = express.Router();
const siswaController = require("../controller/siswa-controller");

router.get("/", function (req, res, next) {
  res.render("landing", { layout: "landing" });
});

router.get("/admin", function (req, res, next) {
  res.render("admin", { layout: "admin" });
});

router.get("/admin/siswa", siswaController.siswaPage);
router.get("/admin/form", siswaController.addSiswaPage);

module.exports = router;
