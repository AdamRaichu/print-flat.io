// flat.js

setTimeout(function () {
  var b = document.querySelector('[aria-label=print]');
  b.addEventListener("click", function () {
    var c = document.querySelector('.sco-exp.exp-chformat.choose-format_eYXas');
    var p = document.createElement("button");
    p.classList.add("choose-format-item_IBm_p");
    p.style.border = "2px solid darkblue";
    p.style.borderRadius = "5px";
    p.appendChild(document.createElement("img"));
    p.children[0].src = chrome.runtime.getURL("chrome.png");
    p.children[0].height = "16";
    p.children[0].width = "16";
    p.children[0].style.marginRight = "10px";
    p.appendChild(document.createElement("span"));
    p.children[1].innerText = "Print with Chrome Extension";
    p.children[1].style.color = "darkblue";
    c.insertBefore(p, c.children[2]);
    p.addEventListener("click", function () {
      var barlines = document.querySelectorAll(".barline");
      var loaded = false;
      for (c = 0; c < barlines.length; c++) {
        if (barlines[c].childElementCount === 2) {
          var s = document.getElementById("svg-content").innerHTML;
          chrome.runtime.sendMessage({
            pwrd: "flat.io",
            score: s
          });
          loaded = true;
          break;
        }
      }
      if (!loaded) {
        if (confirm("It doesn't look like the entire score is loaded. Continue anyway?")) {
          var s = document.getElementById("svg-content").innerHTML;
          chrome.runtime.sendMessage({
            pwrd: "flat.io",
            score: s
          });
        }
      }
    });
  });
}, 3000);