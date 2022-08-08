const knex = require("../database/connection");
const { getPagination, getPagingData } = require("../utils/pagination");

exports.siswaPage = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const { offset } = getPagination(page, limit);

  const totalQuery = await knex("siswa").count("id", { as: "totalSiswa" });
  const totalSiswa = totalQuery[0].totalSiswa;

  const siswa = await knex("siswa")
    .join("jurusan", "siswa.jurusan_id", "=", "jurusan.id")
    .join("kelas", "siswa.kelas_id", "=", "kelas.id")
    .select("*", "siswa.name", "jurusan.name as jurusan", "kelas.name as kelas")
    .limit(limit)
    .offset(offset);

  const pagingData = getPagingData(totalSiswa, page, limit);
  console.log(pagingData);
  return res.render("admin/siswa", { layout: "admin", siswa, pagination: pagingData });
};

exports.addSiswaPage = (req, res) => {
  return res.render("admin/form", { layout: "admin" });
};

exports.addSiswa = async (req, res) => {
  await knex("siswa").insert(req.body);
  return res.redirect("/admin/siswa");
};
