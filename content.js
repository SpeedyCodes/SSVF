document.getElementById("navNextOuter").addEventListener("click", loadPageActions, false);
document.getElementById("navPrevOuter").addEventListener("click", loadPageActions, false);
kleur = "";
loadPageActions();
function loadPageActions() {
    chrome.storage.sync.get('color', function (data) {
        if (data.color != "") {
            kleur = data.color;
            wachtOpElementen();
        }
        else {
            console.log("Geen kleur geselecteerd. Er wordt dus geen enkel vak verborgen.");
        }
    });
}
function wachtOpElementen() {
    slechteElementen = document.getElementsByClassName(kleur);
    if (slechteElementen.length == 1) {
        setTimeout(wachtOpElementen, 10);
    }
    else {
        verwijderVakken();
    }
}
function verwijderVakken() {
    var lesuren = document.getElementsByClassName(kleur);
    var vakken = [];
    Array.from(lesuren).forEach(function (element) {
        if (!element.classList.contains("lessonFormColorExample")) {
            vak = element.querySelectorAll(".agendaGridBlockContentLeftCourseTitle")[0];
            if (vak) {
                vaknaam = vak.innerHTML.split(",")[0];
            }

            if (!vakken.includes(vaknaam)) {
                vakken.push(vaknaam);
            }
            lesonderwerp = element.querySelectorAll(".agendaGridBlockContentLeftSubject")[0];
            if (lesonderwerp) {
                lesonderwerp.remove();
            }
            taken = element.querySelectorAll(".agendaGridBlockContentRight")[0];
            if (taken) {
                taken.remove();
            }
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
}