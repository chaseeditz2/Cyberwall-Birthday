const openingScreen = document.getElementById("opening-screen");
const lobbyScreen = document.getElementById("lobby-screen");

const enterButton = document.getElementById("enter-button");
const backButton = document.getElementById("back-button");

const clueBox = document.getElementById("clue-box");
const clueContent = document.getElementById("clue-content");
const closeClue = document.getElementById("close-clue");

const radio = document.getElementById("radio");
const poster = document.getElementById("poster");
const symbol = document.getElementById("symbol");

/* ============================= */
/* SCREEN TRANSITIONS */
/* ============================= */

function showScreen(screenToShow) {

```
openingScreen.classList.remove("active");
lobbyScreen.classList.remove("active");

setTimeout(() => {
    screenToShow.classList.add("active");
}, 100);
```

}

/* ============================= */
/* ENTER THE THEATER */
/* ============================= */

enterButton.addEventListener("click", () => {

```
showScreen(lobbyScreen);
```

});

/* ============================= */
/* RETURN TO ENTRANCE */
/* ============================= */

backButton.addEventListener("click", () => {

```
clueBox.classList.add("hidden");

showScreen(openingScreen);
```

});

/* ============================= */
/* CLUE SYSTEM */
/* ============================= */

function showClue(title, text) {

```
clueContent.innerHTML = `
    <h3>${title}</h3>
    <p>${text}</p>
`;

clueBox.classList.remove("hidden");
```

}

/* ============================= */
/* WEATHER RADIO */
/* ============================= */

radio.addEventListener("click", () => {

```
showClue(
    "WEATHER RADIO",
    "⚠️ SEVERE WEATHER ALERT<br><br>" +
    "A storm system has been detected near the theater.<br><br>" +
    "The broadcast ends with a strange message:<br><br>" +
    "<strong>\"When the lights go out, look for what remains.\"</strong>"
);
```

});

/* ============================= */
/* THEATER POSTER */
/* ============================= */

poster.addEventListener("click", () => {

```
showClue(
    "THE FINAL PERFORMANCE",
    "TONIGHT ONLY<br><br>" +
    "ONE SPECIAL PERFORMANCE<br><br>" +
    "Starring:<br>" +
    "<strong>CYBERWALL</strong><br><br>" +
    "The poster has today's date scratched out... " +
    "and replaced with a single word:<br><br>" +
    "<strong>BEGIN</strong>"
);
```

});

/* ============================= */
/* STRANGE SYMBOL */
/* ============================= */

symbol.addEventListener("click", () => {

```
showClue(
    "THE STRANGE SYMBOL",
    "A strange green-and-gold symbol has been carved into the wall.<br><br>" +
    "Beneath it is a message:<br><br>" +
    "<em>\"Trust nothing you find in this theater.\"</em><br><br>" +
    "Something tells you this won't be the last time you see it."
);
```

});

/* ============================= */
/* CLOSE CLUE */
/* ============================= */

closeClue.addEventListener("click", () => {

```
clueBox.classList.add("hidden");
```

});

/* ============================= */
/* ESCAPE KEY */
/* ============================= */

document.addEventListener("keydown", (event) => {

```
if (event.key === "Escape") {
    clueBox.classList.add("hidden");
}
```

});
