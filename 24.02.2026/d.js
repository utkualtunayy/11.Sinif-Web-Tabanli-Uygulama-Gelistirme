//5 elemanlı bir dizi ,1 ile 50 arasında bilgisayar rasgele sayı ureticek bu sayılardan 20 den büyük ve tek olan ve kaç
//tane olduğunu bulan pr

var rasgele = new Array(5)
var adet = 0;
for (var i = 0; i < 5; i++) {
    rasgele[i] = Math.floor(math.random() * 51) //random sayı alıyorız

    document.write(rasgele[i]); //randomdan gelen sayılar
    if (rasgele[i] < 20 && rasgele[i] % 2 != 0) //işlem
    {
        adet++
    }
}
document.write(rasgele + "<br>")
document.write("istenilen sayı adeti" + adet + "<br>")

