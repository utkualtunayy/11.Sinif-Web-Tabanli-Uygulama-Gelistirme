//klavyeden girilen bir ingilizce cümledeki sesli ve sessiz harflerin sayısını ekranda görünteleyen pr

var metin = prompt("lütfen cümle giriniz:")
var sesli = 0, sessiz = 0, sonuc;
for (sonuc in metin) {
    if (metin[sonuc] == "a" || metin[sonuc] == "e" || metin[sonuc] == "o" || metin[sonuc] == "ö" || metin[sonuc] == "u" || metin[sonuc] == "ü" || metin[sonuc] == "ı" || metin[sonuc] == "i") {
        sesli++
    }

    else {
        sessiz++
    }
}
document.write("sesli: " + sesli + "sessiz: " + sessiz)

console.log("❤️❤️❤️❤️emre");