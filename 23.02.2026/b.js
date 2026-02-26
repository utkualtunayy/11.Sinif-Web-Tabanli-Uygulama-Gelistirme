//1 ile 1000 arasındaki sayılardan 7 ye böllünebilen çift sayıların toplamından yine aynı aralıkteki sayılardan 
//bu sefer 3 e bölünemeyen tek sayıların toplamını çıkaran program 

function buk() {
    var toplaçift = 0, toplatek = 0;
    for (i = 1; i <= 1000; i++) { // 1 ile 1000 arasındaki sayılar
        if (i % 7 == 0 && i % 2 == 0) {
            toplaçift = toplaçift + i
        }
        if (i % 3 != 0 && i % 2 != 0) {
            toplatek += i
        }

    }
    islem = toplaçift - toplatek
    document.write("7 ye bölünen çift sayılar " + toplaçift + " | 3 e bölünemeyen tek sayılar " + toplatek + " | fark= " + islem)
}
buk();


