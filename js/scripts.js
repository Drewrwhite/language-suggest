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
    const userName = document.querySelector("input#userName").value
    const noSkynet = document.querySelector("input[name='noSkynet']:checked").value;
    const noExp = document.querySelector("input[name='noExp']:checked").value;
    const noSimple = document.querySelector("input[name='noSimple']:checked").value;
    const noNull = document.querySelector("input[name='noNull']:checked").value;
    document.querySelector("span#resultName").innerText = userName;
    summary.removeAttribute("class");

    if (noSimple === false && noExp === true && noSkynet === true) {
      document.getElementById("cSharp").removeAttribute("class");

    } else if (noSimple === true && noExp === false && noSkynet === true) {
      document.getElementById("js").removeAttribute("class");

    } else if (noSimple === true && noNull === true && noSkynet === true) {
      document.getElementById("python").removeAttribute("class");

    } else if (noSkynet === false) {
      document.getElementById("skynet").removeAttribute("class");

    }
  })
})