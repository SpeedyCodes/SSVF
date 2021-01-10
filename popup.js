var colors = document.getElementsByClassName("lessonFormColorExample");
Array.from(colors).forEach(function (element) {
  element.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let newColor = element.classList[1];
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: "chrome.storage.sync.set({ color: '" + newColor + "' }, function () {window.location.reload();}); "
        });
    });
  };
});
