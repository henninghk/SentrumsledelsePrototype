var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily
//Funksjone som sorterer etter ID, eller annen info. Og hvor mange du vil se eller noe.


function filterIncome() {

}
function loadCompanies() {
    const chosenWeeks = model.current.weeksToSum;
    document.getElementById("mainTable").innerHTML =``;
    document.getElementById("mainTable").innerHTML = `
    <tr>
        <th id="butikkNavn">Butikknavn</th>
        <th id="sisteUker">Gjennomsnittlig inntekt ${chosenWeeks} siste uker</th>
        <th id="forReg">Forrige registrering</th>
        <th id="bransje">Bransje</th>
    </tr>`;
    

    for (let company of model.companies) {
        const filteredIncome = model.income.filter(entry => {
            return entry.id === company.id;
        });

        const averageIncome = calcAverage(chosenWeeks, filteredIncome)
        
        document.getElementById("mainTable").innerHTML +=`
                <tr id="outputTable">
                    <td id="butikkNavn">${company.id}${company.name} <button onclick="checkProfile(${company.id})">Vis profil</button></td>
                    <td id="sisteUker">${averageIncome}%</td>
                    <td id="forReg">4 uker siden</td>
                    <td id="bransje">${company.industry}</td>
                </tr>`;
    }
    
    function calcAverage(weeks,entries) {
        let sum = 0;
        if (entries.length > 0) {
            for (let i = 0; i < weeks && i < entries.length; i++) {
                sum += entries[i].percent;
            }
            return (sum/entries.length).toFixed(2);
        } else {
            return "unkown";
        } 
        
    }};

            // <div id="${profile.id}">
        // Butikknavn: ${profileName}<br>
        // Gjennomsnittlig inntekt siste ${chosenWeeks} uker: ${averageIncome}% <br>
        // Forrige registrering: ${null}! <br>
        // Bransje: ${industry} <br>
        // <button onclick="checkProfile(${profileID})">Vis profil</button> <br>
        // </div>
        // <div id="incomePercent">This is a test: ${averageIncome}%</div>
//Egen side med bedrift navn og info



// const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// arrAvg([20, 10, 5, 10]) -> 11.25
// const arrSum = arr => arr.reduce((a,b) => a + b, 0) 
// // arrSum = function(arr){
//   return arr.reduce(function(a,b){
//     return a + b
//   }, 0);
// }