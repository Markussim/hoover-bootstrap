function includeHTML() {
  console.log("Hmm");
  let z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

window.onload = function () {
  includeHTML();
};

function changeState() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("state");

  let elmnt = document.getElementById("stateFull");

  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        elmnt.innerHTML = this.responseText;
      }
      if (this.status == 404) {
        elmnt.innerHTML = "Page not found.";
      }
      includeHTML();
    }
  };
  xhttp.open("GET", myParam + ".html", true);
  xhttp.send();
}
