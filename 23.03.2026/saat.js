function guncelle() {
    var zaman = new Date()
    var saatdeğeri = zaman.getHours()
    var dakika = zaman.getMinutes()
    var saniye = zaman.getSeconds()
    document.getElementById("saat").innerHTML = ekle(saatdeğeri) + " " + ekle(dakika) + " " + ekle(saniye)
}
setInterval(guncelle, 1000)

function ekle(deger) {
    var stringyap = deger.toString()
    var uzunluk = stringyap.length;
    if (uzunluk == 1) {
        return "0" + stringyap
    }
    else {
        return stringyap
    }

}