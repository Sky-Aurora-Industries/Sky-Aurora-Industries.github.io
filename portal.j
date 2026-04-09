const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Jalur gambar hoodie hantu lo
    if (req.url === '/hacker-bg.png') {
        fs.readFile(path.join(__dirname, 'hacker.png'), (err, data) => { res.end(data || ""); });
        return;
    }

    const url = req.url;
    const assetPath = './assets';
    
    fs.readdir(assetPath, (err, files) => {
        const fileList = err ? [] : files;

        const style = `
            <style>
                body { background: #000; color: #00ff00; font-family: 'Courier New', monospace; margin: 0; overflow-x: hidden; }
                #bg { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: url('/hacker-bg.png') no-repeat center center; background-size: cover; z-index: -2; opacity: 0.15; filter: contrast(1.2) brightness(0.6); }
                #matrix { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.35; }
                
                /* Navigasi Gahar */
                .nav { background: rgba(0, 15, 0, 0.95); padding: 20px; border-bottom: 2px solid #00ff00; text-align: center; position: sticky; top: 0; z-index: 100; box-shadow: 0 5px 25px #0f03; }
                .nav a { color: #00ff00; text-decoration: none; margin: 0 8px; font-size: 0.75em; font-weight: bold; border: 1px solid #0f0; padding: 6px 12px; border-radius: 2px; transition: 0.3s; }
                .nav a:hover { background: #0f0; color: #000; box-shadow: 0 0 20px #0f0; }

                .container { padding: 35px 20px; max-width: 1000px; margin: auto; }
                .card { background: rgba(0, 8, 0, 0.92); border: 1px solid #0f0; padding: 25px; margin-bottom: 25px; position: relative; box-shadow: inset 0 0 15px #0f02; }
                .card::before { content: "DATA_NODE_" + Math.floor(Math.random()*999); position: absolute; top: -10px; right: 15px; background: #0f0; color: #000; font-size: 10px; padding: 1px 6px; font-weight: bold; }
                
                h1 { color: #fff; text-shadow: 0 0 12px #0f0; border-bottom: 2px solid #0f0; padding-bottom: 10px; letter-spacing: 3px; }
                .blink { animation: blink 0.8s infinite; }
                @keyframes blink { 50% { opacity: 0.1; } }

                /* Style Khusus Riwayat Thailand */
                .op-thailand { border-left: 4px solid #f00; background: rgba(50, 0, 0, 0.3); padding: 15px; margin: 20px 0; color: #ff4444; }
                .status-tag { background: #0f0; color: #000; padding: 2px 8px; font-size: 0.8em; font-weight: bold; }
                
                /* Monitor Jaringan */
                .net-stat { font-size: 0.85em; color: #0ff; margin: 5px 0; }
                .progress { width: 100%; height: 4px; background: #111; margin: 10px 0; overflow: hidden; }
                .bar { height: 100%; background: #0f0; width: 0%; animation: slide 4s infinite; }
                @keyframes slide { 0% { width: 0%; } 50% { width: 90%; } 100% { width: 0%; } }
            </style>
        `;

        const navBar = `
            <div class="nav">
                <a href="/">HOME</a>
                <a href="/profile">CEO_PROFILE</a>
                <a href="/shadow">SHADOW_ARCHIVES</a>
                <a href="/vault">VAULT</a>
                <a href="/neural">NEURAL_NET</a>
            </div>
        `;

        let content = "";

        if (url === '/profile') {
            content = `
                <div class="container">
                    <div class="card">
                        <h1>CEO: CIPHER0X</h1>
                        <p>> RANK: ALPHA GHOST</p>
                        <p>> SPECIALTY: CROSS-BORDER DECRYPTION</p>
                        <p>> STATUS: <span class="blink" style="color:#f00">UNTRACEABLE</span></p>
                        <hr color="#0f0">
                        <p style="font-style: italic;">"Jejak digital adalah kebohongan yang saya ciptakan untuk mereka yang merasa bisa mengejar saya."</p>
                    </div>
                </div>
            `;
        } else if (url === '/shadow') {
            content = `
                <div class="container">
                    <div class="card">
                        <h1>SHADOW_ARCHIVES</h1>
                        <div class="op-thailand">
                            <h3>[!] OPERATION: THAI_SILENCE_2025</h3>
                            <p>> TARGET: Government Data Centers (Thailand)</p>
                            <p>> RESULT: <span class="status-tag">FULL_ACCESS_ACQUIRED</span></p>
                            <p style="color:#0f0; margin-top:10px;">> Berhasil menembus enkripsi tingkat tinggi tanpa memicu alarm IDS. Data berhasil dipindahkan ke satelit anonim SKY-AURORA sebelum sistem melakukan *self-destruct* log.</p>
                        </div>
                        <div class="op-thailand" style="border-color:#0ff; color:#0ff; background:rgba(0,50,50,0.2);">
                            <h3>[!] OPERATION: NEURAL_VALKYRIE</h3>
                            <p>> TARGET: Global Finance Infrastructure</p>
                            <p>> STATUS: <span class="blink" style="color:#fff">IN_PROGRESS...</span></p>
                        </div>
                    </div>
                </div>
            `;
        } else if (url === '/neural') {
            content = `
                <div class="container">
                    <div class="card">
                        <h1>NEURAL_NETWORK_MONITOR</h1>
                        <div class="net-stat">> THAI_GOV_NODE: CONNECTED [STABLE]</div>
                        <div class="progress"><div class="bar"></div></div>
                        <div class="net-stat">> PENTAGON_GATE_SCAN: 44% COMPLETE</div>
                        <div class="net-stat">> KREMLIN_LINK: ENCRYPTED_TUNNEL_ACTIVE</div>
                        <div class="net-stat">> GLOBAL_TRAFFIC: 1.042 TB/s</div>
                    </div>
                </div>
            `;
        } else if (url === '/vault') {
            content = `
                <div class="container">
                    <div class="card">
                        <h1>ENCRYPTED_VAULT_v1.3</h1>
                        <div style="margin-top:15px;">
                            ${fileList.map(f => `<div style="color:#0ff; margin:8px 0;">> ${f} <span style="font-size:0.7em; color:#0f0">[LOCKED]</span></div>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            content = `
                <div class="container">
                    <div class="card">
                        <h1 class="blink">SYSTEM_CORE_ONLINE</h1>
                        <p>> WELCOME BACK, CEO @CIPHER0X.</p>
                        <p>> ALL OPERATIONS ARE RUNNING IN THE SHADOWS.</p>
                        <div style="background:#010; border:1px dashed #0f0; padding:15px; margin-top:20px;">
                            <marquee scrollamount="12">> BYPASSING_FIREWALL... > EXFILTRATING_DATA... > WIPING_LOGS... > GHOST_MODE_ENABLED...</marquee>
                        </div>
                    </div>
                </div>
            `;
        }

        const finalHtml = `
            <!DOCTYPE html>
            <html lang="id">
            <head><title>SKY-AURORA | MASTER_HUB</title>${style}</head>
            <body>
                <div id="bg"></div>
                <canvas id="matrix"></canvas>
                ${navBar}${content}
                <script>
                    const c = document.getElementById('matrix'); const ctx = c.getContext('2d');
                    c.width = window.innerWidth; c.height = window.innerHeight;
                    const txt = "0101"; const font = 14; const col = c.width / font;
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
            </body>
            </html>
        `;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(finalHtml);
    });
});
server.listen(9000);

