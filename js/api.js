/* ═══════════════════════════════════════════════════
   BHOOTA GAPPA — API MODULE
   Handles fal.ai image generation + ElevenLabs TTS
═══════════════════════════════════════════════════ */

/* ── fal.ai: Seedream V4 image generation ──────────────────────────────────── */

async function falGenerateImage(apiKey, prompt, onProgress) {
  const negPrompt = 'photorealistic, bright colors, cheerful, cartoon, anime, text, watermark, blurry, nsfw, low quality, jpeg artifacts';
  const fullPrompt = prompt + ', ultra detailed, cinematic lighting, 8k, dark horror masterpiece';

  // Step 1: Submit to queue
  onProgress('Queuing on fal.ai…', 'Seedream V4 · ~$0.03 · ~5–8s');

  const submitRes = await fetch('https://queue.fal.run/' + CONFIG.FAL.MODEL, {
    method: 'POST',
    headers: {
      'Authorization': 'Key ' + apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt:            fullPrompt,
      negative_prompt:   negPrompt,
      image_size:        CONFIG.FAL.SIZE,
      num_inference_steps: CONFIG.FAL.STEPS,
      guidance_scale:    CONFIG.FAL.GUIDANCE,
      num_images:        1,
    }),
  });

  if (!submitRes.ok) {
    const err = await submitRes.json().catch(() => ({}));
    throw new Error(err.detail || err.message || 'fal.ai submit failed: ' + submitRes.status);
  }

  const { request_id } = await submitRes.json();
  onProgress('Painting your scene…', 'Processing on fal.ai GPU');

  // Step 2: Poll for result
  for (let t = 0; t < CONFIG.FAL.POLL_MAX; t++) {
    await sleep(CONFIG.FAL.POLL_MS);

    const pollRes = await fetch(
      `https://queue.fal.run/${CONFIG.FAL.MODEL}/requests/${request_id}`,
      { headers: { 'Authorization': 'Key ' + apiKey } }
    );
    const poll = await pollRes.json();

    if (poll.status === 'COMPLETED') {
      const url = poll.response?.images?.[0]?.url || poll.images?.[0]?.url;
      if (!url) throw new Error('No image URL in fal.ai response');
      return url;
    }

    if (poll.status === 'FAILED') {
      throw new Error('fal.ai generation failed');
    }

    onProgress('Painting…', Math.round(t * CONFIG.FAL.POLL_MS / 1000) + 's elapsed');
  }

  throw new Error('fal.ai timed out after ' + (CONFIG.FAL.POLL_MAX * CONFIG.FAL.POLL_MS / 1000) + 's');
}


/* ── ElevenLabs: Flash v2.5 TTS stream ─────────────────────────────────────── */

async function elGenerateAudio(apiKey, text) {
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${CONFIG.EL.VOICE_ID}/stream`,
    {
      method: 'POST',
      headers: {
        'xi-api-key':   apiKey,
        'Content-Type': 'application/json',
        'Accept':       'audio/mpeg',
      },
      body: JSON.stringify({
        text,
        model_id: CONFIG.EL.MODEL,
        voice_settings: {
          stability:        CONFIG.EL.STABILITY,
          similarity_boost: CONFIG.EL.SIMILARITY,
          style:            CONFIG.EL.STYLE,
          use_speaker_boost: CONFIG.EL.SPEAKER_BOOST,
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.detail?.message || 'ElevenLabs error ' + res.status);
  }

  const buf  = await res.arrayBuffer();
  const blob = new Blob([buf], { type: 'audio/mpeg' });
  return URL.createObjectURL(blob);
}


/* ── Utility ── */
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
