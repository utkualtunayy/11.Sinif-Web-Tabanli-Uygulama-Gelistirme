function islem(){
    var sonuc=document.getElementsByName("ilgialanlari");
    for(var i=0;i<sonuc.length;i++)
    {
        sonuc[i].checked=true;
    }
}
function kaldir(){
    var sonuc=document.getElementsByName("ilgialanlari");
    for(var i=0;i<sonuc.length;i++)
    {
        sonuc[i].checked=false;
    }
}