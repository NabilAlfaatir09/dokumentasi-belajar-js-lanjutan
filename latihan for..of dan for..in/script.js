// for..of
// array
const mhs = ['nabil','budi','tono'];
for(const m of mhs){
    console.log(m);
}

// for..of menggunakan destruction
const mhs1 = ['anton','dewi','yogi'];
for(const [i,m] of mhs1.entries()){
    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// string
const nama = 'yono'
for(const n of nama){
    console.log(n);
}

// nodelist
const liNama = document.querySelectorAll('.nama');
for( n of liNama){
    console.log(n.innerHTML);
}

// arguments

function jumlahkanAngka(){
    let jumlah = 0;
    for(a of arguments){
        jumlah += a;
    }
    return jumlah;
}
console.log(jumlahkanAngka(1,2,3,4,5));

// for..in khusus untuk object
const mhs2 = {
    nama : 'susi',
    umur : 500,
    email : 'susi@gmail.com'
}
for( m in mhs2){
    console.log(mhs2[m]);
}