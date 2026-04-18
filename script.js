// GANTI EMAIL INI JADI EMAIL KAMU
const emailTujuan = "juandirahelia@gmail.com"; 

function orderViaEmail(namaProduk, harga) {
    const subjek = `Pemesanan: ${namaProduk}`;
    const bodyPesan = `Halo Sky-Aurora Industries,\n\nSaya ingin memesan:\n\nProduk: ${namaProduk}\nHarga: ${harga}\n\nMohon informasi pembayarannya.\n\nTerima kasih.`;
    
    const mailtoUrl = `mailto:${emailTujuan}?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(bodyPesan)}`;
    
    alert("Membuka Email untuk pemesanan aman...");
    window.location.href = mailtoUrl;
}

// Tombol Login
const loginBtn = document.getElementById('loginBtnNav');
if (loginBtn) {
    loginBtn.onclick = function() {
        window.location.href = 'login.html';
    };
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
