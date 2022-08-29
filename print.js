// print.js

const params = Object.fromEntries(new URLSearchParams(location.search));

document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML = params.body;
  document.querySelector(".tear-drop").remove();
  print();
});