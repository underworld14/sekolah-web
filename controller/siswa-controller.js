const knex = require("../database/connection");

exports.siswaPage = async (req, res) => {
  const siswa = await knex("siswa")
    .join("jurusan", "siswa.jurusan_id", "=", "jurusan.id")
    .join("kelas", "siswa.kelas_id", "=", "kelas.id")
    .select("*", "siswa.name", "jurusan.name as jurusan", "kelas.name as kelas");

  return res.render("admin/siswa", { layout: "admin", siswa });
};

exports.addSiswaPage = (req, res) => {
  return res.render("admin/form", { layout: "admin" });
};

exports.addSiswa = async (req, res) => {
  await knex("siswa").insert(req.body);
  return res.redirect("/admin/siswa");
};
