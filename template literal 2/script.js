const identitas = {
    nama : 'nabil alfaatir',
    nim : 17220451,
    umur : 18,
    hobi : 'bermain basket',
    email : 'nabilalftrr@gmail.com',
};

const el = `<div class="mhs">
<h2>${identitas.nama}</h2>
<span class="nrp">${identitas.nim}</span>
</div>`;

document.body.innerHTML = el;

// contoh 2 menggunakan looping

const mhs = [
    {
        nama : 'nabil alfaatir',
        email : 'nabilalftrr@gmail.com'
    },
    {
        nama : 'budi danto',
        email : 'budi@gmail.com'
    },
    {
        nama : 'yanto yono',
        email : 'yantoyono@gmail.com'
    }
];

const tampil = `<div class="mhs">
    ${mhs.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
    </ul>`).join('')}
</div>`;

document.body.innerHTML = tampil;

// contoh 3 menggunakan pengkondisian

const lagu = {
    judul : 'melukis senja',
    penyanyi : 'budi doremi'
};

const tampil1 = `<div class="lagu">
<ul>
<li>${lagu.penyanyi}</li>
<li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
</ul>
</div>`;

document.body.innerHTML = tampil1;

// contoh 4 html fragment bersarang / nested
const mhsBaru = {
    nama : 'nabil alfaatir',
    semester : 1,
    mataKuliah : ['dasar pemograman',
                'pengantar teknologi dan informasi',
                'bahasa inggris',
                'logika dan algoritma']
};

function cetakMataKuliah(mataKuliah){
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const tampil2 = `<div class="mhs">
<h2 class="nama">${mhsBaru.nama}</h2>
<span class="semester">semester : ${mhsBaru.semester}</span>
<h4 class="mata">Mata Kuliah</h4>
${cetakMataKuliah(mhsBaru.mataKuliah)}
</div>`;

document.body.innerHTML = tampil2;