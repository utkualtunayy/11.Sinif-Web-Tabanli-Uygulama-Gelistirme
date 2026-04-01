//girilen iki sayı arasında 3 ile 7 ye tam bölünebilen kaç adet sayı vardır
function hesapla() {
    var adet = 0;
    var a = parseInt(document.getElementById("sayı1").value);
    var b = parseInt(document.getElementById("sayı2").value);
    for (var i = a; i <= b; i++) {
        if (i % 3 == 0 && i % 7 == 0) {
            adet++
        }
    }
    document.getElementById("sonuc").innerHTML = ("Adet sayısı: " + adet)
}

console.log("WOW")

