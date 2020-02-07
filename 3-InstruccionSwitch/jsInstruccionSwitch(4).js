function mostrar()
{
var mesDelAño = document.getElementById('mes').value;
var Dias_28;
var Dias_30;
var Dias_31;
Dias_28=(mesDelAño=="Febrero");
Dias_30=(mesDelAño=="Abril") || (mesDelAño=="Junio")|| (mesDelAño=="Septimbre")|| (mesDelAño=="Noviembre");
Dias_31=(mesDelAño=="Enero") || (mesDelAño=="Marzo")|| (mesDelAño=="Mayo")|| (mesDelAño=="Julio")
|| (mesDelAño=="Octubre") || (mesDelAño=="Diciembre");

switch (true)
{
   case Dias_28 :
   
  {
    alert("si tiene 28 días");
    break;
  }

  case Dias_30 :
  {
    alert("si tiene 30 días");
    break;
  }

  case Dias_31 :
  {
    alert("si tiene 31 días");
    break;
  }





}


}
//FIN DE LA FUNCIÓN