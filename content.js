document.getElementById("navNextOuter").addEventListener("click", loadPageActions, false);
document.getElementById("navPrevOuter").addEventListener("click", loadPageActions, false);
loadPageActions();
function loadPageActions() {
    setTimeout(function () { removeThingies() }, 500);
}
function removeThingies(params) {
    chrome.storage.sync.get('color', function (data) {
        var lesuren = document.getElementsByClassName(data.color);
        var vakken = [];
        Array.from(lesuren).forEach(function (element) {
            if (!element.classList.contains("lessonFormColorExample")) {
                vaknaam = element.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[1].firstElementChild.innerHTML.split(",")[0];
                if (!vakken.includes(vaknaam)) {
                    vakken.push(vaknaam);
                }
                element.firstElementChild.firstElementChild.remove();
            }
        });
        var taken = document.getElementsByClassName("tasksAndMaterials__title");
        Array.from(taken).forEach(function (element) {
            vakken.forEach(function (vak) {
                if (element.innerHTML.includes(vak)) {
                    element.parentElement.parentElement.remove();
                }
            })
        });
    });
}