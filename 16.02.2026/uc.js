var a = 7;
var b = 786;
var adet = 0;

for (var i = a; i < b; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 11 == 0) {
        adet++
    }
}
document.write("Girdiğiniz sayılar arasında şu kadar sayı var:" + adet + "<br>")



