var isim = "Utku";
var isim2 = isim.repeat(4)
document.writeln(isim2)

document.writeln("<br>")
document.writeln("<br>")
var bir = true //Boolean
var iki = false //Boolean
var uc = "8" //String
var dort = "8.45" //String
document.writeln(typeof (bir) + ":" + bir + ("<br>"));
document.writeln(typeof (iki) + ":" + iki + ("<br>"));
document.writeln(typeof (uc) + ":" + uc + ("<br>"));
document.writeln(typeof (dort) + ":" + dort + ("<br>"));

document.writeln("<br>")
var a = Number(uc)
var b = Number(dort)
document.writeln(typeof (a) + ":" + a + "<br>")
document.writeln(typeof (b) + ":" + b + "<br>")

document.writeln("<br>")
document.writeln(" <b>indexof() </b> kullanimi<br>");
var metin = ("JavaScript Eğitimi Aldi");
var sonuc = metin.indexOf("E");
document.writeln("E harfi  " + sonuc + " indexlidir")

