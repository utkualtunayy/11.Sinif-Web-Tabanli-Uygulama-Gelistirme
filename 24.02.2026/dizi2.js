var metin = "javascript öğreniyorum ";
var sonuc;
for (sonuc in metin) {
    if (sonuc % 2 == 0) {
        document.write(metin[sonuc])
    }
}