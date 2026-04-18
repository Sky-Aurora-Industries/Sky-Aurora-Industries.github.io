// ISI EMAIL TUJUAN DI SINI
const emailTujuan = "juandirahelia@gmail.com"; 

// 1. Fungsi Klik Add to Cart langsung ke Gmail
function orderViaEmail(namaProduk, harga) {
    const subjek = `Order Request: ${namaProduk}`;
    const bodyPesan = `Halo Sky-Aurora Industries,\n\nSaya ingin memesan produk berikut:\n\nProduk: ${namaProduk}\nHarga: $${harga}\n\nMohon informasi metode pembayaran dan estimasi pengiriman.\n\nTerima kasih.`;
    
    // Format mailto: untuk membuka aplikasi email
    const mailtoUrl = `mailto:${emailTujuan}?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(bodyPesan)}`;
    
    alert("Opening Gmail for secure order submission...");
    window.location.href = mailtoUrl;
}

// 2. Fungsi Tombol Login
const loginBtn = document.getElementById('loginBtnNav');
if (loginBtn) {
    loginBtn.onclick = function() {
        window.location.href = 'login.html';
    };
}

// 3. Fungsi Learn More & Contact (Ke Email juga)
const emailLinks = ['learnMoreBtn', 'contactNav'];
emailLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.onclick = function() {
            window.location.href = `mailto:${emailTujuan}?subject=Consultation Request&body=Hi Sky-Aurora, I need to discuss your tech solutions.`;
        };
    }
});

// 4. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
