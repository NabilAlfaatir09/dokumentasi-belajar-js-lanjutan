// destructuring return value bentuk array
function perjumlahanPerkalian(a,b){
    return [a + b,a * b];
}

const [jumlah,kali] = perjumlahanPerkalian(2,3);
console.log(jumlah);
console.log(kali);

// destructuring bentuk object
function kalkulasi(a,b){
    return {
        tambah : a + b,
        kurang : a - b,
        kali1   : a * b,
        bagi   : a / b
    }
}
const {bagi,kali1,kurang,tambah} = kalkulasi(5,5);
console.log(tambah);

// destructuring function argumen

const mhs1 = {
    nama : 'nabil alfaatir',
    umur : 18,
    hobi : 'bermain basket',
    nilai : {
        tugas : 85,
        uts : 80,
        uas : 90
    }
}
function cetakMahasiswa({nama,umur,nilai :{tugas,uts,uas} }){
    return `halo nama saya ${nama}, umur saya adalah ${umur} tahun. dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMahasiswa(mhs1));