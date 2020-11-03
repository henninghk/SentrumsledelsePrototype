var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily
//const outputDiv = document.getElementById(id);

//https://meet.google.com/gpm-sfgd-sxt

const model = {
    current: {
        company: null,
        weeksToSum: 4,
        fromDate: null,
        toDate: null,
        user: "admin",
        page: "login",
        date: "99.99.99",
        lastLogin: "", // insert current date and time down to minutes, display on page as "5 hours ago", "2 minutes ago", "6 months ago", etc.
    },
    loginStuff: {
        username: "",
        password: ""
    },
    inputs: {
        name: "",
        address: "",
        industry: ""
    },
    // Modell For Bedrifter
    companies: [
        {name: "Super Store 300",
        address: "Examplestreet 2",
        industry: "Electronics",
        id: 0000,
        weight: "???",
        logo: "some picture"},
        
        {name: "Another Business",
        address: "Some Address",
        industry: "Food",
        id: 0001,
        weight: "???",
        logo: "some picture"},
    ],
    income: [
        {percent: 45, id: 0001, date: "2020-09-30"},
        {percent: 3, id: 0000, date: "2020-09-08"},
        {percent: 234, id: 0001, date: "2020-09-16"},
        {percent: 13, id: 0000, date: "2020-09-01"},
        {percent: 3, id: 0001, date: "2020-09-23"},
        {percent: 35, id: 0001, date: "2020-09-08"}
    ]
}


// example of a new profileTemplate:
// var newProfile = new profileTemplate(name, address, industry, id, weight, logo);
//or
// var newProfileArray = [
//     new profileTemplate(name, address, industry, id, weight, logo);
//     new profileTemplate(name, address, industry, id, weight, logo);
//     new profileTemplate(name, address, industry, id, weight, logo);
// ];


// complete history of percentage increase/decrease per week goes here, somehow



    // class profileTemplate {
    //     constructor (name, address)
    //     {
    //         this.name = name;
    //         this.address = address;
    //     //     this.industry = industry;
    //     //     this.id = id;
    //     //     this.weight = weight;
    //     //     this.logo = logo;
    //     //     this.income = income;
    //     }
    // },

    // exempel


// Jørn notat
//