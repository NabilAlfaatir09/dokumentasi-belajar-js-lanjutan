// Spread Operator
// memecah iterable menjadi single element
const orang = ['nabil', 'budi', 'tono'];
console.log(...orang[0]);

// menggabungkan 2 array
const mhs = ['yono', 'budi', 'tono'];
const guru = ['sri', 'yogi', 'asri'];
const gabung = [...mhs, ...guru];
console.log(gabung);

// mengcopy array
const ident = ['tri', 'byou', 'sarti'];
const ident1 = [...ident];
console.log(ident1);

// mengambil tag html menjadi sebuah array
const liNama = document.querySelectorAll('li');
const tampil = [...liNama].map((m) => m.textContent);
console.log(tampil);

// membuat animasi masing masing huruf
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
