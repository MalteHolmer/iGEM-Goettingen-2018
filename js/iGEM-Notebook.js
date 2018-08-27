$(document).ready(function () {
  //load html on click of a button
  $("#notebook-menu").children().click(function (e) {

    var target = $(this);
    var dateSelect = $(".notebook-dateselect")

    $(".notebook-menu-is-active").removeClass("notebook-menu-is-active");
    target.addClass("notebook-menu-is-active");

    switch (target.html()) {
      case "April":
        dateSelect.html(dateSelections["April"]);
        loadMonth("April");
        break;
      case "May":
        dateSelect.html(dateSelections["May"]);
        loadMonth("May");
        break;
      case "June":
        dateSelect.html(dateSelections["June"]);
        loadMonth("June");
        break;
      case "July":
        dateSelect.html(dateSelections["July"]);
        loadMonth("July");
        break;
      case "August":
        dateSelect.html(dateSelections["August"]);
        loadMonth("August");
        break;
      case "September":
        dateSelect.html(dateSelections["September"]);
        loadMonth("September");
        break;
      case "October":
        dateSelect.html(dateSelections["October"]);
        loadMonth("October");
        break;
    }
  });
});

//loading is done with asynchronous http-request and added to notebook-display
function loadMonth(month) {
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("notebook-display").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://127.0.0.1:51216/html/Notebook-Pages/" + month + ".html", false);
  xhttp.send();
}

var dateSelections = {
  "April": "<h3>April</h3> <a>25.04.18 &ndash; 30.04.18</a>",
  "May": "<h3>May</h3><a>01.05.18 &ndash; 06.05.18</a><a>07.05.18 &ndash; 13.05.18</a><a>14.05.18 &ndash; 20.05.18</a><a>21.05.18 &ndash; 27.05.18</a><a>28.05.18 &ndash; 31.05.18</a>",
  "June": "<h3>June</h3> <a>01.06.18 &ndash; 03.06.18</a> <a>04.06.18 &ndash; 10.06.18</a> <a>11.06.18 &ndash; 17.06.18</a> <a>18.06.18 &ndash; 24.06.18</a> <a>25.06.18 &ndash; 30.06.18</a>",
  "July": "<h3>July</h3> <a>01.07.18 &ndash; 08.07.18</a> <a>09.07.18 &ndash; 15.07.18</a> <a>16.07.18 &ndash; 22.07.18</a> <a>23.07.18 &ndash; 29.07.18</a> <a>30.07.18 &ndash; 31.07.18</a>",
  "August": "<h3>August</h3> <a>01.08.18 &ndash; 05.08.18</a> <a>06.08.18 &ndash; 12.08.18</a> <a>13.08.18 &ndash; 19.08.18</a> <a>20.08.18 &ndash; 26.08.18</a> <a>27.08.18 &ndash; 31.08.18</a>",
  "September": "<h3>September</h3> <a>01.09.18 &ndash; 02.09.18</a> <a>03.09.18 &ndash; 09.09.18</a> <a>10.09.18 &ndash; 16.09.18</a> <a>17.09.18 &ndash; 23.09.18</a> <a>24.09.18 &ndash; 30.09.18</a>",
  "October": "<h3>October</h3> <a>01.10.18 &ndash; 07.10.18</a> <a>08.10.18 &ndash; 14.10.18</a> <a>15.10.18 &ndash; 21.10.18</a>"
}
