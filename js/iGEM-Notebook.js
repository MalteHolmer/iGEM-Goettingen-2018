function ajaxLoad() {
  xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://127.0.0.1:40159/html/iGEM-Notebook_test-text.html", false);
  xhttp.send();
  document.getElementById("notebook-display").innerHTML += xhttp.responseText;
}
