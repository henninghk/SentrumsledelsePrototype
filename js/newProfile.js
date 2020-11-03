var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

//Lag in ny butikk.
//Først få opp side med inputs. Navn, Adresse, Industry.
//Kunne legge in informasjon.
//Pushe til profileStorage
//Bruke type="date" til å sortere etter dato?

//View Funksjon med en liten dæsh controller.
function newProfile() { // Lag ny butikk.
    const com = "model.inputs";
    $("mainTable").innerHTML = `
    Navn: <input id="inputName" type="name" oninput="${com}.name = this.value"/><br>
    Adresse: <input id="inputAddress" type="address" oninput="${com}.address = this.value"/><br>
    Industri: <input id="inputIndustry" type="text" oninput="${com}.industry = this.value"/><br>
    Vekt: <input id="inputVekt" type="text"/><br>
<button onclick="pushProfile()" style="font-size: 100%">push Profile</button>
`
}
//Controller Funksjon
function pushProfile() {
    model.inputs.id = model.companies.length;
    let cloneInputs = (JSON.parse(JSON.stringify(model.inputs)));
    model.companies.push(cloneInputs);

    model.income.push(
        {
            id: model.inputs.id,
            entries: []
        })
}

    // const inputObj = model.inputs;
    // model.companies.push({
    
    //     name: inputObj.name,
    //     address: inputObj.address,
    //     industry: inputObj.industry,
    //     id: model.companies.length,
    //     weight: "???",
    //     logo: "some picture",
    //     income: [],
    // });
    
//     model.outputDiv.innerHTML = `Lag ny profil!
//     <h1>${model.profileStorage[2]}</h1> <br>
//     Name: <input/> <br>
//     Adress: <input/> <br>
//     Industry: <input/> <br>
//     Weight: <input/>`; 
// }


// 
// `wow her er variablen: ${outputDiv)}`