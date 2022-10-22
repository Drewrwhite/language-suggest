function hideResults() {
  document.getElementById("result").setAttribute("class", "hidden")
  document.getElementById("cSharp").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("skynet").setAttribute("class", "hidden");
}

window.addEventListener("load", function (event) {

  let form = document.querySelector("form");
  let result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    hideResults();

    const userName = document.getElementById("userName").value;
    const skynet = document.querySelector("input[name='skynet']:checked").value
    const exp = document.querySelector("input[name='exp']:checked").value;
    const simple = document.querySelector("input[name='simple']:checked").value;
    const none = document.querySelector("input[name='none']:checked").value;
    document.querySelector("span#resultName").innerText = userName;
    result.removeAttribute("class", "hidden")


    if (skynet === "no" && exp === "yes" && simple === "no" && none === "no") {
      document.getElementById("cSharp").removeAttribute("class");

    } else if (skynet === "no" && exp === "no" && simple === "yes" && none === "no") {
      document.getElementById("js").removeAttribute("class");

    } else if (skynet === "no" && exp === "yes" && simple == "yes" && none === "no") {
      document.getElementById("js").removeAttribute("class");

    } else if (skynet === "no" && exp === "no" && simple == "no" && none === "yes") {
      document.getElementById("cSharp").removeAttribute("class");

    } else if (skynet === "no" && exp === "yes" && simple == "no" && none === "yes") {
      document.getElementById("cSharp").removeAttribute("class");

    } else if (skynet === "no" && exp === "yes" && simple == "yes" && none === "yes") {
      document.getElementById("python").removeAttribute("class");

    } else if (skynet === "no" && exp === "no" && simple == "yes" && none === "yes") {
      document.getElementById("python").removeAttribute("class");

    } else if (skynet === "yes") {
      document.getElementById("skynet").removeAttribute("class");
    }
  })
})
