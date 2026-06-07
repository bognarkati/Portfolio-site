# CLAUDE.md — projekt kontextus

Ez a fájl a jövőbeli Claude-munkamenetek kontextusa ehhez a projekthez.

## Mi ez a projekt
Bognár Kati (Junior / Product Designer) személyes portfólió weboldala.
A design forrása **Figmában** van; ez a repo a Figma-design kódba ültetett változata.

Figma fájl: `Portfolio` (fileKey: `KJGhNCQPjk7eDmp0UEvQoE`)
- Homepage frame: node `312:4227`
- Square One case study (desktop): node `308:1151`
- Pacemakers case study (desktop): node `308:3088`
- (A fájlban van mobil verzió és egy harmadik, "Kapocs" case study is — ezek jelenleg NINCSENEK megépítve.)

## Tech stack
- Statikus **HTML + CSS**, build-lépés és keretrendszer nélkül. Vanilla JS csak a kép-helykitöltőhöz (`placeholder.js`).
- Betűk (Google Fonts):
  - Homepage: **Newsreader** (serif, címek) + **Manrope** (sans, törzs).
  - Pacemakers case study: **Bebas Neue** (display) + **Geologica** (törzs).
  - Square One case study: **Space Grotesk** (display) + **Plus Jakarta Sans** (törzs).
- Publikálás: **GitHub Pages**.

## Témák és tipográfia (FONTOS)
- A case study oldalaknak SAJÁT sötét témájuk van, a Figma szerint — NEM a világos homepage téma:
  - `<body class="cs-pace">` → near-black `#0a0f00`, lime `#a8ff00`, törtfehér `#fdfffa`, felület `#1a1a1a`.
  - `<body class="cs-square">` → deep indigo `#0d0736`, türkiz `#99fbff`, lila `#7373fa`, szöveg `#e8fbfc`, felület `#1a1d3a`.
- A témák a `style.css`-ben `body.cs-pace` / `body.cs-square` szelektorokban írják felül a `:root` tokeneket (színek + betűk). Új téma = új body-class blokk.
- Minden betűméret a `:root` **típus-skálájából** jön (`--fs-eyebrow … --fs-display`). Méretet ITT állíts, ne inline. Inline `style=""` tipográfia TILOS (csak a swatch háttérszínekhez van inline style, az adat).
- Az Overview szekció 2 oszlopos: szöveg + `.infocard` (jobb oldali meta-doboz), mint a Figmában. Mobilon 1 oszlopra esik (`.cs-overview`).

## Felépítés / konvenciók
- Három oldal: `index.html`, `case-study-square-one.html`, `case-study-pacemakers.html`.
- Egyetlen közös stíluslap: `style.css`. Minden szín és méret a `:root` CSS-változókban van — ott módosíts, ne szórd szét.
- Design tokenek: háttér `#fffdfa`, kiemelő (terrakotta) `#a04223`, sötét szöveg `#2b3437`, halvány szekció `#e6f0f1`.
- A képek az `images/` mappában vannak, fix fájlnevekkel (lásd `README.md` export-lista). Hiányzó kép esetén a `placeholder.js` feliratos dobozt tesz a helyére — ezt ne töröld.
- A case study oldalak közös sablont követnek: hero → Overview + meta → Process lépések → Colour Palette → Typography & Principles → Key Screens → Reflection/Testing → lábléc-navigáció.

## Tartalom forrása
A case study szövegek a Figma `<text>` rétegekből lettek kiolvasva (a `get_design_context` / `get_metadata` Figma MCP eszközökkel). A teljes oldal-design túl nagy volt egyben betölteni, ezért szekciónként/kivonatosan dolgoztunk.

## CSS segédosztályok (style.css)
- `.cs-img-wide` — teljes szélességű folyamatábra/kép (width:100%, border-radius, margin).
- `.cs-img-pair` — egymás melletti 2 kép (grid 1fr 1fr, gap 16px).
- A hero képek nem kapnak `aspect-ratio` vagy `object-fit: cover` korlátot — természetes arányban jelennek meg (`.cs-hero__media img { height: auto; display: block }`).

## Fontos tudni
- A Figma asset URL-ek lokálisan futó Claude-dal letölthetők (`Invoke-WebRequest`). A képek már le vannak töltve az `images/` mappába.
- A kezdőoldal neve maradjon `index.html` (GitHub Pages ezt szolgálja ki elsőként).
- A Pacemakers Process szekció tartalmaz persona képeket (`pace-persona-*.jpg`), a Square One persona + empathy map + journey map + ideate képeket is (`square-*.jpg`) — mind le van töltve.

## Tipikus jövőbeli feladatok
- Esetleg a "Kapocs" harmadik case study és/vagy mobil-specifikus finomítások hozzáadása.
- Reszponzív finomhangolás, SEO/meta, egyedi domain.
- GitHub Pages publikálás.
