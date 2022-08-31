document.addEventListener("DOMContentLoaded", function () {
  $.get("changelog.md", function (md) {
    var converter = new showdown.Converter();
    document.getElementById("changelog").innerHTML = converter.makeHtml(md);
  });
});