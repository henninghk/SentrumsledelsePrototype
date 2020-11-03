//helper variable for using document.getElementById easily
var $ = function(id) {return document.getElementById(id);};

//Week Number Finder ellerno
Date.prototype.getWeek = function () {
    //https://stackoverflow.com/questions/9045868/javascript-date-getweek
    
        const dowOffset = 1;
        var newYear = new Date(this.getFullYear(),0,1);
        var day = newYear.getDay() - dowOffset; //the day of week the year begins on
        day = (day >= 0 ? day : day + 7);
        var daynum = Math.floor((this.getTime() - newYear.getTime() - 
        (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
        var weeknum;
        //if the year starts before the middle of a week
        if(day < 4) {
            weeknum = Math.floor((daynum+day-1)/7) + 1;
            if(weeknum > 52) {
                nYear = new Date(this.getFullYear() + 1,0,1);
                nday = nYear.getDay() - dowOffset;
                nday = nday >= 0 ? nday : nday + 7;
                /*if the next year starts before the middle of
                  the week, it is week #1 of that year*/
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum+day-1)/7);
        }
        return weeknum;
    };
function passCheck() {
    if (($("username-field").value === model.loginStuff.username) && ($("password-field").value === model.loginStuff.username)) {
        model.current.page = "index";
        changePage();
    }
}

