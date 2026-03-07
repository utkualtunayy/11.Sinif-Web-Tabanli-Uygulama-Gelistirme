var seçenek = prompt("java,css,html bunlardanbirini seçiniz")
if (seçenek == "java") {
    document.getElementById("bir").innerHTML = "javascript eğitim seti".fontcolor("red")
}

else if (seçenek == "css") {
    document.getElementById("bir").innerHTML = "css eğitim seti".fontcolor("blue")
}

else if (seçenek == "html") {
    document.getElementById("bir").innerHTML = "html eğitim seti".fontcolor("yellow")
}

else {
    document.getElementById("bir").innerHTML = "Böyle bir eğitim seti yok".fontcolor("pink")

}

