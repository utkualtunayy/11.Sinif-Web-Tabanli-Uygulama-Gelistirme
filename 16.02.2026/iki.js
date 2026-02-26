alert("0 kullanmayınız")
var a = parseInt(prompt("bir sayı giriniz"));
var b = parseInt(prompt("bir sayı giriniz"));
if (a > b) {
    for (var i = a; i < b; i++) {
        if (i % 5 == 0 && i % 7 == 0) {
            adet++
        }
    }
    document.write("girdiğiniz sayılar arasında şu kadar sayı var:" + adet + "<br>")

}


else {
    document.write("hatalısın genç")
}

