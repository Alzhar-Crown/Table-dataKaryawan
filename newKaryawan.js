const daftarKaryawan = [
   
]


// Menentukan gaji
for (let i = 0; i < daftarKaryawan.length; i++) {
    if (daftarKaryawan[i].masaKerja < 6) {
        daftarKaryawan[i].status = "Karyawan Junior"
        daftarKaryawan[i].gaji = "4.000.000"
    } else {
        daftarKaryawan[i].status = "Karyawan Senior"
        daftarKaryawan[i].gaji = "7.000.000"
    }
}



// READ
const tampilkanKaryawan = () => {
    const tblKaryawan = document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML = '<tr><th>No</th><th>NIK</th><th>Nama</th><th>Masa Kerja</th><th>Status</th><th>Gaji</th><th scope="col">Edit</th><th scope="col">Hapus</th></tr>'

    for (let idx in daftarKaryawan) {
        console.log(`${parseInt(idx) + 1}. nama ${daftarKaryawan[idx].nama} nik ${daftarKaryawan[idx].nik} bekerja selama ${daftarKaryawan[idx].masaKerja} tahun, dengan gaji ${daftarKaryawan[idx].gaji} berstatus ${daftarKaryawan[idx].status}.`)

        tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKaryawan[idx].nik}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].masaKerja}</td><td>${daftarKaryawan[idx].status}</td><td>${daftarKaryawan[idx].gaji}</td><th><button type="button" class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></th><th><button type="button" class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}') + tampilkanKaryawan()">Delete</button></th></tr>`
    }
}


let mode = "tambah"

// CREATE
const tambahKaryawan = () => {
    const nik = document.getElementById("txtNik").value
    const nama = document.getElementById("txtNama").value
    const masaKerja = document.getElementById("txtMasa").value
    const status = ""
    const gaji = ""

   


    // jika tambah
    if (mode == "tambah") {

        function cek() {
            const karyawanBaru = {
                nik: nik,
                nama: nama,
                masaKerja: masaKerja,
                status: status,
                gaji: gaji
            }

            for (let i = 0; i < 5; i++) {
                if (karyawanBaru.masaKerja < 6) {
                    karyawanBaru.status = "Karyawan Junior"
                    karyawanBaru.gaji = "4.000.000"
                } else {
                    karyawanBaru.status = "Karyawan Senior"
                    karyawanBaru.gaji = "7.000.000"
                }
            }


            if (karyawanBaru.nik.length < 10) {
                alert("NIK harus 10 digit")
                return
            }
            else if (karyawanBaru.nik.length > 10) {
                alert("NIK harus 10 digit")
                return
            }


            for (let i = 0; i < daftarKaryawan.length; i++) {
                if (karyawanBaru.nik === daftarKaryawan[i].nik) {
                    alert("Data sudah ada")
                    return
                }

            }

            daftarKaryawan.push(karyawanBaru)
            alert("submit succes")
        }
        cek()









    } else {
        // jika edit
        const karyawanBaru = {
            nik: nik,
            nama: nama,
            masaKerja: masaKerja,
            status: status,
            gaji: gaji
        }

        for (let i = 0; i < 5; i++) {
            if (karyawanBaru.masaKerja < 6) {
                karyawanBaru.status = "Karyawan Junior"
                karyawanBaru.gaji = "4.000.000"
            } else {
                karyawanBaru.status = "Karyawan Senior"
                karyawanBaru.gaji = "7.000.000"
            }
        }



        if (karyawanBaru.nik.length < 10) {
            alert("NIK harus 10 digit")
            return
        }
        else if (karyawanBaru.nik.length > 10) {
            alert("NIK harus 10 digit")
            return
        }


        


       
        daftarKaryawan[mode] = karyawanBaru
    }



    document.getElementById("txtNik").value = ""
    document.getElementById("txtNama").value = ""
    document.getElementById("txtMasa").value = ""

    mode = "tambah"
}


// MENGHAPUS
const cariIndex = (nama) => {
    // tampilkan index jika nama karyawan === nama
    for (let i = 0; i < daftarKaryawan.length; i++) {
        if (daftarKaryawan[i].nama == nama) {
            // console.log(i)
            return i
        }
    }
}

const hapusKaryawan = (target) => {
    const indexDihapus = cariIndex(target)
    // menghapus element dari dalam array
    daftarKaryawan.splice(indexDihapus, 1)

    for (let i = 0; i < daftarKaryawan.length; i++) {
        if (daftarKaryawan.length < 1) {
            const tblKaryawan = document.getElementById('tblKaryawan')
            tblKaryawan.innerHTML = '<tr><th>No</th><th>NIK</th><th>Nama</th><th>Masa Kerja</th><th>Status</th><th>Gaji</th><th scope="col">Edit</th><th scope="col">Hapus</th></tr>'

        }
    }
}


// MENGGANTI
const editKaryawan = (target) => {
    const indexEdit = cariIndex(target)

    console.log(target)
    console.log(indexEdit)

    console.log(daftarKaryawan[indexEdit])

    

    document.getElementById("txtNik").value = daftarKaryawan[indexEdit].nik;
    document.getElementById("txtNama").value = daftarKaryawan[indexEdit].nama;
    document.getElementById("txtMasa").value = daftarKaryawan[indexEdit].masaKerja;
    
    

    mode = indexEdit

}

// MEMBATALKAN
const cancel = () => {
    mode = "tambah"
    alert("Masuk mode tambah")

}