function hideResults() {
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("skynet").setAttribute("class", "hidden");
}


window.addEventListener("load", function () {

  const form = document.querySelector("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    hideResults();
