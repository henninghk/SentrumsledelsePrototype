var $ = function(id) { return document.getElementById(id); };

function range(fromInclusive, toExclusive) {
    const rangeLength = toExclusive - fromInclusive;
    return Array.from(new Array(rangeLength).keys())
        .map(n => n + fromInclusive);
}
// Bruker "vis Profil" sine datoer og oppdaterer modellen etter dette.
//Common.js
function getFromDate(id) {
    model.current.fromDate = new Date($("fromDate").value).getWeek();
    checkProfile(id);
}
// Denne kan reise til common.js
function getToDate(id) {
    model.current.toDate = new Date($("toDate").value).getWeek();
    checkProfile(id);
}
//Denne funksjonen er vel egentlig ikke helt nødvendig atm.
function clearInputs() {
    model.inputs.newProfile.name = '';
    model.inputs.newProfile.address = '';
    model.inputs.newProfile.industry = '';
    model.inputs.newProfile.weight = '';
    model.inputs.newProfile.id = '';
    model.inputs.newProfile.description = '';
}