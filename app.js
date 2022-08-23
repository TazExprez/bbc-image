// This will show the current day name followed by the day of the month, and finally the month name.
const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date();
let monthDayNumber = date.getDate();
let dayOfWeekNumber = date.getDay();
let monthNumber = date.getMonth();
let fullDate = `${dayName[dayOfWeekNumber]}, ${monthDayNumber} ${monthName[monthNumber]}`;
document.querySelector("#current-date").innerHTML = fullDate;

// This will open or close the more list.
const openCloseMoreList = () => {
    let moreList = document.querySelector("#more-list");
    if (moreList.hasAttribute("hidden")) {
        document.querySelector("#more-list").removeAttribute("hidden"); 
    }
    else {
        document.querySelector("#more-list").setAttribute("hidden", true);
    }
};

const moreLIBtn = document.querySelector("#more");
moreLIBtn.addEventListener("click", openCloseMoreList);

// This will close the more list when one of the more list items is clicked.
const closeMoreList = () => {
    document.querySelector("#more-list").setAttribute("hidden", true);
};

const moreLIs = document.querySelectorAll(".more-list-li");
moreLIs.forEach(moreLI => {
    moreLI.addEventListener("click", closeMoreList);
});

// This will search the bbc.com site using Google.
const searchBbc = (name) => {
    let val = document.querySelector("#search");
    val.value = val.value + " site:bbc.com";
    document.querySelector("#search").innerHTML = val.value; 
};