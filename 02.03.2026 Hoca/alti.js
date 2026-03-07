var sonuc=document.getElementsByClassName("bicimlendirme2").length;
document.getElementById("islemsonuc").innerHTML=sonuc;
var a=document.getElementsByClassName("bicimlendirme2");
for(var i=0;i<a.length;i++)
{
    a[i].body.style.backgrounColor="green";
}
a[0].style.backgrounColor="yellow";