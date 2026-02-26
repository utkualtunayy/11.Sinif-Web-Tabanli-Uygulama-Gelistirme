// var baslangic = parseInt(prompt("baslangic değerini giriniz"));
// var bitiş = parseInt(prompt("Bitiş değerini giriniz"));
var cift = 0, uc = 0;
for (var i = baslangic; i < bitiş; i++) {
    if (i % 2 == 0) {
        cift = cift + i * i
    }
    if (i % 3 == 0) {
        uc += i * i
    }
}
document.write("<br>")
document.write("çift sayıların toplamı=" + cift + "<br>")
document.write("3e bölünen sayıların toplamı=" + uc + "<br>")


