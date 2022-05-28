// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const monicaFavResto = new Set();
const monicaFood = [
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sushi",
];

for (let i = 0; i < monicaFood.length; i++) {
  monicaFavResto.add(monicaFood[i]);
}

const wendyFavResto = new Set();
const wendyFood = [
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
];

for (let i = 0; i < wendyFood.length; i++) {
  wendyFavResto.add(wendyFood[i]);
}

const education = new Map();

education.set("Monica", [
  {
    name: "SD 01",
    city: "Jakarta",
    graduate: 2016,
  },
  {
    name: "SMP 02",
    city: "Jakarta",
    graduate: 2019,
  },
  {
    name: "SMA 03",
    city: "Tangerang",
  },
]);

education.set("Wendy", [
  {
    name: "SD 01",
    city: "Jakarta",
    graduate: 2010,
  },
  {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013,
  },
  {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016,
  },
  {
    name: "Universitas Maju",
    city: "Tangerang",
  },
]);

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong@gmail.com",
  favoriteColor: ["Yellow", "Pink", "White", "Purple"],
  isHavePet: true,
  education: education.get("Monica"),
  favoriteRestaurant: Array.from(monicaFavResto),
};
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong@gmail.com",
  favoriteColor: ["Blue", "Black", "Grey"],
  isHavePet: false,
  education: education.get("Wendy"),
  favoriteRestaurant: Array.from(wendyFavResto),
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
