//dışarıdan girilen üç sayının en büyüğünü bulan pr


function büyükbul(a, b, c) {


    if (a > b && a > c) {
        document.write(a + " " + "sayısı" + b + " " + + "ve" + c + " " + "sayısından büyüktür")
    }
    else if (b > a && b > c) {
        document.write(b + " " + "sayısı" + a + "ve" + b + "sayısından büyüktür")
    }
    else if (c > a && c > b) {
        document.write(c + " " + "sayısı" + a + " " + "ve" + b + " " + "sayısından büyüktür")
    }
    else {
        document.write("Girdiğiniz sayıların hepsi eşittir")
    }
    return
}

//ister üstteki gibi yap ister alttaki gibi yap

function büyükbul(a, b, c) {


    if (a > b && a > c) {
        return a
    }
    else if (b > a && b > c) {
        return b
    }
    else if (c > a && c > b) {
        return c
    }

}
var a = parseInt(prompt("bir sayı giriniz"))
var b = parseInt(prompt("bir sayı giriniz"))
var c = parseInt(prompt("bir sayı giriniz"))
büyükbul(a, b, c)
document.write(büyükbul(a, b, c))