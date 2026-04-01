var sira = 1
var metinbir = "java script eğitimi"
var metiniki = "php eğitimi"
var metinuc = "html eğitimi"
var metindort = "css eğitimi"
var metinbeş = "xml eğitimi"

function ornek() {
    if (sira == 1) {
        document.title = metinbir;
        sira++;
    }
    else if (sira == 2) {
        document.title = metiniki;
        sira++;
    }
    else if (sira == 3) {
        document.title = metinuc;
        sira++;
    }
    else if (sira == 4) {
        document.title = metindort;
        sira++;
    }
    else if (sira == 5) {
        document.title = metinbeş;
        sira = 1;
    }
    window.setTimeout("ornek()", 2000)
}
ornek();