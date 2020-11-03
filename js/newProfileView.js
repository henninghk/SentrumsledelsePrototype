//View Funksjon med.
function newProfile() { // Lag ny butikk profil.
    const com = "model.inputs.newProfile";
    $("mainTable").innerHTML = `
    Navn: <input id="inputName" type="name" oninput="${com}.name = this.value"/><br>
    Adresse: <input id="inputAddress" type="address" oninput="${com}.address = this.value"/><br>
    Industri: <input id="inputIndustry" type="text" oninput="${com}.industry = this.value"/><br>
    Vekt: <input id="inputVekt" type="text"/><br>
<button onclick="pushProfile()" style="font-size: 100%">push Profile</button>
${feilMelding()}`


}
function feilMelding() {
    if (model.inputs.newProfile.name == "") {
        return '<div class="feilmelding">Feil: Tast inn navn!</div>'
    } else {
        return '<div class="godkjent">Klar til å pushe!</div>'
    }
}