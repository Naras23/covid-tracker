let div = document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");



 
var button= document.createElement("button");
button.setAttribute("type","button");
 button.classList.add("btn","btn-primary");
 button.innerHTML="Search";
 button.addEventListener("click",foo);

//  for activecase
let active= document.createElement("div");
active.setAttribute("id","active");

// for recovered case
let recovered= document.createElement("div");
recovered.setAttribute("id","recovered");

// for deaths case
let deaths= document.createElement("div");
deaths.setAttribute("id","deaths");

div.append(input,button,active,recovered,deaths);
document.body.append(div);



async function foo(){
    let countryname=document.getElementById("country").value;
    console.log(countryname);
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let res= await fetch(url);
    let res1=await res.json();
    console.log(res1);
    let index=res1.length-1;
    console.log(res1[index].Active);
    console.log(res1[index].Recovered);
    console.log(res1[index].Deaths);
    active.innerHTML=`Total Active Cases : ${(res1[index].Active)}`;
    recovered.innerHTML=`Total Recovered Cases:${(res1[index].Recovered)}`;
    deaths.innerHTML=`Total DeathsCases:${(res1[index].Deaths)}`;
  
}
    
    
 



