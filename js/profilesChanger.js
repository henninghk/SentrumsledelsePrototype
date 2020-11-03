var $ = function(id) {return document.getElementById(id);};

function checkProfile(id) {
    const company = model.companies[id];

    $("header").innerHTML = `Name: ${company.name}`;
    $("mainTable").innerHTML = `From: <input id="fromDate" onchange="getDates()" type="date" value=""/>`+
    `To: <input id="toDate" onChange="getDates()" type="date" value=""/>`+
    "</br>Adress: "+ company.address +"<br>Bransje: "+company.industry +"<br>"+"Vekt: <input id='weightInput' type='text'></br>";
    const filteredIncome = model.income.filter(entry => {
        return entry.id === id;
    });
    console.log(filteredIncome);
    
    for (let entry of filteredIncome) {
        console.log("checking week: ", new Date(entry.date).getWeek());
        $("mainTable").innerHTML += 'Uke: '+ new Date(entry.date).getWeek() + ' Prosent vekst: '+ entry.percent+`% <button>Endre</button><br>`;
    }
};

// Bruker "vis Profil" sine datoer og oppdaterer modellen etter dette.
function getDates() {
    model.current.fromDate = document.getElementById("fromDate").value
    model.current.toDate = document.getElementById("toDate").value
}

    // $('mainTable').innerHTML =` 
    //     Butikknavn: ${currentProfile.name}<br>
    //     Gjennomsnittlig inntekt siste ${choosenWeeks} uker: ${averageIncome}% <br>
    //     Forrige registrering: ${date}! <br>
    //     Bransje: ${currentProfile.industry} <br>
    //     <button onclick="bingBang(${profile.id})" id="${profile.id}">Endre</button> <br>
    //     `;

    //Kan bruke samme side som newProfilem

      // en filter Funksjon some ble laget 02/09/2020

    // })