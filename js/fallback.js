/* ═══════════════════════════════════════════════════
   BHOOTA GAPPA — SVG FALLBACK SCENES
   Shown when no fal.ai key is present
═══════════════════════════════════════════════════ */

const SVG_FALLBACKS = [

  /* 0: Ash pile with rising hand */
  `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <radialGradient id="f0a" cx="50%" cy="70%"><stop offset="0%" stop-color="#2a0a06"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
      <radialGradient id="f0b" cx="50%" cy="100%"><stop offset="0%" stop-color="#b0341f" stop-opacity=".75"/><stop offset="100%" stop-color="#b0341f" stop-opacity="0"/></radialGradient>
      <radialGradient id="f0v" cx="50%" cy="50%"><stop offset="55%" stop-color="rgba(0,0,0,0)"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#f0a)"/>
    <ellipse cx="200" cy="300" rx="230" ry="88" fill="url(#f0b)"/>
    <ellipse cx="200" cy="287" rx="122" ry="21" fill="#1c1410"/>
    <ellipse cx="200" cy="282" rx="88" ry="14" fill="#28201a"/>
    <circle cx="185" cy="279" r="3.5" fill="#c8400a" opacity=".9"/>
    <circle cx="200" cy="282" r="2.5" fill="#e05010" opacity=".8"/>
    <circle cx="215" cy="277" r="3" fill="#b03008" opacity=".85"/>
    <path d="M196 274 Q192 248 197 218 Q202 195 196 168" stroke="#8a7868" stroke-width="1.5" fill="none" opacity=".3" stroke-dasharray="3 5"/>
    <path d="M186 276 L184 258 M191 275 L190 253 M196 275 L197 250 M201 275 L203 254 M206 276 L208 260" stroke="#c8b898" stroke-width="1.8" stroke-linecap="round" fill="none" opacity=".3"/>
    <path d="M178 260 Q175 244 180 228 M186 262 Q185 246 188 232 M196 263 Q197 248 199 234" stroke="#a89888" stroke-width="1.2" fill="none" opacity=".22"/>
    <rect width="400" height="300" fill="url(#f0v)"/>
  </svg>`,

  /* 1: Blood moon over village */
  `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <radialGradient id="f1a" cx="50%" cy="32%"><stop offset="0%" stop-color="#200a0e"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
      <radialGradient id="f1v" cx="50%" cy="50%"><stop offset="58%" stop-color="rgba(0,0,0,0)"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#f1a)"/>
    <circle cx="200" cy="72" r="34" fill="#200a0c"/>
    <circle cx="200" cy="72" r="28" fill="#3a1215"/>
    <circle cx="200" cy="72" r="22" fill="#501818"/>
    <path d="M196 100 Q197 114 199 128" stroke="#8b1408" stroke-width="2.5" stroke-linecap="round" fill="none" opacity=".72"/>
    <ellipse cx="199" cy="131" rx="3" ry="3.5" fill="#8b1408" opacity=".65"/>
    <path d="M150 79 Q168 66 200 71 Q232 66 250 79 Q240 93 220 89 Q200 95 180 89 Q160 93 150 79Z" fill="#0e0810" opacity=".78"/>
    <path d="M0 218 Q80 196 160 206 Q240 216 320 200 L400 196 L400 300 L0 300Z" fill="#0a0608"/>
    <rect x="84" y="200" width="13" height="27" fill="#080508"/><polygon points="84,200 90,188 97,200" fill="#080508"/>
    <rect x="120" y="196" width="16" height="32" fill="#080508"/><polygon points="120,196 128,182 136,196" fill="#080508"/>
    <rect x="204" y="194" width="18" height="30" fill="#080508"/><polygon points="204,194 213,178 222,194" fill="#080508"/>
    <rect x="85" y="208" width="4" height="4" fill="#c08828" opacity=".5"/>
    <rect x="124" y="204" width="4" height="5" fill="#c08828" opacity=".45"/>
    <rect x="207" y="202" width="5" height="4" fill="#c08828" opacity=".48"/>
    <ellipse cx="200" cy="250" rx="210" ry="40" fill="#110d12" opacity=".82"/>
    <rect width="400" height="300" fill="url(#f1v)"/>
  </svg>`,

  /* 2: Eyes in the dark study */
  `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <radialGradient id="f2a" cx="50%" cy="50%"><stop offset="0%" stop-color="#0e0810"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
      <radialGradient id="f2lamp" cx="50%" cy="50%"><stop offset="0%" stop-color="#c08828" stop-opacity=".8"/><stop offset="100%" stop-color="#c08828" stop-opacity="0"/></radialGradient>
      <radialGradient id="f2eye" cx="50%" cy="50%"><stop offset="0%" stop-color="#c8341f"/><stop offset="100%" stop-color="#c8341f" stop-opacity="0"/></radialGradient>
      <radialGradient id="f2v" cx="50%" cy="50%"><stop offset="52%" stop-color="rgba(0,0,0,0)"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#f2a)"/>
    <line x1="0" y1="182" x2="400" y2="182" stroke="#1a1418" stroke-width=".5" opacity=".6"/>
    <rect x="0" y="222" width="400" height="78" fill="#0e0c10"/>
    <ellipse cx="128" cy="222" rx="17" ry="5" fill="#2a2018"/>
    <rect x="121" y="189" width="15" height="33" rx="7" fill="#1e1c14"/>
    <path d="M124 189 Q128 175 132 189" stroke="#c08828" stroke-width="2" fill="#d09030" opacity=".9"/>
    <ellipse cx="128" cy="189" rx="22" ry="22" fill="url(#f2lamp)"/>
    <path d="M160 223 Q200 216 240 223 L244 259 Q200 251 156 259Z" fill="#c8b898" opacity=".14"/>
    <text font-family="Georgia,serif" font-style="italic" font-size="8.5" fill="#6a5a4a" opacity=".48" x="40" y="100" transform="rotate(-3,40,100)">"we have seen them"</text>
    <text font-family="Georgia,serif" font-style="italic" font-size="8" fill="#6a5a4a" opacity=".36" x="242" y="90" transform="rotate(2,242,90)">"not dead tales"</text>
    <ellipse cx="357" cy="94" rx="12" ry="8" fill="url(#f2eye)" opacity=".72"/>
    <ellipse cx="376" cy="100" rx="10" ry="7" fill="url(#f2eye)" opacity=".62"/>
    <circle cx="357" cy="94" r="5" fill="#200808"/><circle cx="376" cy="100" r="4.5" fill="#200808"/>
    <circle cx="359" cy="94" r="2" fill="#e04020"/><circle cx="378" cy="100" r="2" fill="#e04020"/>
    <path d="M400 58 L330 80 L298 122 L278 172 L400 172Z" fill="#05030a" opacity=".72"/>
    <rect width="400" height="300" fill="url(#f2v)"/>
  </svg>`,

  /* 3: Firelit doorway */
  `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <radialGradient id="f3a" cx="50%" cy="50%"><stop offset="0%" stop-color="#12080e"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
      <radialGradient id="f3fire" cx="50%" cy="60%"><stop offset="0%" stop-color="#c08028" stop-opacity=".92"/><stop offset="45%" stop-color="#8b1408" stop-opacity=".42"/><stop offset="100%" stop-color="#8b1408" stop-opacity="0"/></radialGradient>
      <radialGradient id="f3v" cx="50%" cy="50%"><stop offset="50%" stop-color="rgba(0,0,0,0)"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#f3a)"/>
    <rect x="0" y="0" width="118" height="300" fill="#0d0b10"/>
    <rect x="282" y="0" width="118" height="300" fill="#0d0b10"/>
    <line x1="20" y1="42" x2="98" y2="42" stroke="#1a1620" stroke-width=".5" opacity=".5"/>
    <line x1="20" y1="88" x2="98" y2="88" stroke="#1a1620" stroke-width=".5" opacity=".4"/>
    <line x1="20" y1="134" x2="98" y2="134" stroke="#1a1620" stroke-width=".5" opacity=".38"/>
    <path d="M0 282 L118 212 L282 212 L400 282 L400 300 L0 300Z" fill="#0a0810"/>
    <rect x="118" y="18" width="164" height="194" rx="2" fill="#1a1210" stroke="#3a2820" stroke-width="4"/>
    <rect x="126" y="26" width="148" height="178" rx="1" fill="url(#f3fire)"/>
    <path d="M200 26 L130 36 L130 200 L200 204Z" fill="#160e10"/>
    <path d="M200 26 L200 204 L268 200 L268 32Z" fill="#180e12"/>
    <path d="M198 28 L198 202" stroke="#c08028" stroke-width="3" opacity=".72"/>
    <ellipse cx="198" cy="115" rx="6" ry="87" fill="#c08028" opacity=".14"/>
    <ellipse cx="200" cy="163" rx="48" ry="34" fill="#8b1408" opacity=".52"/>
    <ellipse cx="200" cy="153" rx="16" ry="14" fill="#e08030" opacity=".5"/>
    <circle cx="196" cy="121" r="5" fill="#2a2018" stroke="#4a3828" stroke-width="1"/>
    <ellipse cx="200" cy="250" rx="9" ry="11" fill="#05030a"/>
    <path d="M193 259 L188 292 M200 260 L200 296 M207 259 L212 292" stroke="#05030a" stroke-width="9" stroke-linecap="round" fill="none"/>
    <rect width="400" height="300" fill="url(#f3v)"/>
  </svg>`,

  /* 4: Manuscript / Research Log */
  `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <radialGradient id="f4a" cx="50%" cy="45%"><stop offset="0%" stop-color="#150a10"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
      <radialGradient id="f4lamp" cx="50%" cy="50%"><stop offset="0%" stop-color="#c08020" stop-opacity=".65"/><stop offset="100%" stop-color="#c08020" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#f4a)"/>
    <ellipse cx="144" cy="230" rx="32" ry="32" fill="url(#f4lamp)"/>
    <rect x="80" y="38" width="240" height="190" rx="3" fill="#1e1810" stroke="#3a2820" stroke-width="2"/>
    <rect x="88" y="46" width="224" height="174" rx="1" fill="#28201a"/>
    <line x1="200" y1="46" x2="200" y2="220" stroke="#3a2820" stroke-width="1.5" opacity=".6"/>
    <line x1="98" y1="68" x2="192" y2="68" stroke="#5a4a38" stroke-width=".8" opacity=".5"/>
    <line x1="98" y1="84" x2="192" y2="84" stroke="#5a4a38" stroke-width=".8" opacity=".42"/>
    <line x1="98" y1="100" x2="192" y2="100" stroke="#5a4a38" stroke-width=".8" opacity=".36"/>
    <line x1="98" y1="116" x2="192" y2="116" stroke="#5a4a38" stroke-width=".8" opacity=".3"/>
    <line x1="98" y1="132" x2="192" y2="132" stroke="#5a4a38" stroke-width=".8" opacity=".25"/>
    <ellipse cx="144" cy="76" rx="28" ry="18" fill="#0e0808" opacity=".6"/>
    <ellipse cx="144" cy="76" rx="22" ry="14" fill="#1a0a0a" opacity=".5"/>
    <path d="M136 69 Q144 59 152 69" stroke="#c08028" stroke-width="1.5" fill="none" opacity=".5"/>
    <ellipse cx="248" cy="90" rx="32" ry="22" fill="#0e0808" opacity=".55"/>
    <path d="M238 86 Q248 78 258 86 Q248 92 238 86Z" fill="#8b1408" opacity=".4"/>
    <circle cx="228" cy="148" r="2.5" fill="#c04010" opacity=".7"/>
    <circle cx="242" cy="164" r="2" fill="#e05020" opacity=".6"/>
    <circle cx="264" cy="153" r="1.5" fill="#d04018" opacity=".52"/>
    <circle cx="275" cy="138" r="2" fill="#b83010" opacity=".46"/>
    <rect x="82" y="228" width="236" height="10" rx="2" fill="#1c1814" opacity=".6"/>
    <ellipse cx="200" cy="278" rx="148" ry="24" fill="#0c0a10" opacity=".8"/>
  </svg>`,

  /* 5: Shakchunni ghost bride */
  `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <radialGradient id="f5a" cx="50%" cy="40%"><stop offset="0%" stop-color="#150810"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
      <radialGradient id="f5aura" cx="50%" cy="50%"><stop offset="0%" stop-color="#8b0020" stop-opacity=".52"/><stop offset="100%" stop-color="#8b0020" stop-opacity="0"/></radialGradient>
      <radialGradient id="f5v" cx="50%" cy="50%"><stop offset="52%" stop-color="rgba(0,0,0,0)"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#f5a)"/>
    <circle cx="200" cy="58" r="30" fill="#1e1618"/>
    <circle cx="200" cy="58" r="24" fill="#2a1e22" opacity=".62"/>
    <rect x="30" y="48" width="18" height="252" fill="#080508"/>
    <polygon points="22,48 39,4 56,48" fill="#080508"/>
    <polygon points="17,78 39,28 61,78" fill="#080508"/>
    <rect x="70" y="78" width="14" height="222" fill="#080508"/>
    <polygon points="63,78 77,38 91,78" fill="#080508"/>
    <rect x="312" y="52" width="18" height="248" fill="#080508"/>
    <polygon points="302,52 321,6 340,52" fill="#080508"/>
    <polygon points="296,80 321,33 346,80" fill="#080508"/>
    <rect x="355" y="78" width="14" height="222" fill="#080508"/>
    <polygon points="348,78 362,40 376,78" fill="#080508"/>
    <ellipse cx="200" cy="290" rx="238" ry="46" fill="#0e0c12" opacity=".92"/>
    <path d="M186 120 Q176 166 170 200 Q165 232 160 256 L175 259 Q185 231 190 200 Q195 167 200 136Z" fill="#8b1020" opacity=".8"/>
    <path d="M200 136 Q205 166 210 200 Q215 233 220 259 L235 256 Q230 230 225 199 Q220 166 215 120Z" fill="#7a0e1a" opacity=".72"/>
    <ellipse cx="200" cy="112" rx="14" ry="18" fill="#1a1010"/>
    <ellipse cx="200" cy="90" rx="12" ry="13" fill="#1a1010"/>
    <path d="M190 84 Q184 96 182 116 Q181 132 184 148" stroke="#0e0808" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M210 84 Q216 96 218 116 Q219 132 216 148" stroke="#0e0808" stroke-width="9" stroke-linecap="round" fill="none"/>
    <circle cx="200" cy="88" r="3" fill="#c8001a" opacity=".82"/>
    <ellipse cx="200" cy="88" rx="7" ry="6" fill="url(#f5aura)"/>
    <ellipse cx="172" cy="256" rx="8" ry="3" fill="#c08028" opacity=".52"/>
    <ellipse cx="228" cy="253" rx="8" ry="3" fill="#c08028" opacity=".46"/>
    <path d="M186 125 Q165 138 148 149" stroke="#1a1010" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M214 125 Q235 138 252 149" stroke="#1a1010" stroke-width="9" stroke-linecap="round" fill="none"/>
    <rect width="400" height="300" fill="url(#f5v)"/>
  </svg>`,

  /* 6: Village elder, creature silhouettes */
  `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <radialGradient id="f6a" cx="50%" cy="50%"><stop offset="0%" stop-color="#12080c"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
      <radialGradient id="f6fire" cx="50%" cy="70%"><stop offset="0%" stop-color="#c07020" stop-opacity=".88"/><stop offset="50%" stop-color="#801208" stop-opacity=".4"/><stop offset="100%" stop-color="#801208" stop-opacity="0"/></radialGradient>
      <radialGradient id="f6v" cx="50%" cy="50%"><stop offset="55%" stop-color="rgba(0,0,0,0)"/><stop offset="100%" stop-color="#05030a"/></radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#f6a)"/>
    <ellipse cx="200" cy="240" rx="68" ry="22" fill="url(#f6fire)"/>
    <ellipse cx="200" cy="240" rx="28" ry="9" fill="#1e1612"/>
    <circle cx="178" cy="198" r="7" fill="#120a0e"/>
    <path d="M172 205 Q168 220 165 235 Q162 248 160 258 L175 260 Q180 244 184 230 Q186 218 188 210Z" fill="#100a0c"/>
    <path d="M188 210 Q192 218 194 230 Q198 244 202 260 L217 258 Q215 248 212 235 Q209 220 205 205Z" fill="#100a0c"/>
    <path d="M168 210 Q156 218 146 222" stroke="#0e0808" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M208 210 Q220 218 232 218" stroke="#0e0808" stroke-width="7" stroke-linecap="round" fill="none"/>
    <ellipse cx="40" cy="90" rx="22" ry="40" fill="#080508" opacity=".85"/>
    <path d="M22 90 Q18 70 26 52 Q34 36 40 30" stroke="#080508" stroke-width="3" fill="none"/>
    <path d="M58 90 Q62 70 54 52 Q46 36 40 30" stroke="#080508" stroke-width="3" fill="none"/>
    <ellipse cx="40" cy="30" rx="10" ry="12" fill="#080508"/>
    <path d="M26 56 L10 46 M54 56 L70 46" stroke="#080508" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <ellipse cx="340" cy="80" rx="18" ry="34" fill="#080508" opacity=".8"/>
    <path d="M326 58 Q330 44 338 38 Q346 44 354 58" stroke="#080508" stroke-width="2.5" fill="none"/>
    <path d="M324 70 L308 56 M356 70 L372 56" stroke="#080508" stroke-width="2" stroke-linecap="round" fill="none"/>
    <ellipse cx="340" cy="38" rx="9" ry="9" fill="#080508"/>
    <ellipse cx="72" cy="155" rx="14" ry="25" fill="#080508" opacity=".72"/>
    <ellipse cx="72" cy="133" rx="7" ry="8" fill="#080508"/>
    <path d="M60 140 L44 132 M84 140 L100 132" stroke="#080508" stroke-width="2" stroke-linecap="round" fill="none"/>
    <rect width="400" height="300" fill="url(#f6v)"/>
  </svg>`,
];
