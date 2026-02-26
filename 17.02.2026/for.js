var a = parseInt(prompt("⭐Bir sayı giriniz:"))
for (i = 0; i <= a; i++) {
    for (var j = 0; j < i; j++) {
        if (i % 2 == 0) {
            document.write("*".fontcolor("red"))

        }
        else {
            document.write("*".fontcolor("blue"))
        }
    }
    document.write("<br>")
}
