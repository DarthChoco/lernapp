// ============================================================
// BUCHSTABEN-LERNMODUL
// Jeder Buchstabe hat 5 Schritte:
// 1: Buchstabe im Wort erkennen
// 2: Wimmelbild (Buchstaben-Grid)
// 3: Bilderrätsel (Emoji)
// 4: Anlautposition (Anfang / Mitte / Ende)
// 5: Silbenklatschen
// ============================================================

// --- BUCHSTABEN-DATEN ---
// Neue Buchstaben hier eintragen – keine weitere Logik nötig.
const BUCHSTABEN_DATA = {
    'A': {
        großbuchstabe: 'A',
        kleinbuchstabe: 'a',
        // Schritt 1: Buchstabe im Wort finden
        woerter_erkennen: ['Apfel', 'Ameise', 'Baum', 'Ananas', 'Maus', 'Auto'],
        // Schritt 2: Wimmelbild – Ziel ist dieser Buchstabe (Groß + Klein)
        wimmelbild_fremd: 'BCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz',
        // Schritt 3: Bilderrätsel – je Emoji + ob Buchstabe enthalten (Anlaut)
        bilder: [
            { emoji: '🍎', wort: 'Apfel',   hat_buchstaben: true  },
            { emoji: '🐝', wort: 'Biene',   hat_buchstaben: false },
            { emoji: '🦋', wort: 'Ameise',  hat_buchstaben: true  },
            { emoji: '🌙', wort: 'Mond',    hat_buchstaben: false },
            { emoji: '🐊', wort: 'Alligator', hat_buchstaben: true },
            { emoji: '🐭', wort: 'Maus',    hat_buchstaben: false },
        ],
        // Schritt 4: Anlautposition
        position_woerter: [
            { emoji: '🍎', wort: 'Apfel',   position: 'anfang' },
            { emoji: '🍌', wort: 'Banane',  position: 'mitte'  },
            { emoji: '🦁', wort: 'Koala',   position: 'ende'   },
            { emoji: '🐊', wort: 'Alligator', position: 'anfang' },
            { emoji: '🚗', wort: 'Auto',    position: 'anfang' },
            { emoji: '🐍', wort: 'Schlange', position: 'mitte' },
        ],
        // Schritt 5: Silbenklatschen
        silben_woerter: [
            { wort: 'Ap-fel',      emoji: '🍎' },
            { wort: 'A-mei-se',    emoji: '🐜' },
            { wort: 'A-na-nas',    emoji: '🍍' },
            { wort: 'Au-to',       emoji: '🚗' },
            { wort: 'Arm',         emoji: '💪' },
            { wort: 'A-bend',      emoji: '🌙' },
        ],
    },
    'M': {
        großbuchstabe: 'M',
        kleinbuchstabe: 'm',
        woerter_erkennen: ['Mama', 'Maus', 'Baum', 'Mond', 'Lampe', 'Milch'],
        wimmelbild_fremd: 'ABCDEFGHIJKLNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz',
        bilder: [
            { emoji: '🌙', wort: 'Mond',   hat_buchstaben: true  },
            { emoji: '🍎', wort: 'Apfel',  hat_buchstaben: false },
            { emoji: '🐭', wort: 'Maus',   hat_buchstaben: true  },
            { emoji: '🌷', wort: 'Tulpe',  hat_buchstaben: false },
            { emoji: '🥛', wort: 'Milch',  hat_buchstaben: true  },
            { emoji: '🚂', wort: 'Zug',    hat_buchstaben: false },
        ],
        position_woerter: [
            { emoji: '🐭', wort: 'Maus',   position: 'anfang' },
            { emoji: '🍌', wort: 'Banane', position: 'mitte'  },
            { emoji: '🌙', wort: 'Mond',   position: 'anfang' },
            { emoji: '🌺', wort: 'Blume',  position: 'ende'   },
            { emoji: '🥛', wort: 'Milch',  position: 'anfang' },
            { emoji: '🏠', wort: 'Heim',   position: 'mitte'  },
        ],
        silben_woerter: [
            { wort: 'Ma-ma',   emoji: '👩' },
            { wort: 'Mond',    emoji: '🌙' },
            { wort: 'Maus',    emoji: '🐭' },
            { wort: 'Mil-ch',  emoji: '🥛' },
            { wort: 'Me-lo-ne', emoji: '🍈' },
            { wort: 'Mes-ser', emoji: '🔪' },
        ],
    },
    'S': {
        großbuchstabe: 'S',
        kleinbuchstabe: 's',
        woerter_erkennen: ['Sonne', 'Stern', 'Baum', 'Schule', 'Rose', 'Eis'],
        wimmelbild_fremd: 'ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrtuvwxyz',
        bilder: [
            { emoji: '☀️', wort: 'Sonne',  hat_buchstaben: true  },
            { emoji: '🐭', wort: 'Maus',   hat_buchstaben: false },
            { emoji: '⭐', wort: 'Stern',  hat_buchstaben: true  },
            { emoji: '🍌', wort: 'Banane', hat_buchstaben: false },
            { emoji: '🐍', wort: 'Schlange', hat_buchstaben: true },
            { emoji: '🌷', wort: 'Tulpe',  hat_buchstaben: false },
        ],
        position_woerter: [
            { emoji: '☀️', wort: 'Sonne',  position: 'anfang' },
            { emoji: '🐭', wort: 'Maus',   position: 'mitte'  },
            { emoji: '🌹', wort: 'Rose',   position: 'mitte'  },
            { emoji: '🐍', wort: 'Schlange', position: 'anfang' },
            { emoji: '🧊', wort: 'Eis',    position: 'ende'   },
            { emoji: '⭐', wort: 'Stern',  position: 'anfang' },
        ],
        silben_woerter: [
            { wort: 'Son-ne',  emoji: '☀️' },
            { wort: 'Stern',   emoji: '⭐' },
            { wort: 'Sa-lat',  emoji: '🥗' },
            { wort: 'Schu-le', emoji: '🏫' },
            { wort: 'So-fa',   emoji: '🛋️' },
            { wort: 'Spi-el',  emoji: '🎮' },
        ],
    },
    'L': {
        großbuchstabe: 'L',
        kleinbuchstabe: 'l',
        woerter_erkennen: ['Lampe', 'Löwe', 'Baum', 'Blume', 'Ball', 'Vogel'],
        wimmelbild_fremd: 'ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        bilder: [
            { emoji: '🦁', wort: 'Löwe',  hat_buchstaben: true  },
            { emoji: '🍎', wort: 'Apfel', hat_buchstaben: false },
            { emoji: '💡', wort: 'Lampe', hat_buchstaben: true  },
            { emoji: '🐭', wort: 'Maus',  hat_buchstaben: false },
            { emoji: '🌸', wort: 'Blume', hat_buchstaben: true  },
            { emoji: '🌙', wort: 'Mond',  hat_buchstaben: false },
        ],
        position_woerter: [
            { emoji: '🦁', wort: 'Löwe',  position: 'anfang' },
            { emoji: '🌷', wort: 'Tulpe', position: 'mitte'  },
            { emoji: '⚽', wort: 'Ball',  position: 'ende'   },
            { emoji: '💡', wort: 'Lampe', position: 'anfang' },
            { emoji: '🐦', wort: 'Vogel', position: 'ende'   },
            { emoji: '🌸', wort: 'Blume', position: 'mitte'  },
        ],
        silben_woerter: [
            { wort: 'Lö-we',    emoji: '🦁' },
            { wort: 'Lam-pe',   emoji: '💡' },
            { wort: 'Lu-pe',    emoji: '🔍' },
            { wort: 'Le-on',    emoji: '👦' },
            { wort: 'Luf-t',    emoji: '💨' },
            { wort: 'Li-mo-na-de', emoji: '🍋' },
        ],
    },
};

