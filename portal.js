const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Jalur gambar hoodie lo
    if (req.url === '/hacker-bg.png') {
        fs.readFile(path.join(__dirname, 'hacker.png'), (err, data) => {
            res.end(data || "");
        });
        return;
    }

    const url = req.url;
    const assetPath = './assets';
    
    fs.readdir(assetPath, (err, files) => {
        const fileList = err ? [] : files;

        // --- TEMPLATE CSS & JS ---
        const style = `
            <style>
                body { background: #000; color: #00ff00; font-family: 'Courier New', monospace; margin: 0; overflow-x: hidden; }
                #bg { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: url('/hacker-bg.png') no-repeat center center; background-size: cover; z-index: -2; opacity: 0.2; filter: brightness(0.5); }
                #matrix { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.4; }
                .nav { background: rgba(0, 255, 0, 0.1); padding: 15px; border-bottom: 2px solid #00ff00; text-align: center; position: sticky; top: 0; z-index: 100; }
                .nav a { color: #00ff00; text-decoration: none; margin: 0 15px; font-weight: bold; font-size: 1.2em; text-transform: uppercase; }
                .nav a:hover { text-shadow: 0 0 10px #0f0; }
                .container { padding: 40px 20px; max-width: 900px; margin: auto; min-height: 100vh; }
                .card { background: rgba(0, 20, 0, 0.9); border: 2px solid #00ff00; padding: 25px; margin-bottom: 20px; box-shadow: 0 0 15px rgba(0,255,0,0.2); }
                h1, h2 { text-shadow: 0 0 10px #0f0; border-left: 5px solid #0f0; padding-left: 10px; }
                .stat-line { margin: 10px 0; color: #0ff; }
                .blink { animation: blink 1s infinite; }
                @keyframes blink { 50% { opacity: 0; } }
            </style>
        `;

        const script = `
            <script>
                const c = document.getElementById('matrix'); const ctx = c.getContext('2d');
                c.width = window.innerWidth; c.height = window.innerHeight;
                const txt = "0101010101"; const font = 16; const col = c.width / font;
                const drops = Array(Math.floor(col)).fill(1);
                function draw() {
                    ctx.fillStyle = "rgba(0,0,0,0.05)"; ctx.fillRect(0,0,c.width,c.height);
                    ctx.fillStyle = "#0f0"; ctx.font = font + "px monospace";
                    for(let i=0; i<drops.length; i++) {
                        const s = txt[Math.floor(Math.random()*txt.length)];
                        ctx.fillText(s, i*font, drops[i]*font);
                        if(drops[i]*font > c.height && Math.random() > 0.975) drops[i] = 0;
                        drops[i]++;
                    }
                }
                setInterval(draw, 50);
            </script>
        `;

        const navBar = `
            <div class="nav">
                <a href="/">BASE_MAIN</a>
                <a href="/profile">CEO_PROFILE</a>
                <a href="/vault">ENCRYPTED_VAULT</a>
            </div>
        `;

        let content = "";

        // --- LOGIKA HALAMAN ---
        if (url === '/profile') {
            content = `
                <div class="container">
                    <div class="card">
                        <h1>IDENTITAS: CIPHER0X</h1>
                        <p class="stat-line">> POSITION: Chief Executive Officer (CEO)</p>
                        <p class="stat-line">> SPECIALTY: Cyber Automation & Neural Network Spoofing</p>
                        <p class="stat-line">> STATUS: <span class="blink" style="color:red">UNTRACEABLE</span></p>
                        <hr border="1" color="#0f0">
                        <p>"Dunia hanyalah tumpukan data yang menunggu untuk disusun ulang. SKY-AURORA bukan sekadar perusahaan, ini adalah sistem operasi baru bagi peradaban."</p>
                        <div style="margin-top:20px; color:#555">LOG: Profile last updated 2026-04-09</div>
                    </div>
                </div>
            `;
        } else if (url === '/vault') {
            content = `
                <div class="container">
                    <div class="card">
                        <h1>THE VAULT (Aset Berharga)</h1>
                        <p>Daftar exploit dan database yang telah diakuisisi:</p>
                        <hr border="1" color="#0f0">
                        ${fileList.map(f => `<div style="margin:10px 0;">> ${f} <span style="font-size:0.8em; color:#0ff;">[PROTECTED]</span></div>`).join('')}
                    </div>
                </div>
            `;
        } else {
            content = `
                <div class="container">
                    <div class="card">
                        <h1>WELCOME TO BASE_HACKER</h1>
                        <p class="blink" style="color:red">● SYSTEM_CORE: ONLINE</p>
                        <p>Selamat datang di pusat kendali SKY-AURORA. Dari sini, lo mengendalikan seluruh aliran data di jaringan.</p>
                        <div style="background:#111; padding:15px; border:1px dashed #0f0; margin-top:20px;">
                            <p style="color:#0ff">>> CURRENT_THREAT_LEVEL: LOW</p>
                            <p>>> ACTIVE_CONNECTIONS: 1.042 (Global)</p>
                        </div>
                    </div>
                </div>
            `;
        }

        const finalHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>SKY-AURORA | HUB</title>
                ${style}
            </head>
            <body>
                <div id="bg"></div>
                <canvas id="matrix"></canvas>
                ${navBar}
                ${content}
                ${script}
            </body>
            </html>
        `;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(finalHtml);
    });
});

server.listen(9000);

