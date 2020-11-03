// Pushe id ukenr og prosent
function deleteIncome(date, incomeId, id) {
    incomeIndex = model.income.findIndex(income => date == income.date && incomeId == income.id);
    console.log("is this index? " + incomeIndex);
    model.income.splice(incomeIndex, 1);
    checkProfile(id);
}

function pushIncome(weekNr, id) {
    model.inputs.income.date = weekNr;
    weekExist = model.income.filter(week => week.date == weekNr && week.id == id || "Wrong!");
    model.income.filter(week => week.date == weekNr && week.id == id);
    console.log("eksisterer? " + weekExist);
    let cloneInputs = (JSON.parse(JSON.stringify(model.inputs.income)));
    model.income.push(cloneInputs);
    model.inputs.income.id = '';
    model.inputs.income.date = '';
    model.inputs.income.percent = '';

    checkProfile(id);
    // model.inputs.income.date = '';
    // model.inputs.income.percent = '';

}
//Funksjon som skal tegne opp ukene du ber om og om det evt er inntekt i de ukene og kunne gjøre
//Dem redigerbare. Funksjonen fungerer for øyeblikket ikke.
function getWishedWeeks() {
    const wishedWeeks = model.current.toDate - model.current.fromDate;
    console.log('GettingWishWeeks ' + wishedWeeks)
    for (let i = 0; i < wishedWeeks; i++) {
        console.log(i);
        $("mainContent").innerHtml += `<div><br>KJØR!</div>`;

    }

}
//Controller til editStore Lagrer fra model.inputs og putter inn i valgt bedrift.
function storeStore(id) {
    model.inputs.newProfile.id = id;
    const pageInputs = model.inputs.newProfile;
    console.log(pageInputs);
    const company = model.companies[id];
    model.companies[id] = (JSON.parse(JSON.stringify(pageInputs)));
    checkProfile(id);
    clearInputs();
}

function drawGraph(id) {
    let today = new Date();

    const weeksToShow = 5;
    const lastWeeks = [];
    for (let i = 0; i < weeksToShow; i++) {
        let cloneInputs = (JSON.parse(JSON.stringify(today)));
        lastWeeks.push(cloneInputs.slice(0, 10));
        today.setDate(today.getDate() - 7);
    } //loop gjennom incomes sjekk mot de ukene(data) som dere skal ha
    //lastWeeks [39, 38, 37 , 36, 35] [0, 35, 13, 0, 5] reverse
    // [39, 38, 37 , 36, 35] && (let lastWeeks.map(week => week == incomes.date)
    // let labelCombine = incomeLabel.find(obj=>obj.uke===week)?.percent || null;
    // console.log("Combined Label: " +labelCombine);
    let weekNoFromDate = dateTxt => new Date(dateTxt).getWeek();
    let lastWeekWeekNumbers = lastWeeks.map(weekDate => weekNoFromDate(weekDate));
    console.log("Draw The Graph!");
    let incomeLabel = model.income.filter(
        incomes => incomes.id == id && lastWeekWeekNumbers.includes(incomes.date)).map(incomes => incomes.percent)
    console.log(incomeLabel);
    //Må lage divven også lage canvas med id //Reverse en array og if else i functionell
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        //Css styles for å gjøre størrelsene bedre
        //Income label skal være [0, 35, 13, 0, 5]
        //vekting og forside kan bli mer tidlyg og intuitiv
        //Rydde opp mer i koden
        //En drop down meny som gir tilbake 'bar', 'line', 'pie' og tegner opp.

        type: 'bar',
        data: {
            labels: lastWeekWeekNumbers,
            datasets: [{
                label: '# Prosent',
                data: incomeLabel,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}