// --- ZUSTAND ---
let blAktivBuchstabe = 'A';
let blAktivSchritt = 0;
let blWimmelZellen = [];
let blWimmelGefunden = 0;
let blBilderAuswahl = [];
let blPositionWort = null;
let blSilbenWort = null;
let blSilbenGezaehlt = 0;

// --- EINSTIEG ---
function startBuchstabenLernen(buchstabe) {
    blAktivBuchstabe = buchstabe.toUpperCase();
    blAktivSchritt = 0;
    showGame('buchstaben');
    zeigeSchritt(0);
}

function zeigeSchritt(nr) {
    blAktivSchritt = nr;
    inputLocked = false;

    const screen = document.getElementById('game-buchstaben');
    screen.innerHTML = '';

    // Fortschrittsleiste
    const data = BUCHSTABEN_DATA[blAktivBuchstabe];
    screen.appendChild(baueHeader(data, nr));

    // Schritt-Inhalt
    switch(nr) {
        
        case 0: baueErkennenImWort(screen, data); break;
        case 1: baueWimmelbild(screen, data); break;
        case 2: baueBilderraetsel(screen, data); break;
        case 3: baueAnlautposition(screen, data); break;
        case 4: baueSilbenklatschen(screen, data); break;
    }
}

function baueHeader(data, nr) {
    const wrap = document.createElement('div');
    wrap.className = 'bl-header';

    // Buchstabe groß/klein
    const badge = document.createElement('div');
    badge.className = 'bl-badge';
    badge.textContent = `${data.großbuchstabe} ${data.kleinbuchstabe}`;
    wrap.appendChild(badge);

    // Fortschrittsbalken
    const progress = document.createElement('div');
    progress.className = 'bl-progress';
    for(let i = 0; i < 5; i++) {
        const dot = document.createElement('div');
        dot.className = 'bl-progress-dot' + (i < nr ? ' done' : '') + (i === nr ? ' active' : '');
        progress.appendChild(dot);
    }
    wrap.appendChild(progress);

    return wrap;
}

