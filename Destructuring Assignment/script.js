// Destructuring Assignment / variabel

// Destructuring array
const mhs = ['nabil','alfaatir','budi','yono','yanto'];

const [nama,kedua,ketiga,keempat] = mhs;
console.log(nama);
console.log(kedua);
console.log(ketiga);
console.log(keempat);

// swipping item
let a = 1;
let b = 2;
[a,b] = [b,a]
console.log(a);
console.log(b);

// return value pada function
function coba(){
    return [10,20];
}
const [c,d] = coba();
console.log(c);

// rest parameter
const [e,...values] = [20,30,40,50,60,70];
console.log(e);
console.log(values[1]);

// Destructuring object
const identitas = {
    panggilan : 'nabil alfaatir',
    umur : 18
}
const {panggilan,umur} = identitas;
console.log(panggilan);
console.log(umur);

// assignment tanpa deklarasi object
({panggilan1,umur1} = {panggilan1 : 'alfaatir',umur1 : 18});
console.log(panggilan1);
console.log(umur1);


// assignment ke variabel baru
const identitas2 = {
    panggilan : 'yanto aja',
    umur : 18
}
const {panggilan:p, umur:u} = identitas2;
console.log(p);
console.log(u);

// memberikan nilai default
const identitas3 = {
    panggilan3 : 'yanto',
    umur3 : 18
}
const {panggilan3, umur3, email = 'nabilalftr@gmail.com'} = identitas3;
console.log(email);

// mengambil field pada object, setelah dikirim parameter sebagai function
const identitas4 = {
    id : 123,
    panggilan4 : 'dodo',
    umur4 : 18
}

function getIdMhs(identitas4){
    return identitas4.id;
}
console.log(getIdMhs(identitas4));