function cekform() {
    nama = document.getElementById; ("nama");
    alamat = document.getElementById; ("alamat");
    password = document.getElementById; ("password");

    if (nama.value == ' ') {
        alert('nama belum diisi..!');
        nama.focus();
        return false;
    } else if (nama.value.length <= 3) {
        alert('nama minimal 3 karakter');
        nama.focus();
        return false;
    } else if (nama.value.length <=''){
        alert('alamat minimal 3 karakter');
        nama.focus();
        return false;
    } else if (nama.value.length <= 2) 
        alert('nama minimal 3 karakter');
        nama.focus();
        return false;
    }
}