// x2 sayı alınıp (ana pr) ikinci sayı birinci sayının katı olup olmadığını veren fonk. 
function hesaplama(a, b) {
    if (b % a == 0) {
        document.write(b + "sayısı" + a + "nın katıdır")
    }
    else {
        document.write(b + "sayısı" + a + "nın katı değidir")
    }
}
var bir = parseInt(prompt("birinci sayıyı giriniz"))
var iki = parseInt(prompt("ikici sayıyı giriniz"))
hesaplama(bir, iki)
