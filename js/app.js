/* ═══════════════════════════════════════════════════
   BHOOTA GAPPA — MAIN APP
═══════════════════════════════════════════════════ */
'use strict';

/* ── STATE ── */
let falKey       = '';
let elKey        = '';
let isPro        = false;
let freeIllusUsed = 0;

let selText      = '';
let selIdx       = 0;
let activePara   = null;

let imgGenCount  = 0;

let audioEl      = null;
let browserUtter = null;
let isPlaying    = false;
let waveTimer    = null;
let clockTimer   = null;
let elapsed      = 0;

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  spawnSmoke();
  buildWaveform();
  loadSavedKeys();
  bindProse();
});

function spawnSmoke() {
  for (let i = 0; i < 13; i++) {
    const s = document.createElement('div');
    const z = 2 + Math.random() * 5;
    s.className = 'sp';
    s.style.cssText = [
      `left:${Math.random() * 100}%`,
      `bottom:${Math.random() * 12}%`,
      `width:${z}px`,
      `height:${z}px`,
      `animation-duration:${10 + Math.random() * 18}s`,
      `animation-delay:${Math.random() * 14}s`,
    ].join(';');
    document.body.appendChild(s);
  }
}

/* ── Reading progress ── */
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const pct = h > 0 ? Math.max(4, (scrollY / h) * 100) : 4;
  document.getElementById('prog').style.width = pct + '%';
});

/* ══════════════════════════════════════════════════
   PARAGRAPH SELECTION
══════════════════════════════════════════════════ */
function bindProse() {
  document.getElementById('prose').addEventListener('click', handleParaClick);
}

function handleParaClick(e) {
  const p = e.target.closest('p[data-i]');
  if (!p) return;
  setActivePara(p, e);
}

function setActivePara(p, e) {
  document.querySelectorAll('.prose p.active, .lock-blur p.active')
    .forEach(el => el.classList.remove('active'));
  p.classList.add('active');
  activePara = p;
  selText    = p.textContent.trim();
  selIdx     = parseInt(p.dataset.i || '0');
  showToolbar(e);
}

document.addEventListener('mousedown', e => {
  if (!e.target.closest('#ftb') && !e.target.closest('[data-i]')) hideToolbar();
});

function showToolbar(e) {
  const tb = document.getElementById('ftb');
  const x  = Math.min(Math.max(8, e.pageX - 88), window.innerWidth - 320);
  const y  = Math.max(8, e.pageY - 54);
  tb.style.left = x + 'px';
  tb.style.top  = y + 'px';
  tb.classList.add('show');
}
function hideToolbar() {
  document.getElementById('ftb').classList.remove('show');
}

/* ══════════════════════════════════════════════════
   TABS
══════════════════════════════════════════════════ */
function switchTab(id, btn) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('on'));
  document.querySelectorAll('.pane').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('pane-' + id).classList.add('on');
}

/* ══════════════════════════════════════════════════
   API KEYS
══════════════════════════════════════════════════ */
function loadSavedKeys() {
  // Keys are session-only for security — not persisted to localStorage
}

function setFalKey(v) {
  falKey = v.trim();
  setDot('falDot', falKey.length > 12 ? 'ok' : '');
}

function setElKey(v) {
  elKey = v.trim();
  setDot('elDot', elKey.length > 12 ? 'ok' : '');
}

function setDot(id, state) {
  document.getElementById(id).className = 'dot' + (state ? ' ' + state : '');
}

/* ══════════════════════════════════════════════════
   ILLUSTRATION
══════════════════════════════════════════════════ */
function doIllustrate() {
  hideToolbar();
  switchTab('illus', document.querySelectorAll('.tab')[0]);

  if (!isPro && freeIllusUsed >= CONFIG.FREE_ILLUS) {
    showIllusLocked();
    return;
  }
  freeIllusUsed++;
  startIllustration();
}

function regenIllus() {
  if (!isPro && freeIllusUsed >= CONFIG.FREE_ILLUS) {
    openModal();
    return;
  }
  freeIllusUsed++;
  startIllustration();
}

