//evli ise %3 bekar ise%2;çoçuk sıfır ise %0 ,1 ise %1 ,2 ise %2 ,3 ise %4 her dil için %2 artış sağlamaktadır
function hesapla() {
    var yeni, z1, z2, z3;
    var maas = parseInt(document.getElementById("maas").value);
    var medeni = document.querySelector("input[name='medeni']:checked").value;
    if (medeni == "evli") {
        z1 = maas * 0.03 + maas
    }
    else if (medeni == "bekar") {
        z1 = maas * 0.02 + maas
    }
    else {
        alert("lütfen medeni halinizi seçiniz")
    }
    var cocuk = parseInt(document.querySelector("input[name='cocuk']:checked").value);
    if (cocuk == 0) {
        z2 = 0
    }
    else if (cocuk == 1) {
        z2 = maas + maas * 0.01
    }
    else if (cocuk == 2) {
        z2 = maas + maas * 0.02
    }
    else if (cocuk == 3) {
        z2 = maas + maas * 0.03
    }
    else {
        alert("lütfen çoçuk sayısı seçiniz")
    }

    var dil = document.querySelectorAll("input[name='dil']:checked").value; //Burası liste döndürür
    var diladet = dil.length;
    z3 = (dil * 0.02) * diladet;
    yeni = maas + z1 + z2 + z3;
    document.getElementById("ymaas").innerHTML = yeni;

}
console.log("SELAMLAR")
