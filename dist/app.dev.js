"use strict";

// This will show the current day name followed by the day of the month, and finally the month name.
var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var monthDayNumber = date.getDate();
var dayOfWeekNumber = date.getDay();
var monthNumber = date.getMonth();
var fullDate = "".concat(dayName[dayOfWeekNumber], ", ").concat(monthDayNumber, " ").concat(monthName[monthNumber]);
document.querySelector("#current-date").innerHTML = fullDate; // This will open or close the more list.

var openCloseMoreList = function openCloseMoreList() {
  var moreList = document.querySelector("#more-list");

  if (moreList.hasAttribute("hidden")) {
    document.querySelector("#more-list").removeAttribute("hidden");
  } else {
    document.querySelector("#more-list").setAttribute("hidden", true);
  }
};

var moreLIBtn = document.querySelector("#more");
moreLIBtn.addEventListener("click", openCloseMoreList); // This will close the more list when one of the more list items is clicked.

var closeMoreList = function closeMoreList() {
  document.querySelector("#more-list").setAttribute("hidden", true);
};

var moreLIs = document.querySelectorAll(".more-list-li");
moreLIs.forEach(function (moreLI) {
  moreLI.addEventListener("click", closeMoreList);
}); // This will search the bbc.com site using Google.

var searchBbc = function searchBbc(name) {
  var val = document.querySelector("#search");
  val.value = val.value + " site:bbc.com";
  document.querySelector("#search").innerHTML = val.value;
};