function startIllustration() {
  // Show result panel, reset state
  document.getElementById('illusIdle').style.display   = 'none';
  document.getElementById('illusLocked').classList.remove('show');
  document.getElementById('illusResult').classList.add('show');

  const img = document.getElementById('genImg');
  img.className = ''; img.src = '';

  // Clear any previous SVG fallback
  const fb = document.getElementById('imgFrame').querySelector('.svg-fb');
  if (fb) fb.remove();

  document.getElementById('genOverlay').classList.remove('done');
  document.getElementById('costPill').style.display = 'none';
  document.getElementById('illusCaption').textContent = '';
  document.getElementById('snipBody').textContent = selText.slice(0, 110) + (selText.length > 110 ? '…' : '');

  if (falKey) {
    runFalGeneration(selIdx);
  } else {
    setGenLabel('Add fal.ai key to generate real AI art', 'Free trial credits at fal.ai · sign up is free');
    setTimeout(() => showFallback(selIdx), 1400);
  }
}

async function runFalGeneration(idx) {
  setDot('falDot', 'busy');

  try {
    const imageUrl = await falGenerateImage(
      falKey,
      PROMPTS[idx] || PROMPTS[0],
      (msg, sub) => setGenLabel(msg, sub)
    );

    imgGenCount++;
    updateCostMeter();
    renderImage(imageUrl, idx);
    setDot('falDot', 'ok');

  } catch (err) {
    console.error('[fal.ai]', err);
    setDot('falDot', 'err');
    setGenLabel('Error — ' + err.message, 'Check your fal.ai key and credits');
    setTimeout(() => showFallback(idx), 1000);
  }
}

function renderImage(url, idx) {
  const img = document.getElementById('genImg');
  img.onload = () => {
    img.classList.add('loaded');
    document.getElementById('genOverlay').classList.add('done');
    const usd = (imgGenCount * CONFIG.FAL.USD_PER_IMG).toFixed(3);
    const inr = (imgGenCount * CONFIG.FAL.USD_PER_IMG * CONFIG.FAL.INR_RATE).toFixed(1);
    const pill = document.getElementById('costPill');
    pill.textContent = '$' + usd + ' / ₹' + inr + ' total';
    pill.style.display = 'block';
  };
  img.src = url;
  document.getElementById('illusCaption').textContent = CAPTIONS[idx] || '';
}

function showFallback(idx) {
  const i = Math.min(idx, SVG_FALLBACKS.length - 1);
  const frame = document.getElementById('imgFrame');
  let fb = frame.querySelector('.svg-fb');
  if (!fb) {
    fb = document.createElement('div');
    fb.className = 'svg-fb';
    fb.style.cssText = 'position:absolute;inset:0;';
    frame.appendChild(fb);
  }
  fb.innerHTML = SVG_FALLBACKS[i];
  document.getElementById('genOverlay').classList.add('done');
  document.getElementById('illusCaption').textContent = CAPTIONS[Math.min(idx, CAPTIONS.length - 1)];
  const pill = document.getElementById('costPill');
  pill.textContent = falKey ? 'API error — preview scene' : 'Add fal.ai key for AI art';
  pill.style.display = 'block';
}

function showIllusLocked() {
  document.getElementById('illusIdle').style.display   = 'none';
  document.getElementById('illusResult').classList.remove('show');
  document.getElementById('illusLocked').classList.add('show');
}

function setGenLabel(lbl, sub = '') {
  document.getElementById('genLabel').textContent = lbl;
  document.getElementById('genSub').textContent   = sub;
}

function updateCostMeter() {
  const usd = imgGenCount * CONFIG.FAL.USD_PER_IMG;
  document.getElementById('imgCount').textContent    = imgGenCount;
  document.getElementById('imgCostUSD').textContent  = '$' + usd.toFixed(3);
  document.getElementById('imgCostINR').textContent  = '₹' + (usd * CONFIG.FAL.INR_RATE).toFixed(2);
}

/* ══════════════════════════════════════════════════
   NARRATION
══════════════════════════════════════════════════ */
function doNarrate() {
  hideToolbar();
  switchTab('narr', document.querySelectorAll('.tab')[1]);

  const text = selText || document.querySelector('#prose p')?.textContent?.trim() || '';
  if (!text) return;

  document.getElementById('narrIdle').style.display = 'none';
  document.getElementById('narrCard').classList.add('show');
  document.getElementById('narrSnip').textContent   = text.slice(0, 90) + (text.length > 90 ? '…' : '');
  document.getElementById('narrScroll').textContent = text;
  document.getElementById('narrStatus').textContent = '';

  buildWaveform();
  stopNarration();

  if (elKey) {
    runElevenLabs(text);
  } else {
    setVoiceInfo('🎙 Browser TTS (fallback)', 'Add ElevenLabs key for professional horror narration');
    speakBrowser(text);
  }
}

