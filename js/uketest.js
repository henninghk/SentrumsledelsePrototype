function drawIncomeTableTest(id) {
    let uker = [{ uke: 0 }, { uke: 1 }, { uke: 2 }];
    let income = [
        { percent: 45, id: 1 },
        { percent: 2, id: 0 },
        { percent: 45, id: 3 }
    ];
    let result = uker.map(uke => `Put in alle tinga${uke.uke}, få income: ${rightIncome(uke.uke)}`).join('<br/>');
    console.log(result);
}
// > TegnOpp uker fra valgt uker 

// > Fyll in manglende uker med et tomt felt eller income
function rightIncome(week) {
    return income
        .filter(singleIncome => singleIncome.id == week)
        .map(singleIncome => singleIncome.percent)
        .join('');
}
// > Lage en knapp med en kontroller funksjon som pusher inn dato, id og nyIncome
// Lære litt mer om functional programming først....


function drawIncomeTable(id) {
    let today = new Date();
    // console.log(new Date(today).getWeek());

    // .toISOString().slice(0, 10);

    const weeksToShow = 5;
    const lastWeeks = [];
    for (let i = 0; i < weeksToShow; i++) {
        let cloneInputs = (JSON.parse(JSON.stringify(today)));
        lastWeeks.push(cloneInputs.slice(0, 10));
        today.setDate(today.getDate() - 7);
    }
    // console.log(lastWeeks);
    // lastWeeks[i].getWeek();
    let getWeekIncome = model.income
        .filter(singleIncome => lastWeekWeekNumbers.includes(weekNoFromDate(singleIncome.date)) &&
            singleIncome.id == id);
    let correctId = 3;
    let weekNoFromDate = dateTxt => new Date(dateTxt).getWeek();
    let lastWeekWeekNumbers = lastWeeks.map(weekDate => weekNoFromDate(weekDate));
    console.log(lastWeekWeekNumbers);

    return lastWeeks
        .map(week =>
            ` < tr >
            <
            td > Uke: $ { weekNoFromDate(week) } < /td> <
            td > Income goes here: $ { getWeekIncome || "Need Data" } < button > Edit < /button></td >
            <
            td > Id: $ { correctId } < /td> <
            /tr>`)
        .join('');

}

// return model.income
// .filter(singleIncome => lastWeekWeekNumbers.includes(weekNoFromDate(singleIncome.date)) &&
//     singleIncome.id == id)
// .map(singleIncome => `
// <tr>
//     <td>Uke: ${weekNoFromDate(singleIncome.date)}</td>
//     <td>Income goes here: ${singleIncome.percent}<button>Edit</button></td>
//     <td>Id: ${singleIncome.id}</td>
// </tr>`)
// .join(''); 

// lastWeeks.forEach(date => {
//     const outputWeek = new Date(date).getWeek()
//     const filterDates = filteredIncome.filter(entry => {
//         const outputIncome = new Date(entry.date).getWeek();
//         return outputIncome == outputWeek
//     });
//     console.log(filterDates);
//     $("mainTable").innerHTML += `
// <tr>
//     <td>Uke: ${outputWeek}</td>
//     <td>Income goes here: ${filterDates[0].percent}<button>Edit</button></td>
// </tr>`
// });
// var i = 0;
// while (i <=28) {
// var ourDate = new Date();
// var pastDate = ourDate.getDate() - i;
// ourDate.setDate(pastDate);
// weekNr = ourDate.getWeek();
// $('incomeTable').innerHTML += `Week: ${weekNr}`;
// console.log(`${i} Dager Siden: `+ ourDate);
// i +=7;
// }
// const incomeKey = Object.keys(income);
// const ukeKey = Object.keys(uker);
// if (incomeKey.includes(ukeKey.uke))
// return income
// .filter(x => x.id == week)

let weeks = [{uke:1}, {uke:2}, {uke:3}, {uke:4}, {uke:5},];
let income = [{percent:1, uke:1}, {percent:3, uke:4}, {percent:2, uke:3}];
let combined = [{uke:1, percent:1}, {uke:2, percent:null},
             {uke:3, percent:2}, {uke:4, percent:3}, {uke:5 , percent:null},];

//Reduce Funksjon
let income = [{percent:1, uke:1}, {percent:3, uke:4}, {percent:2, uke:3}];
let weeks = [1,2,3,4,5];
weeks.reduce(addWeekToObj,{});

function addWeekToObj(obj, week) {
    obj[week] = income.find(obj=>obj.uke===week)?.percent || null;
    return obj;
}