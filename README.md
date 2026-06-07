# Bognár Kati — Portfolio site

Ez a saját portfólió weboldalam: egy **homepage** bemutatkozással, és két **case study** oldal (Square One és Pacemakers). Tiszta HTML + CSS-ből épül, keretrendszer nélkül — könnyű érteni, szerkeszteni és bárhol ingyen publikálni.

A design forrása Figmában van; ez az oldal annak a kódba ültetett változata.

---

## Fájlok

| Fájl | Mi ez |
|------|-------|
| `index.html` | A nyitóoldal (hero, Selected Work, About me, Contact). |
| `case-study-square-one.html` | Square One case study oldal. |
| `case-study-pacemakers.html` | Pacemakers case study oldal. |
| `style.css` | Közös stíluslap — minden oldal ezt használja (színek, betűk, elrendezés). |
| `placeholder.js` | A hiányzó képeket szép, feliratos helykitöltőre cseréli, amíg nincs valódi kép. |
| `images/` | Ide kerülnek a képek (lásd lent az export-listát). |

A színek és betűtípusok egy helyen, a `style.css` tetején lévő `:root` változókban vannak — ott elég átírni egyet, és minden oldalon frissül.

---

## Hogyan nézd meg a saját gépeden

Dupla katt az `index.html`-re — megnyílik a böngészőben. Ennyi.
(Internetkapcsolat kell a betűtípusokhoz, mert a Google Fonts-ról töltődnek.)

---

## Képek — export-lista a Figmából

Az oldal ezeket a fájlokat keresi az `images/` mappában. Exportáld őket a Figmából (jelöld ki a réteget/frame-et → jobb oldali panel **Export** → PNG vagy JPG), és pontosan **ezekkel a nevekkel** mentsd:

**Homepage**
- `images/portrait.jpg` — a portréd a heró szekcióhoz (álló, kb. 3:4 arány)
- `images/card-square-one.jpg` — a Square One kártya képe
- `images/card-pacemakers.jpg` — a Pacemakers kártya képe

**Pacemakers**
- `images/pace-hero.jpg` — a fő mockup a heró alá (fekvő, kb. 16:9)
- `images/pace-persona-mate.jpg` — Máté persona (Empathize szekció)
- `images/pace-persona-flora.jpg` — Flóra persona (Empathize szekció)
- `images/pace-screen-hero.jpg` — heró szekció
- `images/pace-screen-routes.jpg` — routes szekció
- `images/pace-screen-events.jpg` — challenges / események szekció
- `images/pace-screen-strava.jpg` — záró / Strava szekció

**Square One**
- `images/square-hero.jpg` — a fő mockup a heró alá
- `images/square-empathy-map.jpg` — empathy map (Empathize szekció)
- `images/square-persona-dori.jpg` — Dóri persona (Define szekció)
- `images/square-persona-kata.jpg` — Kata persona (Define szekció)
- `images/square-journey-map.jpg` — user journey map (Define szekció)
- `images/square-ideate.jpg` — wireframe / concept exploráció (Ideate szekció)
- `images/square-screen-onboarding.jpg` — onboarding képernyők
- `images/square-screen-modes.jpg` — dark & light mód
- `images/square-screen-cards.jpg` — kártya / persely / chat

> Amíg egy kép hiányzik, a helyén egy halvány, feliratos doboz látszik a fájlnévvel. Amint beteszed a képet a helyes névvel, magától megjelenik. A JPG kisebb fájlméret fotókhoz; a PNG jobb éles UI-képernyőkhöz.

---

## Szöveg szerkesztése

A szövegek közvetlenül a `.html` fájlokban vannak, `<p>`, `<h1>`, `<h2>` címkék között. Megnyitod egy szövegszerkesztővel (pl. VS Code), átírod a szöveget a címkék között, mentesz, frissíted a böngészőt.

---

## Publikálás GitHub Pages-re (ingyenes)

1. Hozz létre egy ingyenes fiókot a [github.com](https://github.com)-on.
2. Új repository: **New** → név pl. `portfolio` → **Public** → **Create**.
3. Töltsd fel a mappa teljes tartalmát (az `images` mappával együtt): **Add file → Upload files** → húzd be a fájlokat → **Commit**.
4. **Settings → Pages → Branch: `main` → `/root` → Save**.
5. Pár perc múlva él a `https://<felhasznalonev>.github.io/portfolio/` címen.

> Fontos: a kezdőoldal neve maradjon `index.html` — a GitHub Pages ezt nyitja meg elsőként.

---

## Linkek az oldalon

- E-mail: `bkatus@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/katalin-bognar/`
- CV: Google Drive link (a footerben)

Ezeket a `index.html` (és a case study oldalak) láblécében tudod módosítani.
