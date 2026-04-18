// 1. Fungsi untuk tombol LOGIN
const loginBtn = document.querySelector('button.bg-blue-600');
if (loginBtn) {
    loginBtn.onclick = function() {
        window.location.href = 'login.html';
    };
}

// 2. Fungsi untuk tombol BROWSE CATALOG
const browseBtn = document.querySelector('a[href="#catalog"]');
if (browseBtn) {
    browseBtn.onclick = function(e) {
        e.preventDefault();
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    };
}

// 3. Fungsi untuk tombol ADD TO CART
function addToCart(productName) {
    alert("Success! " + productName + " has been added to your Sky-Aurora cart.");
}

// 4. Fungsi untuk tombol LEARN MORE (Arahkan ke WhatsApp atau About)
const learnMoreBtn = document.querySelectorAll('button')[1]; // Tombol kedua di hero section
if (learnMoreBtn) {
    learnMoreBtn.onclick = function() {
        window.location.href = 'https://wa.me/yournumber'; // Ganti dengan nomor lo
    };
}
