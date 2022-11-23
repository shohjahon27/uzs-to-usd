const uzs = document.querySelector("#uzs"),
  usd = document.querySelector("#usd");

uzs.addEventListener("input", (e) => {
  const request = new XMLHttpRequest();

  request.open("GET", "json/current.json");
  request.setRequestHeader("content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status == 200) {
      const data = JSON.parse(request.response);
      usd.value = (+uzs.value / data.current.usd).toFixed(2);
    } else {
      usd.value = `${(usd.style.color = `red`).slice(0, 0)} SOMETHING WENT WRONG!`;
    }
  });

  if (usd.value == "NaN") {
    alert("please enter a number only!");
  } else if ( usd.value == "" ) {
      return alert("SORRY, server is not responding");
  }
});
