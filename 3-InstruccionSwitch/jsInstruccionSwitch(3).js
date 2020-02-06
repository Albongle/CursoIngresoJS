function mostrar()
{
    var mesDelAño = document.getElementById('mes').value;
    //var invierno;
    //var antesinv;
    //var despinv;
    //invierno=(mesDelAño=="Julio") || (mesDelAño=="Agosto");
    //antesinv=(mesDelAño=="Enero") || (mesDelAño=="Febrero")|| (mesDelAño=="Marzo")|| (mesDelAño=="Abril")|| (mesDelAño=="Mayo")
    //|| (mesDelAño=="Junio");
    //despinv=(mesDelAño=="Septiembre") || (mesDelAño=="Octubre")|| (mesDelAño=="Noviembre")|| (mesDelAño=="Diciembre");
    
    switch (mesDelAño)
    {
    case "Febrero" :
       
      {
        alert("Este mes no tiene más de 29 días");
        break;
      }
    
    case "Enero" :
    case "Marzo" :
    case "Abril" :
    case "Mayo" :
    case "Junio" :
    case "Julio" :
    case "Agosto" :
    case "Septiembre" :
    case "Octubre" :
    case "Noviembre" :
    case "Diciembre" :

      {
        alert("Este mes tiene 30 o más días");
        break;
      }
    
      
    
    
    
    
    
    }




}


