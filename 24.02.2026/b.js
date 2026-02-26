//54,45,15,94,1,4,48,67,75,25 notlarını bir diziye aktar en büyüğü en küçüğü ortalamayı bul 

var notlar = [54, 45, 15, 94, 1, 4, 48, 67, 75, 25]
var enbuyuk, enkucuk, ortalama, toplam = 0;
enbuyuk = notlar[0]
enkucuk = notlar[0]
for (var i = 0; i < notlar.length; i++) {
    toplam = toplam + notlar[i];
    if (enbuyuk < notlar[i]) {
        enbuyuk = notlar[i]
    }
    if (enkucuk > notlar[i]) {
        enkucuk = notlar[i]
    }
}
ortalama = toplam / notlar.length;
document.write(notlar + "<br>")
document.write("en büyük= " + enbuyuk + "<br>")
document.write("en kucuk= " + enkucuk + "<br>")
document.write("ortalama= " + ortalama + "<br>")