function baueAufgabenbox(text, helpText, screen) {
    const box = document.createElement('div');
    box.className = 'bl-aufgabe';

    const txt = document.createElement('span');
    txt.textContent = text;
    box.appendChild(txt);

    const helpBtn = document.createElement('button');
    helpBtn.className = 'bl-help-btn';
    helpBtn.textContent = '❓';
    helpBtn.title = 'Hilfe vorlesen';
    helpBtn.onclick = () => vorlesen(helpText);
    box.appendChild(helpBtn);

    screen.appendChild(box);
    // Aufgabe automatisch vorlesen
    vorlesen(text);
    return box;
}

function vorlesen(text) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
}

function naechsterSchritt() {
    if (blAktivSchritt < 4) {
        zeigeSchritt(blAktivSchritt + 1);
    } else {
        // Modul abgeschlossen
        score += 5;
        updateScoreDisplay();
        showFeedback(true, 5);
        zeigeBuchstabenAbschluss();
    }
}

function zeigeBuchstabenAbschluss() {
    const screen = document.getElementById('game-buchstaben');
    screen.innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
            <div style="font-size:5rem;">🎉</div>
            <div style="font-size:2rem;font-weight:900;color:var(--primary);margin:16px 0 8px;">
                Super! Du hast <em>${blAktivBuchstabe}</em> gelernt!
            </div>
            <div style="font-size:1.1rem;color:#666;margin-bottom:24px;">+5 Bonuspunkte!</div>
            <button class="main-btn" style="font-size:1.2rem;padding:16px 32px;" 
                onclick="showGame('silben')">🏠 Zurück</button>
        </div>`;
    vorlesen(`Super! Du hast den Buchstaben ${blAktivBuchstabe} gelernt! Du bekommst fünf Bonuspunkte!`);
}

// ============================================================
// ============================================================
// SCHRITT 1: BUCHSTABE IM WORT ERKENNEN
// ============================================================
function baueErkennenImWort(screen, data) {
    baueAufgabenbox(
        `Tippe auf alle Buchstaben ${data.großbuchstabe} und ${data.kleinbuchstabe} im Wort!`,
        `Schaue genau auf das Wort. Tippe auf jeden Buchstaben ${data.großbuchstabe} oder ${data.kleinbuchstabe} den du siehst!`,
        screen
    );

    const woerter = [...data.woerter_erkennen].sort(() => Math.random() - 0.5).slice(0, 4);
    let aufgabenIdx = 0;
    let gefunden = 0;
    let gesamt = 0;

    const wortDisplay = document.createElement('div');
    wortDisplay.className = 'bl-wort-display';
    screen.appendChild(wortDisplay);

    const fortschritt = document.createElement('div');
    fortschritt.className = 'bl-erkennen-fortschritt';
    screen.appendChild(fortschritt);

    function zeigeWort(idx) {
        if (idx >= woerter.length) {
            score += 2;
            updateScoreDisplay();
            showFeedback(true, 2);
            setTimeout(naechsterSchritt, 1000);
            return;
        }
        const wort = woerter[idx];
        const ziel = [data.großbuchstabe, data.kleinbuchstabe];
        gesamt = [...wort].filter(c => ziel.includes(c)).length;
        gefunden = 0;
        wortDisplay.innerHTML = '';
        fortschritt.textContent = '';

        [...wort].forEach(char => {
            const span = document.createElement('span');
            span.className = 'bl-buchstabe-btn';
            span.textContent = char;
            if (ziel.includes(char)) {
                span.dataset.ziel = 'ja';
                span.onclick = () => {
                    if (span.dataset.getippt) return;
                    span.dataset.getippt = 'ja';
                    span.classList.add('bl-buchstabe-treffer');
                    gefunden++;
                    if (gefunden >= gesamt) {
                        setTimeout(() => zeigeWort(idx + 1), 600);
                    }
                };
            } else {
                span.onclick = () => {
                    score = Math.max(0, score - 1);
                    updateScoreDisplay();
                    showFeedback(false, 1);
                    span.classList.add('bl-buchstabe-falsch');
                    setTimeout(() => span.classList.remove('bl-buchstabe-falsch'), 500);
                };
            }
            wortDisplay.appendChild(span);
        });

        vorlesen(wort);
        fortschritt.textContent = `Wort ${idx + 1} von ${woerter.length}`;
    }

    zeigeWort(0);
}

// ============================================================
// SCHRITT 2: WIMMELBILD
// ============================================================
function baueWimmelbild(screen, data) {
    const zielG = data.großbuchstabe;
    const zielK = data.kleinbuchstabe;
    const anzahlZiel = 8;

    baueAufgabenbox(
        `Finde alle ${zielG} und ${zielK} im Buchstaben-Gewimmel!`,
        `Schaue genau! Tippe auf jeden Buchstaben ${zielG} oder ${zielK} den du siehst. Andere Buchstaben sollst du nicht antippen.`,
        screen
    );

    const grid = document.createElement('div');
    grid.className = 'bl-wimmelbild';
    screen.appendChild(grid);

    const zaehler = document.createElement('div');
    zaehler.className = 'bl-wimmelbild-zaehler';
    screen.appendChild(zaehler);

    // Pool befüllen: anzahlZiel Zielbuchstaben + viele Fremd-Buchstaben
    const fremd = data.wimmelbild_fremd.split('');
    const pool = [];
    for (let i = 0; i < anzahlZiel; i++) {
        pool.push(Math.random() < 0.5 ? zielG : zielK);
    }
    const total = 40;
    while (pool.length < total) {
        pool.push(fremd[Math.floor(Math.random() * fremd.length)]);
    }
    pool.sort(() => Math.random() - 0.5);

    blWimmelGefunden = 0;
    const updateZaehler = () => {
        zaehler.textContent = `${blWimmelGefunden} / ${anzahlZiel} gefunden`;
        if (blWimmelGefunden >= anzahlZiel) {
            score += 2;
            updateScoreDisplay();
            showFeedback(true, 2);
            setTimeout(naechsterSchritt, 1000);
        }
    };
    updateZaehler();

    pool.forEach(char => {
        const btn = document.createElement('button');
        btn.className = 'bl-wimmel-btn';
        btn.textContent = char;
        const istZiel = char === zielG || char === zielK;
        btn.onclick = () => {
            if (btn.dataset.getippt) return;
            btn.dataset.getippt = 'ja';
            if (istZiel) {
                btn.classList.add('bl-wimmel-treffer');
                blWimmelGefunden++;
                updateZaehler();
            } else {
                score = Math.max(0, score - 1);
                updateScoreDisplay();
                showFeedback(false, 1);
                btn.classList.add('bl-wimmel-falsch');
                setTimeout(() => btn.classList.remove('bl-wimmel-falsch'), 400);
            }
        };
        grid.appendChild(btn);
    });
}

// ============================================================
// SCHRITT 3: BILDERRÄTSEL
// ============================================================
function baueBilderraetsel(screen, data) {
    baueAufgabenbox(
        `Tippe auf alle Bilder, deren Name mit ${data.großbuchstabe} beginnt!`,
        `Schau dir jedes Bild an. Welche Wörter beginnen mit dem Buchstaben ${data.großbuchstabe}? Tippe auf diese Bilder!`,
        screen
    );

    // 4 zufällige Bilder auswählen (mind. 1 richtig, mind. 1 falsch)
    const richtig = data.bilder.filter(b => b.hat_buchstaben).sort(() => Math.random() - 0.5);
    const falsch = data.bilder.filter(b => !b.hat_buchstaben).sort(() => Math.random() - 0.5);
    blBilderAuswahl = [...richtig.slice(0, 2), ...falsch.slice(0, 2)].sort(() => Math.random() - 0.5);

    const grid = document.createElement('div');
    grid.className = 'bl-bilder-grid';
    screen.appendChild(grid);

    let ausstehend = blBilderAuswahl.filter(b => b.hat_buchstaben).length;

    blBilderAuswahl.forEach(bild => {
        const karte = document.createElement('div');
        karte.className = 'bl-bild-karte';

        const emoji = document.createElement('div');
        emoji.className = 'bl-bild-emoji';
        emoji.textContent = bild.emoji;

        const label = document.createElement('div');
        label.className = 'bl-bild-label';
        label.textContent = bild.wort;

        karte.appendChild(emoji);
        karte.appendChild(label);

        karte.onclick = () => {
            if (karte.dataset.getippt) return;
            karte.dataset.getippt = 'ja';
            vorlesen(bild.wort);
            if (bild.hat_buchstaben) {
                karte.classList.add('bl-bild-richtig');
                ausstehend--;
                if (ausstehend <= 0) {
                    score += 2;
                    updateScoreDisplay();
                    showFeedback(true, 2);
                    setTimeout(naechsterSchritt, 1200);
                }
            } else {
                karte.classList.add('bl-bild-falsch');
                score = Math.max(0, score - 1);
                updateScoreDisplay();
                showFeedback(false, 1);
                karte.classList.add('wrong-animation');
                setTimeout(() => karte.classList.remove('wrong-animation'), 400);
            }
        };

        grid.appendChild(karte);
    });
}

// ============================================================
// SCHRITT 4: ANLAUTPOSITION
// ============================================================
function baueAnlautposition(screen, data) {
    baueAufgabenbox(
        `Wo hörst du den Buchstaben ${data.großbuchstabe}? Am Anfang, in der Mitte oder am Ende?`,
        `Ich lese dir ein Wort vor. Höre genau hin! Ist der Buchstabe ${data.großbuchstabe} am Anfang, in der Mitte oder am Ende des Wortes?`,
        screen
    );

    const woerter = [...data.position_woerter].sort(() => Math.random() - 0.5);
    let idx = 0;

    const emojiDisplay = document.createElement('div');
    emojiDisplay.className = 'bl-position-emoji';
    screen.appendChild(emojiDisplay);

    const audioBtn = document.createElement('button');
    audioBtn.className = 'audio-btn';
    audioBtn.textContent = '🔊';
    audioBtn.style.cssText = 'display:block;margin:8px auto;font-size:2rem;';
    audioBtn.onclick = () => vorlesen(blPositionWort.wort);
    screen.appendChild(audioBtn);

    const btnRow = document.createElement('div');
    btnRow.className = 'bl-position-btns';

    ['anfang','mitte','ende'].forEach(pos => {
        const btn = document.createElement('button');
        btn.className = 'bl-position-btn';
        btn.innerHTML = { anfang: '⬅️ Anfang', mitte: '↔️ Mitte', ende: 'Ende ➡️' }[pos];
        btn.onclick = () => {
            if (inputLocked) return;
            inputLocked = true;
            if (pos === blPositionWort.position) {
                btn.classList.add('bl-pos-richtig');
                score++;
                updateScoreDisplay();
                showFeedback(true, 1);
                setTimeout(() => {
                    btn.classList.remove('bl-pos-richtig');
                    inputLocked = false;
                    idx++;
                    if (idx >= Math.min(woerter.length, 4)) {
                        setTimeout(naechsterSchritt, 300);
                    } else {
                        zeigePositionWort();
                    }
                }, 900);
            } else {
                btn.classList.add('bl-pos-falsch');
                score = Math.max(0, score - 1);
                updateScoreDisplay();
                showFeedback(false, 1);
                setTimeout(() => {
                    btn.classList.remove('bl-pos-falsch');
                    inputLocked = false;
                }, 500);
            }
        };
        btnRow.appendChild(btn);
    });
    screen.appendChild(btnRow);

    const fortschritt = document.createElement('div');
    fortschritt.className = 'bl-erkennen-fortschritt';
    fortschritt.id = 'bl-pos-fortschritt';
    screen.appendChild(fortschritt);

    function zeigePositionWort() {
        blPositionWort = woerter[idx];
        emojiDisplay.textContent = blPositionWort.emoji;
        document.getElementById('bl-pos-fortschritt').textContent = `${idx + 1} / ${Math.min(woerter.length, 4)}`;
        setTimeout(() => vorlesen(blPositionWort.wort), 300);
    }
    zeigePositionWort();
}

// ============================================================
// SCHRITT 5: SILBENKLATSCHEN
// ============================================================
function baueSilbenklatschen(screen, data) {
    baueAufgabenbox(
        `Klatsche die Silben! Wie viele Silben hat das Wort?`,
        `Ich spreche ein Wort vor. Klatsche für jede Silbe einmal. Dann tippe die Anzahl der Silben!`,
        screen
    );

    const woerter = [...data.silben_woerter].sort(() => Math.random() - 0.5);
    let idx = 0;

    const emojiDisplay = document.createElement('div');
    emojiDisplay.className = 'bl-position-emoji';
    screen.appendChild(emojiDisplay);

    const audioBtn = document.createElement('button');
    audioBtn.className = 'audio-btn';
    audioBtn.style.cssText = 'display:block;margin:8px auto;font-size:2rem;';
    audioBtn.textContent = '🔊';
    audioBtn.onclick = () => vorlesen(blSilbenWort.wort.replace(/-/g, ' '));
    screen.appendChild(audioBtn);

    const zaehlerDisplay = document.createElement('div');
    zaehlerDisplay.className = 'bl-silben-zaehler';
    zaehlerDisplay.id = 'bl-silben-zaehler';
    screen.appendChild(zaehlerDisplay);

    const klatschBtn = document.createElement('button');
    klatschBtn.className = 'bl-klatsch-btn';
    klatschBtn.textContent = '👏 Klatsch!';
    klatschBtn.onclick = () => {
        blSilbenGezaehlt++;
        zaehlerDisplay.textContent = '👏'.repeat(blSilbenGezaehlt);
        klatschBtn.classList.add('bl-klatsch-aktiv');
        setTimeout(() => klatschBtn.classList.remove('bl-klatsch-aktiv'), 150);
    };
    screen.appendChild(klatschBtn);

    // Zahlen-Buttons 1–6
    const zahlenRow = document.createElement('div');
    zahlenRow.className = 'bl-silben-zahlen';
    for (let n = 1; n <= 6; n++) {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.textContent = n;
        btn.onclick = () => {
            if (inputLocked) return;
            inputLocked = true;
            const richtig = blSilbenWort.wort.split('-').length;
            if (n === richtig) {
                btn.classList.add('correct-animation');
                score++;
                updateScoreDisplay();
                showFeedback(true, 1);
                setTimeout(() => {
                    btn.classList.remove('correct-animation');
                    inputLocked = false;
                    idx++;
                    if (idx >= Math.min(woerter.length, 4)) {
                        naechsterSchritt();
                    } else {
                        zeigeSilbenWort();
                    }
                }, 900);
            } else {
                btn.classList.add('wrong-animation');
                score = Math.max(0, score - 1);
                updateScoreDisplay();
                showFeedback(false, 1);
                setTimeout(() => {
                    btn.classList.remove('wrong-animation');
                    inputLocked = false;
                }, 400);
            }
        };
        zahlenRow.appendChild(btn);
    }
    screen.appendChild(zahlenRow);

    const fortschritt = document.createElement('div');
    fortschritt.className = 'bl-erkennen-fortschritt';
    fortschritt.id = 'bl-silben-fortschritt';
    screen.appendChild(fortschritt);

    function zeigeSilbenWort() {
        blSilbenWort = woerter[idx];
        blSilbenGezaehlt = 0;
        emojiDisplay.textContent = blSilbenWort.emoji;
        document.getElementById('bl-silben-zaehler').textContent = '';
        document.getElementById('bl-silben-fortschritt').textContent = `${idx + 1} / ${Math.min(woerter.length, 4)}`;
        setTimeout(() => vorlesen(blSilbenWort.wort.replace(/-/g, ' ')), 300);
    }
    zeigeSilbenWort();
}