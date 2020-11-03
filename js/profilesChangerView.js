function checkProfile(id) {
    const toDateWeek = "Null";
    const fromDateWeek = "Null";
    let html = "";
    model.current.company = id;
    model.inputs.income.id = id;
    const company = model.companies[id];

    $("header").innerHTML = `Name: ${company.name}`;
    html = `
    
        From Uke:${model.current.fromDate} <input id="fromDate" onchange="getFromDate(${id})" type="date"/>        
        To Uke: ${model.current.toDate} <input id = "toDate"    onChange = "getToDate(${id})"    type = "date" / > 
        <br>Navn: ${company.name} 
        <br>Adress: ${company.address} 
        <br>Bransje: ${company.industry} 
        <br> Vekt: ${ company.weight } <br>
        Beskrivelse: ${company.description}<br>
        <button onclick = "editStore(${id})"> Rediger</button>
        <button onclick="getWishedWeeks()">Sorter Ønskede Uker</button>
        
        ${drawIncomeTable(id)}
        ${drawGraph(id)}
        `
    //Tegner opp under vekt
    $("mainTable").innerHTML = html;
};
function drawIncomeTable(id) {
    let today = new Date();

    const weeksToShow = 5;
    const lastWeeks = [];
    for (let i = 0; i < weeksToShow; i++) {
        let cloneInputs = (JSON.parse(JSON.stringify(today)));
        lastWeeks.push(cloneInputs.slice(0, 10));
        today.setDate(today.getDate() - 7);
    }
    // console.log(lastWeeks);
    // lastWeeks[i].getWeek();

    let weekNoFromDate = dateTxt => new Date(dateTxt).getWeek();
    let lastWeekWeekNumbers = lastWeeks.map(weekDate => weekNoFromDate(weekDate));

    return lastWeekWeekNumbers.map(weekNr => `<tr>
   <td>Uke: ${weekNr}</td>
   <td>Income: ${rightIncome(weekNr, id) || 
    `Fyll Inn:
    <input value="0" onchange="model.inputs.income.percent=this.value" type="number"><button onclick="pushIncome(${weekNr}, ${id})">Save/Edit</button>`}</td></tr>`).join('<br/>');
}
function rightIncome(weekNr, id) {
    return model.income
        .filter(singleIncome => singleIncome.date == weekNr && singleIncome.id == model.current.company)
        .map(singleIncome => `${singleIncome.percent}% <button onclick="deleteIncome(${singleIncome.date}, ${singleIncome.id}, ${id})">Delete</button>`)
        .join('');
}
//View til edit store -> sjekk profileschangercontroller. Funksjon som tegner opp bedriften og gjør den redigerbar.
function editStore(id) {
    let html = "";
    model.current.company = id;
    const company = model.companies[id];
    model.inputs.newProfile.name = company.name;
    model.inputs.newProfile.address = company.address;
    model.inputs.newProfile.industry = company.industry;
    model.inputs.newProfile.weight = company.weight;
    model.inputs.newProfile.description = company.description;
    model.inputs.newProfile.id = company.id;
    $("header").innerHTML = `Name: ${company.name}`
    html =`
    Navn: <input type="text" oninput="model.inputs.newProfile.name = this.value"
     value="${model.companies[id].name}">` +
        `<br>Adresse: <input value="${company.address}" type="text"
     oninput="model.inputs.newProfile.address = this.value" value="${model.companies[id].address}">` +
        `<br>Bransje: <input oninput="model.inputs.newProfile.industry = this.value" value="${model.companies[id].industry}"></input>` +
        `<br>Vekt: <input oninput="model.inputs.newProfile.weight = this.value" value="${model.companies[id].weight}" type="text"><br>
        Beskrivelse:<input oninput="model.inputs.newProfile.description = this.value" value="${model.companies[id].description}" type="text"><br>
    <button onclick="storeStore(${id})">Lagre</button>`
    $("mainTable").innerHTML = html;
}
