function islem() {
    var sonuc = document.getElementById("ilgialanlari");
    for (var i = 0; i < sonuc.length; i++) {
        sonuc[i].checked = true;
    }
}

function sil() {
    var sonuc = document.getElementById("ilgialanlari")
    for (i = 0; sonuc.length; i++) {
        sonuc[i].checked = false;
    }
}