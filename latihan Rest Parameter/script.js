// rest parameter
function myFunch(a,...values) {
    return values;
}
console.log(myFunch(1,2,3,4,5));

// menambahkan seluruh parameter menggunakan rest parameter
function jumlahkan(...angka){
    let jumlah = 0;
    for(a of angka){
        jumlah += a;
    }
    return jumlah;
}
console.log(jumlahkan(1,2,3,4,5));

// array destructuring menggunakan rest parameter
const kelompok1 = ['nabil','tono','budi','setiawan','yuri'];
const [ketua,wakil,...anggota] = kelompok1;
console.log(ketua);
console.log(wakil);
console.log(anggota);

// object destructuring menggunakan rest parameter
const team = {
    pm : 'nabil alfaatir',
    frontEnd1 : 'yono',
    frontEnd2 : 'toro',
    backEnd1 : 'sulis',
    backEnd2 : 'gilang',
    ux : 'elang',
    devOps : 'siti'
}
const {pm,...myTeam} = team;
console.log(pm);
console.log(myTeam);

// memfilter dengan menggunakan rest parameter
function filterBy(type,...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('number',1,2,'sois',10,'erik',false));