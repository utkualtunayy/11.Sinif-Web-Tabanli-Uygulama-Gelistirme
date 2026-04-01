setInterval(renkdeğistir, 2000)
function renkdeğistir() {
    var alanimiz = document.getElementById("birinci");
    var sayi = Math.round(Math.random() * 10);
    if (sayi == 1) {
        alanimiz.style.backgroundColor = "red"
    }
    else if (sayi == 2) {
        alanimiz.style.backgroundColor = "blue"
    }
    else if (sayi == 3) {
        alanimiz.style.backgroundColor = "orange"
    }
    else if (sayi == 4) {
        alanimiz.style.backgroundColor = "yellow"
    }
    else if (sayi == 5) {
        alanimiz.style.backgroundColor = "gray"
    }
    else if (sayi == 6) {
        alanimiz.style.backgroundColor = "black"
    }
    else if (sayi == 7) {
        alanimiz.style.backgroundColor = "lightblue"
    }
    else if (sayi == 8) {
        alanimiz.style.backgroundColor = "green"
    }
    else if (sayi == 9) {
        alanimiz.style.backgroundColor = "pink"
    }
    else {
        alanimiz.style.backgroundColor = ""
    }


}