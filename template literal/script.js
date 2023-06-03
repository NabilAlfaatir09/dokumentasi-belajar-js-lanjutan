// 1. template literals / template string
const nama = 'nabil alfaatir';
const umur = 18
console.log(`halo nama saya ${nama}, umur saya adalah ${umur} tahun.`);

// multi-string
console.log(`ini baris pertama
ini baris kedua`);

// embedded expresion
const x = 10
console.log(`${(10 % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML fragment
const identitas = {
    nama : 'nabil alfaatir',
    nim : 17220451,
    umur : 18,
    hobi : 'bermain basket',
    email : 'nabilalftrr@gmail.com',
};

const el = `<div class="mhs">
<h2>${identitas.nama}</h2>
<span class="nrp">${identitas.nim}</span>
</div>`;

console.log(el);