function yaz() {
    var a = document.getElementById("adi").value;
    var b = document.getElementById("mail").value;
    var meyve = document.getElementById("meyve").value;
    var cinsiyet = document.querySelector("input[name='cins']:checked").value


    document.writeln("<b> Adınız ve Soyadınız: </b>" + a + "<br>");
    document.writeln("<b> E-mailiniz: </b>" + b + "<br>");
    document.writeln("<b> Seçtiğiniz meyve: </b>" + meyve + "<br>")
    document.writeln("<b>Cinsiyetiniz: </b>" + cinsiyet + "<br>");

}