async function runElevenLabs(text) {
  setVoiceInfo('🎙 ElevenLabs — Callum', 'Connecting… Flash v2.5 · 0.5 credits/char');
  setDot('elDot', 'busy');
  document.getElementById('narrStatus').textContent = 'Fetching from ElevenLabs…';

  try {
    const url = await elGenerateAudio(elKey, text);
    setDot('elDot', 'ok');
    setVoiceInfo('🎙 ElevenLabs — Callum', 'Flash v2.5 · Deep horror narrator');
    playAudio(url);

  } catch (err) {
    console.error('[ElevenLabs]', err);
    setDot('elDot', 'err');
    setVoiceInfo('🎙 Browser TTS (fallback)', 'EL error: ' + err.message);
    document.getElementById('narrStatus').textContent = 'Falling back to browser TTS…';
    speakBrowser(text);
  }
}

function playAudio(url) {
  audioEl = new Audio(url);
  audioEl.onplay   = () => { isPlaying = true;  updatePlayBtn(); startWave(); startClock(); setNarrStatus('Playing…'); };
  audioEl.onpause  = () => { isPlaying = false; updatePlayBtn(); stopWave();  stopClock(); };
  audioEl.onended  = () => { isPlaying = false; updatePlayBtn(); stopWave();  stopClock(); setNarrStatus('— Complete —'); };
  audioEl.onerror  = () => setNarrStatus('Audio error');
  audioEl.play();
}

function speakBrowser(text) {
  if (!window.speechSynthesis) { setNarrStatus('TTS not supported'); return; }

  const u = new SpeechSynthesisUtterance(text);
  u.rate   = CONFIG.TTS.RATE;
  u.pitch  = CONFIG.TTS.PITCH;
  u.volume = 1;

  const voices = speechSynthesis.getVoices();
  const pref   = CONFIG.TTS.PREFERRED_VOICES;
  const voice  = voices.find(v => pref.some(p => v.name.includes(p)))
               || voices.find(v => v.lang.startsWith('en') && v.localService);
  if (voice) u.voice = voice;

  browserUtter = u;
  isPlaying = true;
  updatePlayBtn(); startWave(); startClock();

  u.onend  = () => { isPlaying = false; updatePlayBtn(); stopWave(); stopClock(); setNarrStatus('— Complete —'); };
  u.onerror = () => setNarrStatus('TTS error');

  speechSynthesis.speak(u);
}

function togglePlay() {
  if (audioEl) {
    isPlaying ? audioEl.pause() : audioEl.play();
    return;
  }
  const ss = window.speechSynthesis;
  if (isPlaying) {
    ss.pause();
    isPlaying = false; updatePlayBtn(); stopWave(); stopClock();
  } else if (ss.paused) {
    ss.resume();
    isPlaying = true; updatePlayBtn(); startWave(); startClock();
  }
}

function stopNarration() {
  if (audioEl)      { audioEl.pause(); audioEl.currentTime = 0; audioEl = null; }
  if (browserUtter) { speechSynthesis.cancel(); browserUtter = null; }
  isPlaying = false; updatePlayBtn(); stopWave(); stopClock();
}

function buildWaveform() {
  const wf = document.getElementById('waveform');
  wf.innerHTML = '';
  for (let i = 0; i < 42; i++) {
    const b = document.createElement('div');
    b.className = 'wbar';
    b.style.height = (4 + Math.sin(i * .55) * 9 + Math.random() * 10) + 'px';
    wf.appendChild(b);
  }
}

function updatePlayBtn() {
  const b = document.getElementById('playBtn');
  b.textContent = isPlaying ? '⏸' : '▶';
  b.classList.toggle('playing', isPlaying);
}

