# Bhoota Gappa — AI Reader
### JustUtter Horror Series · Part 3

An AI-powered immersive book reader featuring live image generation, horror narration, and an AI literary companion.

---

## Live Features

| Feature | Engine | Cost |
|---|---|---|
| 🎨 AI Illustrations | fal.ai Seedream V4 | ~₹2.50 / image |
| 🎙 Horror Narration | ElevenLabs Flash v2.5 | $5/mo → ~50 min |
| 👁 Ask AI | Built-in lore | Free |

---

## Quick Start (Local)

```bash
# Just open the file — no build step needed
open index.html
```

Then in the sidebar:
- Paste your **fal.ai key** → [fal.ai/dashboard](https://fal.ai/dashboard) → API Keys
- Paste your **ElevenLabs key** → [elevenlabs.io](https://elevenlabs.io) → Profile → API Key

Click any paragraph → floating toolbar → 🎨 Illustrate or 🎙 Narrate

---

## Get API Keys

### fal.ai (Images)
1. Sign up at [fal.ai](https://fal.ai) — free trial credits included
2. Dashboard → API Keys → Create key
3. Paste in the **Illustrate** tab sidebar
- Model: Seedream V4 · $0.03/image · ~5–8s generation

### ElevenLabs (Narration)
1. Sign up at [elevenlabs.io](https://elevenlabs.io)
2. Starter plan = $5/month → 30,000 credits
3. Profile → API Key → Copy
4. Paste in the **Narrate** tab sidebar
- Model: Flash v2.5 · 0.5 credits/char · Voice: Callum

---

## Deploy to Vercel (Recommended — Free)

```bash
# Install Vercel CLI
npm i -g vercel

# From project folder
cd bhoota-gappa
vercel

# Follow prompts → done. You get a live URL instantly.
```

Your app will be live at `https://bhoota-gappa-xxxx.vercel.app`

---

## Deploy to Netlify (Drag & Drop — No CLI needed)

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the **entire `bhoota-gappa` folder** onto the page
3. Done — live URL in seconds

---

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "init: Bhoota Gappa AI reader"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/bhoota-gappa.git
git push -u origin main

# Enable Pages: Settings → Pages → Branch: main → / (root) → Save
# Live at: https://YOUR_USERNAME.github.io/bhoota-gappa
```

---

## Environment / Security Note

API keys are entered client-side and never leave the browser. For a production app with real payments, move key handling to a backend proxy (Next.js API routes, Vercel Edge Functions, etc.) so keys aren't exposed.

---

## Roadmap

- [ ] Razorpay/Stripe integration for ₹99/mo subscriptions
- [ ] Chapter navigation + per-chapter locks
- [ ] All 7 volumes in a library view
- [ ] Backend API proxy (hide keys from client)
- [ ] User accounts + persistent reading progress
- [ ] ElevenLabs voice selector UI
- [ ] ePub / PDF upload support

---

## Stack

- **Frontend**: Vanilla HTML/CSS/JS — zero dependencies, zero build step
- **Images**: fal.ai → Seedream V4 (queue/poll API pattern)
- **Audio**: ElevenLabs Flash v2.5 stream → ArrayBuffer → Blob → Audio
- **Fonts**: Cinzel Decorative, IM Fell English, DM Mono (Google Fonts)
- **Fallback images**: Hand-crafted SVG horror scenes (5 scenes, no API needed)
- **Fallback audio**: Browser SpeechSynthesis API

---

*JustUtter Horror Series · Bhoota Gappa Part 3: The Burnt Smell of Fresh Ash*
