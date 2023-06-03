const angka = [10,8,9,6,7,4,5,3,1,2];

// filter mencari angka dengan menggunakan arrow function >=3
const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);

// perbandingan filter vs for
const newAngkaBaru = [];
for (let i = 0; i < angka.length; i++){
    if(angka[i] >= 3){
        newAngkaBaru.push(angka[i]);
    }
}
console.log(newAngkaBaru);

// map
const angkaBaru = angka.map(a => a * 2);
console.log(angkaBaru);

// reduce
const angkaLama = angka.reduce((accumulator,currentValue) => accumulator + currentValue, 10);
console.log(angkaLama);

// methode chaining
const hasil = angka.filter(a => a >= 5)
            .map(a => a * 3)
            .reduce((acc,cur) => acc + cur,0);
console.log(hasil);
