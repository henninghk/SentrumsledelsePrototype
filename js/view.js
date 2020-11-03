var $ = function(id) {return document.getElementById(id);};
// helper variable for using document.getElementById easily

function changePage() {
    const page = model.current.page;
    if (page === 'login') {
        window.location.href = "login.html";
    }
    else if (page === 'index') {
        window.location.href = "index.html";
    }
}

//inntekt
//navn
//adresse  storeInfo = 3+ting
//getElement('oppdaterside') = storeInfo

