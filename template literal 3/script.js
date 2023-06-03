// tagged template
const nama = 'Nabil alfaatir';
const umur = 18;

function coba(strings,...values){
    let result = '';
    strings.forEach((str,i) => {
        result += `${str}${values[i] || ''}`;
    });
    return result;
}
const str = coba`halo nama saya ${nama}, umur saya ${umur} tahun.`;
console.log(str);

// contoh 2 menggunakan high order function
const nama1 = 'budi yono';
const umur1 = 18;

function coba1(strings,...values){
    return strings.reduce((result,str1,i) => `${result}${str1}${values[i] || ''}`, '');
}
const str1 = coba1`halo nama saya ${nama1}, umur saya ${umur1} tahun.`;
console.log(str1);