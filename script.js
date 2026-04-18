function addToCart(productName) {
    alert("Success! " + productName + " has been added to your Sky-Aurora cart.");
}

// Fungsi arahkan tombol login ke halaman login
const loginBtn = document.querySelector('button');
if(loginBtn) {
    loginBtn.onclick = function() {
        window.location.href = 'login.html';
    };
}

