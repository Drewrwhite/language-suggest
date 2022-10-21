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
    result.removeAttribute("class", "hidden")


    if (skynet === "no" && exp === "yes" && simple === "no") {
      document.getElementById("cSharp").removeAttribute("class");

    } else if (skynet === "no" && simple === "yes" && exp === "no" && none === "yes") {
      document.getElementById("js").removeAttribute("class");

    } else if (skynet === "no" && exp = "no" && simple === "yes" && none === "no") {
    document.getElementById("python").removeAttribute("class");

  } else if (skynet === "yes") {
    document.getElementById("skynet").removeAttribute("class");

  }
})
})