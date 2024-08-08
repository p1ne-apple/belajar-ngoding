// cara membuat variabel
// var = jadul, let = dapat dirubah, const = nilainya tetap tidak dapan dirubah

var a = 'a'; 
let b = 'b'; 
const c = 'c'; 

// variabel bisa menampung type data string(text), integer(number), boolean, array dan object

let nama = 'bambang'; // string
let umur = 28; // int
let apakahBenarLaki = true; // boolean
let tinggiBadan = 163.5; // decimal

// operator aritmatika

let angka1 = 10;
let angka2 = 20;

console.log(angka1 + angka2, 'tambah'); // 30
console.log(angka1 - angka2, 'kurang'); // -10
console.log(angka1 / angka2, 'bagi'); // 0.5
console.log(angka1 * angka2, 'kali'); // 200
console.log(angka1 % angka2, 'hasil bagi'); // 10

// disini kita belajar mengisi variabel

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); 

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika);

// string juga bisa di tambah tapi tidak bisa di kurang
let firstname = 'Feri';
let lastname = 'Setiawan';
let fullname = firstname + lastname;
console.log(fullname);
console.log(firstname + ' ' + lastname);

// alur pembacaan code
// untuk membaca code harus di baca dari kiri ke kanan, dan atas ke bawah
// contoh

let number1 = 20;
console.log(number1 + 10); // 30
number1 = 10;
console.log(number1 + 10); // 20
number1 = false;
console.log(number1 + 10); // 10, false bernilai 0 dan true bernilai 1
console.log(true + 10); // 11

