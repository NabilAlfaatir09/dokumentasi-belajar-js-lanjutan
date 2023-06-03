// cara membuat arrow function
const tampilNamaSaya = (nama,waktu) => {
    return `selamat ${waktu}, ${nama}`;
}
console.log(tampilNamaSaya('nabil','siang'));


// cara membuat implisit return 
const tampilNama = nama => `halo, ${nama}`;
console.log('nabil');

// contoh kasus arrow function
let mahasiswa = ['nabil','alfaatir','wenell'];
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);

// contoh kasus arrow function dengan objek
let orang = ['budi','anton','tono'];
let jumlahOrang = orang.map(nama =>({nama,jmlHuruf : nama.length}));
console.table(jumlahOrang);

// contoh constructor function
const Nama = function(){
    this.nama = 'nabil';
    this.umur = 18;
    this.sayHello = function(){
        console.log(`halo nama saya ${this.nama}, umur saya ${this.umur}`);
    }
}
const nabil = new Nama();

