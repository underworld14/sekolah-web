const knex = require("../connection");
const { faker } = require("@faker-js/faker");

const siswa = Array.from(Array(100).keys()).map((index) => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    birth_place: faker.address.city(),
    birth_date: faker.date.birthdate(),
    address: faker.address.streetAddress(),
    jurusan_id: faker.helpers.arrayElement([1, 2]),
    kelas_id: faker.helpers.arrayElement([3, 4, 5, 6]),
  };
});

knex("siswa")
  .insert(siswa)
  .then(() => console.log("Sukses memasukkan ke database"));

process.exit();
