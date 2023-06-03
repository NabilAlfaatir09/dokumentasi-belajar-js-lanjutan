// Callback
//contoh synchronous callback
// function halo(nama){
//     alert(`halo, ${nama}`);
// }
function tampilkanPesan(callback){
    const nama = prompt('masukkan nama anda :');
    callback(nama);
}
tampilkanPesan(nama => alert(`halo ${nama}`));

// contoh ke 2
const mhs = [
    {
        'nama' : 'nabil alfaatir',
        'nim' : '17220451',
        'hobi':'bermain basket',
        'email' : 'nabil@gmail.com',
        'id murid' : 1
    },
    {
        'nama' : 'yogi',
        'nim' : '17220452',
        'hobi':'bermain bola',
        'email' : 'yogi@gmail.com',
        'id murid' : 2
    },
    {
        'nama' : 'budi',
        'nim' : '17220453',
        'hobi':'bermain air',
        'email' : 'budi@gmail.com',
        'id murid' : 3
    }
];
console.log('mulai');
mhs.forEach(m => {
    for(let i = 0; i < 10000000; i++){
        let date = new Date();
    }
    console.log(m.nama);
});
console.log('selesai');

// asynchronous callback
function getDataNama(url, success, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.response);
            } else if(xhr.status === 404){
                error();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}

console.log('mulai');
getDataNama('mahasiswa.json', results => {
    const nama = JSON.parse(results);
    nama.forEach(n => console.log(n.nama));
}, () => {

});
console.log('selesai');


// Jquery
console.log('mulai');
$.ajax({
    url : 'mahasiswa.json',
    success : (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error : () => {

    }
});
console.log('selesai');