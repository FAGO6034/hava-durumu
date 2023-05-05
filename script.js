const url ="https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey="8fdafcbc633e6ab2de61c4f6a89c1390";

const keyPress= (e)=>{
    if(e.keyCode=='13')
    {
       var query=`${url}${sehirAdi.value}&appid=${apiKey}&units=metric&lang=tr`;
       
       fetch(query)
       .then(hava=>{
        return hava.json();
       })
       .then (sonuclariGoster)

       console.log(query);
    }
 
}

const sonuclariGoster=(sonuc)=>{
    console.log(sonuc);
    var sehirAdi=document.querySelector('.city');
    sehirAdi.innerText=sonuc.name;

    var sicaklik=document.querySelector('.temp');
    sicaklik.innerText=sonuc.main.temp;



}

const sehirAdi=document.getElementById("searchBar");
sehirAdi.addEventListener('keypress',keyPress);

