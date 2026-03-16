/* ═══════════════════════════════════════════════════
   BHOOTA GAPPA — CONFIG
   Edit this file to change API models, costs, voices
═══════════════════════════════════════════════════ */

const CONFIG = {

  /* ── SUBSCRIPTION ── */
  FREE_ILLUS: 3,          // free illustrations before paywall

  /* ── fal.ai ── */
  FAL: {
    MODEL:       'fal-ai/bytedance/seedream/v4/text-to-image',
    USD_PER_IMG: 0.03,    // Seedream V4 pricing
    INR_RATE:    84,
    STEPS:       30,
    GUIDANCE:    7,
    SIZE:        'landscape_4_3',
    POLL_MAX:    40,      // max poll attempts
    POLL_MS:    2000,     // ms between polls
  },

  /* ── ElevenLabs ── */
  EL: {
    VOICE_ID:  'N2lVS1w4EtoT3dr4eOWO', // Callum — deep atmospheric horror
    MODEL:     'eleven_flash_v2_5',     // 0.5 credits/char — cheapest
    STABILITY: 0.50,
    SIMILARITY: 0.82,
    STYLE:     0.38,
    SPEAKER_BOOST: true,
  },

  /* ── Browser TTS fallback ── */
  TTS: {
    RATE:  0.83,
    PITCH: 0.88,
    PREFERRED_VOICES: ['Daniel', 'Samantha'],
  },

};

/* ── IMAGE PROMPTS — one per paragraph index ── */
const PROMPTS = [
  // Para 0: ashes that refuse to settle
  'Dark atmospheric horror oil painting. A solitary pile of ash glowing ember-red from within, absolute pitch darkness surrounding it. A skeletal hand rises through the ash. Wisps of smoke curl upward. Deep crimson, charcoal black, bone white palette. Painterly impasto brushwork, dramatic chiaroscuro. Indian gothic horror. No text, no watermark.',

  // Para 1: whisper became a scream
  'Moody Indian horror painting. A blood-crimson full moon hangs low over a silhouetted North-East Indian village at night. Fog wraps the paddy fields. A single amber light glows in a window. A lone cloaked figure walks a dirt path toward the village. Deep indigo sky, crimson moonlight on still water. Dark painterly style. No text.',

  // Para 2: something in the dark listened
  'Horror illustration, oil on canvas. A lamplit wooden writing desk at night in a dark colonial study. In the far corner, two pairs of glowing crimson eyes watch from the shadow. Whispered words float as barely-visible text dissolving into dark air. Smoky amber lamplight, deep shadows. Indian gothic aesthetic. No text, no watermark.',

  // Para 3: so here is my answer
  'Dark folk horror painting. A long stone corridor at night. A heavy wooden door stands half-open at the far end — intense orange firelight pours through the crack. The silhouette of a figure stands motionless in the threshold. Dramatic chiaroscuro. Deep shadow on both sides. Indian horror aesthetic. Painterly. No text.',

  // Para 4: research log comes alive
  'Dark Indian horror painting. An ancient candlelit study scattered with ash and embers. An open manuscript on the floor — its pages show hand-drawn sketches of supernatural creatures. The shadow-forms of these creatures seem to emerge from the margin drawings into the real room. Folklore horror aesthetic. Oil painting style. No text.',

  // Para 5: Shakchunni ghost bride
  'Indian folklore horror painting. The Shakchunni ghost bride in a deep vermilion saree stands at a forest crossroads at midnight. Her long black hair completely hides her face. Her anklets emit a faint amber glow. The moon is behind clouds. Trees close in. Dark, hauntingly still, painterly. No text, no watermark.',

  // Para 6: these are not dead tales
  'Dark Indian horror painting. A tribal village elder sits cross-legged by a fire at night, mid-story, hands raised. In the deep darkness behind him, the shadowy silhouettes of supernatural creatures are faintly visible — a Yapom woman, a Kichkandi, a Lasi. The firelight barely reaches them. Deep folklore horror atmosphere. No text.',
];

