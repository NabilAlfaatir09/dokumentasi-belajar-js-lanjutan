// promise 
// contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if(ditepati){
        resolve('janji di tepati');
    }
    else{
        reject('ingkar janji');
    }
});
janji1
    .finally(() => console.log('selesai menunggu!'))
    .then(response => console.log('OK :' + response))
    .catch(response => console.log('NOT OK :' + response));

// contoh 2
let ditepati1 = true;
const janji2 = new Promise((resolve,reject) =>{
    if(ditepati1){
        setTimeout(() =>{
            resolve('janji di tepati setelah beberapa waktu');
        },2000);
    }
    else{
        setTimeout(() =>{
            reject('janji tidak di tepati setelah beberapa waktu');
        },2000);
    }
});
console.log('mulai');
console.log(janji2.then(() => console.log(janji2)));
console.log('selesai');

// promise.all

const film = new Promise(resolve => {
    setTimeout(() =>{
        resolve([{
            judul : 'avengers',
            sutradara : 'budi',
            actor : 'tono'
        }]);
    },1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() =>{
        resolve([{
            kota : 'jakarta',
            temp : 26,
            keterangan : 'cerah berawan'
        }]);
    },500);
});
Promise.all([film,cuaca])
    .then(response => console.log(response));