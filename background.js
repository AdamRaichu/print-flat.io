// background.js

chrome.runtime.onMessage.addListener(function (m) {
  if (m.pwrd === "flat.io") {
    chrome.tabs.create({
      url: `print.html?body=${encodeURIComponent(m.score)}`,
      active: true
    });
  }
});

chrome.runtime.onInstalled.addListener((reason) => {
  console.log(reason);
  chrome.tabs.create({
    url: 'operation.html'
  });
});