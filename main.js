const frame = document.getElementById('tool-frame');

/* ── Welcome page ──────────────────────────────────────────── */
const WELCOME_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: #0f1117;
    color: #e2e8f0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  .card {
    max-width: 640px;
    text-align: center;
  }
  .icon {
    font-size: 3.5rem;
    margin-bottom: 1.25rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #4f8ef7, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: .75rem;
  }
  p {
    color: #8892a4;
    line-height: 1.7;
    font-size: .975rem;
    margin-bottom: 1rem;
  }
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: center;
    margin-top: 1.5rem;
  }
  .pill {
    background: #1a1d27;
    border: 1px solid #2a2d3e;
    border-radius: 999px;
    padding: .3rem .9rem;
    font-size: .8rem;
    color: #8892a4;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="icon">⬡</div>
    <h1>Welcome!</h1>
    <p>
      Various tools created by me will be hosted on this website.
    </p>
    <p>
      <!-- Add a custom description of your toolset here -->
      Currently there only is the tool to configure different post-quantum TLS Handshakes,\n which I developed within my bachelor thesis!
    </p>
    <div class="pills">
      <span class="pill">Network</span>
      <span class="pill">Utilities</span>
      <span class="pill">Monitoring</span>
      <!-- Add more category pills as needed -->
    </div>
  </div>
</body>
</html>`;

function loadWelcome() {
  frame.srcdoc = WELCOME_HTML;
  setActive(null);
}

/* ── Load a tool into the iframe ───────────────────────────── */
function loadTool(path, id) {
  frame.removeAttribute('srcdoc');
  frame.src = path;
  setActive(id);
}

/* ── Highlight active nav link ─────────────────────────────── */
function setActive(id) {
  document.querySelectorAll('.nav-link, .dropdown a').forEach(el => el.classList.remove('active'));
  if (id) {
    const match = document.querySelector(`[onclick*="'${id}'"]`);
    if (match) match.classList.add('active');
  }
}

/* ── Boot ──────────────────────────────────────────────────── */
loadWelcome();
