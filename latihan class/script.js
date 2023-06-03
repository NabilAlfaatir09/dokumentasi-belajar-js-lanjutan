class Mahasiswa{
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi){
        this.energi += porsi;
        return `halo ${this.nama}, selamat makan!`;
    }
    main(jam){
        this.energi -= jam;
        return `halo ${this.nama}, selamat bermain!`;
    }
    tidur(jam){
        this.energi += jam * 2;
        return `halo ${this.nama}, selamat tidur!`;
    }
}

let nabil = new Mahasiswa('nabil',10);