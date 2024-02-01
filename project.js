// Endre bakgrunnsfargen til en tilfeldig farge
function endreFarge() {
    let tilfFarge = Math.floor(Math.random()*16777216).toString(16)
    // Fargen skal være på 6 tegn. Legg til 0'ere i starten av den om den er for kort:
    tilfFarge = tilfFarge.padStart(6, "0")
    tilfFarge = "#" + tilfFarge
    console.log("Tilfeldig fargekode: " + tilfFarge)
    document.body.style.backgroundColor = tilfFarge
}