/* ── ILLUSTRATION CAPTIONS ── */
const CAPTIONS = [
  'Ashes that refuse to settle — between worlds, between breaths, between the living and the long dead.',
  'October 2024 — a whisper became a scream echoing across seven states and two million readers.',
  'Every pause between your sentences. Something in the dark was listening back.',
  'A door swinging open into the burnt smell of fresh ash.',
  'The Research Log came alive — creatures not invented, but documented from those who had seen them.',
  'The Shakchunni waits in vermilion at the crossroads. Her face is always hidden.',
  'These were not dead tales. Locals insisted: we have seen them. We have felt them.',
];

/* ── LORE DATABASE (Ask AI) ── */
const LORE = [
  {
    keywords: ['shakchunni', 'ghost bride', 'vermilion', 'anklet'],
    answer: "The Shakchunni is one of Bengal's most recognisable spirits — a married woman who died before fulfilling her earthly duties. She is identifiable by the vermilion in her hair parting and the sound of her anklets at crossroads. She does not haunt randomly. She returns because something remains unfinished.",
  },
  {
    keywords: ['yapom', 'arunachal', 'shadow'],
    answer: "The Yapom women of Arunachal Pradesh generated the series' single largest response — nearly 8 million views, with locals insisting these are living realities. Their haunting is shadow-based: they don't appear directly. You sense them in the way light bends around nothing, in shadows cast by things not there.",
  },
  {
    keywords: ['lasi', 'mizoram', 'forest', 'seduct'],
    answer: "The Lasi is a forest-dwelling seductress from Mizoram who trades beauty for souls. Her exchange is always — technically — a choice. She is never violent. She does not deceive. She offers something you cannot refuse, then holds you to the bargain.",
  },
  {
    keywords: ['kichkandi', 'nepal'],
    answer: "The Kichkandi from Nepal is among the more terrifying entities in the Research Log — a creature of the high passes whose call mimics a child's cry. It uses your own protective instincts as a weapon. Nepali readers were among the most insistent that these stories be told accurately.",
  },
  {
    keywords: ['baak', 'puwali', 'assam'],
    answer: "The Baak and Puwali Bhoot from Assam are water entities — one aggressive, one mournful. The Puwali Bhoot is essentially a spirit of homesickness made physical, which speaks to something very specific about displacement and longing in Assamese folklore.",
  },
  {
    keywords: ['azagka', 'protagonist', 'shikaar'],
    answer: "Azagka is scarred and relentless — she carries Shikaar-Nagar as something personal, not professional. In Part 3 she's joined by Krishnanaga, Uluka, and Marjarah. Whether they are allies or reflections of her own fractures remains deliberately ambiguous throughout the volume.",
  },
  {
    keywords: ['ash', 'descent', 'ashes', 'settle'],
    answer: "'Some ashes refuse to settle' is the thesis of the entire series. The author is saying these stories have not cooled. Each part goes deeper, not forward. You are not moving through a story. You are falling into one.",
  },
  {
    keywords: ['krishnanaga', 'fire', 'naag'],
    answer: "Krishnanaga is fire-borne — not a creature of flame but one born through it. In Indian folklore, nagas carry both venom and wisdom. In Shikaar-Nagar, fire is never simply destruction — it is also memory, also cleansing, also the thing that creates the ash that refuses to settle.",
  },
  {
    keywords: ['wereti', 'tripura', 'tiger'],
    answer: "The weretigers of Tripura sit at the intersection of animal fear and supernatural dread — shapeshifters who retain enough humanity to make their violence feel almost personal. Tribal communities in Tripura describe sightings that predate any written record, passed down through oral tradition as warnings rather than folklore.",
  },
  {
    keywords: ['hiyang', 'manipur', 'horse', 'drown'],
    answer: "The Hiyang Athouba is a drowned horseman from Manipur — a ghost bound to water, specifically to the rivers and lakes where he met his end. Unlike most water-bound spirits, he does not lure victims. He simply appears, horse and all, a reminder that some deaths leave the dead more present than the living.",
  },
];
