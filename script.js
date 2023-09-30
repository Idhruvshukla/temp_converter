



const valCel= document.querySelector("#celsius");
const valinput = document.querySelector("#degree");
const type = document.querySelector("#temp-type");
const btn = document.querySelector("#convert-btn");
 var celtemp;
btn.addEventListener("click",()=>{

    var  val = valinput.value;


   tempType = type.value;
   console.log(typeof "tempType");

  if(tempType.localeCompare("kelvin")==0)
  {
    celtemp=val-273.15;
   
    valCel.textContent= parseFloat(celtemp).toFixed(4);

  }
  else{
    celtemp=(val-32)*(5/9);
    valCel.textContent= parseFloat(celtemp).toFixed(4);
  }



})