function startWave() {
  const bars = document.querySelectorAll('.wbar');
  let t = 0;
  waveTimer = setInterval(() => {
    bars.forEach((b, i) => {
      b.classList.toggle('lit', i === t % bars.length || i === (t + 1) % bars.length);
      b.style.height = (4 + Math.sin((i + t * .36) * .76) * 10 + Math.random() * 8) + 'px';
    });
    t++;
  }, 80);
}
function stopWave() {
  clearInterval(waveTimer);
  document.querySelectorAll('.wbar').forEach(b => b.classList.remove('lit'));
}
function startClock() {
  elapsed = 0;
  clockTimer = setInterval(() => {
    elapsed++;
    const m = Math.floor(elapsed / 60), s = elapsed % 60;
    document.getElementById('clock').textContent = m + ':' + String(s).padStart(2, '0');
  }, 1000);
}
function stopClock() {
  clearInterval(clockTimer);
  elapsed = 0;
  document.getElementById('clock').textContent = '0:00';
}
function setVoiceInfo(name, desc) {
  document.getElementById('voiceName').textContent = name;
  document.getElementById('voiceDesc').textContent = desc;
}
function setNarrStatus(t) {
  document.getElementById('narrStatus').textContent = t;
}

// Pre-load voices
if (window.speechSynthesis) {
  speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}

/* ══════════════════════════════════════════════════
   CHAT — AI LORE COMPANION
══════════════════════════════════════════════════ */
function doAsk() {
  hideToolbar();
  switchTab('chat', document.querySelectorAll('.tab')[2]);
  if (selText) {
    document.getElementById('chatInput').value = 'Tell me about: "' + selText.slice(0, 60) + '…"';
    document.getElementById('chatInput').focus();
  }
}

function getAnswer(msg) {
  const l = msg.toLowerCase();
  for (const entry of LORE) {
    if (entry.keywords.some(k => l.includes(k))) return entry.answer;
  }
  return "Bhoota Gappa is built on one vital principle: these are not dead tales. The creatures in the Research Log were submitted and corrected by locals who encounter these fears as living realities. The author's role was less invention and more documentation — which is why the series lands differently than typical horror fiction. The monsters here carry the weight of real belief.";
}

function onChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
}

function sendChat() {
  const inp = document.getElementById('chatInput');
  const msg = inp.value.trim();
  if (!msg) return;
  inp.value = '';
  addMsg('user', 'You', msg);
  const typing = addTyping();
  setTimeout(() => {
    typing.remove();
    addMsg('ai', 'Bhoota Gappa AI', getAnswer(msg));
  }, 950 + Math.random() * 500);
}

function addMsg(type, who, text) {
  const c = document.getElementById('chatMsgs');
  const d = document.createElement('div');
  d.className = 'msg ' + type;
  d.innerHTML = `<div class="msg-who">${who}</div><div class="msg-bub">${text.replace(/\n/g, '<br>')}</div>`;
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
  return d;
}

function addTyping() {
  const c = document.getElementById('chatMsgs');
  const d = document.createElement('div');
  d.className = 'msg ai';
  d.innerHTML = `<div class="msg-who">Bhoota Gappa AI</div><div class="msg-bub"><div class="typing-row"><div class="td"></div><div class="td"></div><div class="td"></div></div></div>`;
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
  return d;
}

/* ══════════════════════════════════════════════════
   SUBSCRIPTION MODAL
══════════════════════════════════════════════════ */
function openModal()  { document.getElementById('modal-bg').classList.add('open'); }
function closeModal() { document.getElementById('modal-bg').classList.remove('open'); }

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-bg').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-bg')) closeModal();
  });
});

function activatePro() {
  isPro = true;
  closeModal();

  // Update header
  document.getElementById('tierBadge').textContent = '✦ Full Access';
  document.getElementById('tierBadge').className   = 'badge pro';
  const btn = document.getElementById('subBtn');
  btn.textContent = '✦ Subscribed';
  btn.style.cssText = 'background:rgba(184,130,30,.1);border:1px solid rgba(184,130,30,.38);color:var(--gilt);font-family:DM Mono,monospace;font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;padding:7px 15px;border-radius:2px;cursor:default;';

  // Unlock blurred content
  const lt = document.getElementById('lockText');
  lt.style.filter       = 'none';
  lt.style.opacity      = '1';
  lt.style.pointerEvents = 'auto';
  document.getElementById('pwGate').style.display = 'none';

  // Wire up newly-unlocked paragraphs
  lt.querySelectorAll('p[data-i]').forEach(p => {
    p.addEventListener('click', e => setActivePara(p, e));
  });

  document.getElementById('illusLocked').classList.remove('show');
  showToast('✦ Full Access unlocked — all chapters, illustrations & ElevenLabs narration active');
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 450);
  }, 3400);
}
