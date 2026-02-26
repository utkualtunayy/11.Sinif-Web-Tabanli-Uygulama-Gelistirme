var metin = "JavaScript öğreniyorum";
document.write(metin.bold() + "<br>");
var sonuc = metin.indexOf("e"); //Harf buluyor
document.write("e harfinin indexi:" + sonuc + "<br>")
document.write("<br>")

var sonuc2 = metin.indexOf("Script"); //kelimeyi buluyor
document.write("Script kelimesinin başlangıç indexi:" + sonuc2 + "<br>")
document.write("<br>")

var sonuc3 = metin.indexOf("Script"); //hece buluyor
document.write("ve hecesi kaçıncı indexte :" + sonuc3 + " " + "indexte." + "<br>")
document.write("<br>")

var sonuc4 = metin.indexOf("e", 15); //harf buluyor
document.write("e harfi kaçıncı indexte :" + sonuc4 + " " + "indexte." + "<br>") //Bulamazsa -1 diyor

var sonuc5 = metin.indexOf("r", 15); //harf buluyor
document.write("r harfi kaçıncı indexte :" + sonuc5 + " " + "indexte." + "<br>")
document.write("<br>")




