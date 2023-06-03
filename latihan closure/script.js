function init(){
    let nama = "nabil";
    function tampilNama(){
        console.log(nama);
    }
    tampilNama();
}
init();


// ini adalah function factories
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`halo ${nama}, selamat ${waktu}, semoga hari mu senin terus!`);
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('nabil');
selamatSiang('alfaatir');
selamatMalam('wenell');