// Fungsi untuk membaca isi dari form (soal no 6)
function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    return { name, city, email, zipCode, status };
}

// Fungsi untuk mengecek inputan zip-code harus berupa angka (soal no 7)
function isNumber(str) {
    return !isNaN(str);
}

// Fungsi untuk mengecek apakah checkbox sudah dicentang (soal no 8)
function checkboxIsChecked() {
    return document.getElementById('status').checked;
}

// Fungsi untuk melakukan validasi form data  (soal no 9)
function validateFormData(data) {
    if(data.name == '')
        return false;
    if(data.city == '')
        return false;
    if(data.email == '')
        return false;
    if(data.zipCode == '')
        return false;
    return (data !== null && isNumber(data.zipCode) && data.status === true);
}

// Fungsi untuk melakukan submit (soal no 10)
function submit(event) {
    event.preventDefault();
    const formData = handleGetFormData();
    const warningDiv = document.getElementById('warning');

    if (!validateFormData(formData)) {
        warningDiv.textContent = 'Periksa form anda sekali lagi!';
    } else {
        warningDiv.textContent = '';
    }
}

// Menggunakan fungsi addEventListener agar fungsi submit() dipanggil ketika tombol submit diklik
document.getElementById('form1').addEventListener('submit', submit);
