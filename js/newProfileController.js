//Controller Funksjon
function pushProfile() {
    model.inputs.newProfile.id = model.companies.length;
    let cloneInputs = (JSON.parse(JSON.stringify(model.inputs)));
    if (model.inputs.newProfile.name == "") {
        newProfile();
        console.log('UpdateProfile!');
    } else {
        console.log("pusher?");
    model.companies.push(cloneInputs);
    model.income.push({
        id: model.inputs.newProfile.id,
        entries: []
    })
    // updateView();
    alert('Godkjent!');
}}