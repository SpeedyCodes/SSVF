setTimeout(function () { removeThingies() }, 500);
function removeThingies(params) {
    chrome.storage.sync.get('color', function (data) {
        var nodes = document.getElementsByClassName(data.color);
        Array.from(nodes).forEach(function (element) {
            if (!element.classList.contains("lessonFormColorExample")) {
                element.firstElementChild.firstElementChild.remove();
            }
        });
    });
}