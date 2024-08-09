// looping ada dua jenis yaitu "while" dan "for"

// contoh untuk yg "i++" akan bertambah
// let a = 0;

// while (a < 5) {
//     console.log(a)
//     a++
// }
// hasil 0 1 2 3 4

// let b = 5;

// while (b >= 0) {
//     console.log(b)
//     b--
// }
// // hasil 5 4 3 2 1 0

// for (let c = 0; c < 5; c++) {
//     console.log(c)
// }
// // hasil 0 1 2 3 4

// method length untuk type data string dan array
// method length digunakan untuk memberikan nilai angka dari total huruf yang ada pada string atau total element pada array
// indexing yang ada pada type data string dan array SUDAH PASTI berawal dari 0;
// contoh b=0, r=1, y=2, a=3, n=4;

// let name = "bryan";

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i])
// }
// // hasil b r y a n

// console.log(name[0] + name[3] + name[4])
// // hasil ban

// perintah untuk membalikan sebuah string

// let name = "argus";

// for (let i = name.length -1; i >= 0; i--) {
//     console.log(name[i])
// }   
// // hasil s u g r a 

// let name = "argus";
// let result = "";

// for (let i = name.length -1; i >= 0; i--) {
//     result += name[i];
// }
// console.log(result)
// // hasil sugra

// nested loop

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(j)
//     }
//     console.log('')
// }
// console.log('End')

let name1 = "bagus";

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < name1.length; j++) {
        console.log(name1[j])
    }
    console.log('')
}
console.log('End')