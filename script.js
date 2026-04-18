// 1. Fungsi Tombol Login di Navbar
const loginBtn = document.getElementById('loginBtnNav');
if (loginBtn) {
    loginBtn.onclick = function() {
        window.location.href = 'login.html';
    };
}

// 2. Fungsi Tombol Learn More (Arahkan ke WA)
const learnMore = document.getElementById('learnMoreBtn');
if (learnMore) {
    learnMore.onclick = function() {
        window.location.href = 'https://wa.me/yournumber'; // Ganti yournumber dengan nomor HP lo
    };
}

// 3. Fungsi Tambah ke Keranjang
function addToCart(productName) {
    alert("Success! " + productName + " has been added to your Sky-Aurora cart.");
}

// 4. Smooth Scroll untuk Browse Catalog
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
