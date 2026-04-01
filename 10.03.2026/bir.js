//kullanıcı adı ve parola alınıcak eğer değerler yazılmışsa alert ile hata mesajı vericek parola 7 
//karakterden az ise hata mesajı verir

function kontrol() {
    var adi = document.getElementById("adi").value;
    var p = document.getElementById("parola").value;
    if (adi == "") {
        alert("lütfen adınızı giriniz")
    }
    if (p.length == 0) {
        alert("lütfen parola  giriniz")
    }
    else if (p.length < 7) {
        alert("parola 7 karakterden az olanaz")
    }
}
function yaz() {
    var adi = document.getElementById("adi").value;
    var p = document.getElementById("parola").value;
    document.writeln(adi);
    document.writeln(p);
}