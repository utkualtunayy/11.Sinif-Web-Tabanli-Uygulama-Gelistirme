// girilen iki sayı ve işleme göre 4 işlem yapan pr

function hesaplama(a, b, islem) {
    var sonuc;

    if (islem == "+") {
        sonuc = a + b;
    }

    else if (islem == "-") {
        sonuc = a - b;
    }

    else if (islem == "*") {
        sonuc = a * b;
    }

    else if (islem == "/") {
        sonuc = a / b;
    }

    return sonuc
}
var bir = parseInt(prompt("birinci sayıyı giriniz:"));
var iki = parseInt(prompt("ikinci sayıyı giriniz:"));
var islem = prompt("işlem giriniz (+,-,*,/):");
hesaplama(bir, iki, islem)
document.write("işlemin sonucu" + sonuc)
