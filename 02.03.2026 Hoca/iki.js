var secenek=prompt("java/css/html bunlardan birini seçiniz...");
if(secenek=="java")
{
    document.getElementById("bir").innerHTML="java script eğitim seti";
}
else if(secenek=="css")
{
    document.getElementById("bir").innerHTML="css eğitim seti";
}
else if(secenek=="html")
{
    document.getElementById("bir").innerHTML="html eğitim seti";
}
else
{
   document.getElementById("bir").innerHTML="böyle bir eğitim seti bulunamadı"; 
}