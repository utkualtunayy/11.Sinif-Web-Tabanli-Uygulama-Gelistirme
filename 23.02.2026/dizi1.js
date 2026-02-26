var isim = ["fatma", "murat", "togay", "tuğtekin"];//0 1 2 3
document.write(isim + "<br>");// araya virgül koyarak yazar
document.write(isim[1].bold() + "<br>")

//dizi oluşturmanın 2.yolu
var isim2 = new Array("fatma", "murat" + "<br>")
document.write(isim2)

var meyve
meyve = ["armut", "elma"]
document.write(meyve + "<br>")

//değişkenleri dizi gibi görerek karakter yakalama
var metin = "bugün java da dizi yazmayı öğreniyorum <br>"
document.write(metin + "<br>")
document.write(metin[0] + "<br>")
document.write(metin[1] + "<br>")
document.write(metin[2] + "<br>")
document.write(metin[3] + "<br>")

//metin yazısında kaç tane a harfi vardır
var adet = 0
for (var i = 0; i < 40; i++) {
    if (metin[i] == "a") {
        adet++
    }
}
document.write(adet + " tane a harfi vardır  <br>")

console.log("selam")

