function hideResults() {
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("skynet").setAttribute("class", "hidden");
}

window.addEventListener("load", function (event) {

  const form = document.querySelector("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    hideResults();
    const userName = document.querySelector("input#userName").value;
    const skynet = document.querySelector("input[name='skynet']:checked").value;
    const exp = document.querySelector("input[name='exp']:checked").value;
    const simple = document.querySelector("input[name='simple']:checked").value;
    const none = document.querySelector("input[name='none']:checked").value;
    document.querySelector("span#resultName").innerText = userName;


    if (noSimple === false && noExp === true && noSkynet === true) {
      document.getElementById("cSharp").removeAttribute("class", "hidden");

    } else if (noSimple === true && noExp === false && noSkynet === true) {
      document.getElementById("js").removeAttribute("class", "hidden");

    } else if (noSimple === true && noNull === true && noSkynet === true) {
      document.getElementById("python").removeAttribute("class", "hidden");

    } else if (noSkynet === false) {
      document.getElementById("skynet").removeAttribute("class", "hidden");

    }
  })
})