function loadCompanies() {
    let companies = model.companies;
    if (model.current.sortKey) {
        companies = sortFunction(model.companies);
    }
    model.current.company = null;
    const chosenWeeks = model.current.weeksToSum;
    $("header").innerHTML = `Oversikt`;
    $("mainTable").innerHTML = `
    <tr><th>up'n down</th>
        <th id="index">Index</th>
        <th id="companyName" onclick="sorting(this.id)">Company Name</th>
        <th id="lastWeeks">Gjennomsnittlig inntekt <input 
        type="text" name="lastWeek" list="weekNr" value="${chosenWeeks}"
        onchange="(model.current.weeksToSum = this.value)">
        <datalist id="weekNr">
          <option value=1>
          <option value=2>
          <option value=3>
          <option value=4>
          <option value=5>
        </datalist> siste uker</th>
        <th id="lastUpdate">Forrige registrering</th>
        <th id="industry" onclick="sorting(this.id)">Bransje</th>
        <th id="weight" onclick="sorting(this.id)">Vekt ↓</th>
        <th>Viktig</th>
    </tr>`;

    for (let company of model.companies) {
        const filteredIncome = model.income.filter(entry => {
            return entry.id == company.id;
        });
        const averageIncome = calcAverage(parseInt(chosenWeeks), filteredIncome)
        $("mainTable").innerHTML += `
             <table id="outputTable">   
        <tr>
                    <td>
                    <input type="button" value="up" class="up" onclick="editSortOrder(${company.id,true})">
                    <input type="button" value="down" class="down" onclick="editSortOrder(${company.id,false})" /></td>
                    </td>
                    
    
                    <td id="tableIndex">${company.id + 1} </td>
                    <td>${company.name} </td>
                    <td>${averageIncome}%</td>
                    <td>4 uker siden</td>
                    <td>${company.industry}</td>
                    <td>${company.weight}</td>
                    <td><button onclick="checkProfile(${company.id})">Vis/Endre/Leggtill profil</button></td>
                </tr>`;

    }}