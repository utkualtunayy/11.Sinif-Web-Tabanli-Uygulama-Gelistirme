//5 kişinin maaşını dışarıdan alan ve girilen maaşlardan 1000 tl nin aldında olanları %20 arttırıp daha sonra maaşları 
//ekrana yazdıran pr

//dışarıdan mmaş aldık ve dizi oluşturduk
var maas = new Array(5)

for (i = 0; i < 5; i++) {
    maas[i] = parseInt(prompt((i + 1) + "maaşınızı giriniz"))

    //işlemi yapıyoruz
    if (maas[i] < 1000) {
        maas[i] = maas[i] + maas[i] * 0.20
    }
}
document.write(maas)