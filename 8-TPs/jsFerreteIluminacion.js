/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%. aparte
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%. aparte
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad;
     var marca;
     var descuento;
     var precio=35;
     var importeF;
     var impuesto;
    
    //precioDescuento
    //Marca
    //Cantidad

    cantidad=parseInt(document.getElementById("Cantidad").value);
  
    marca=document.getElementById("Marca").value;

    if (cantidad>=6)
    {
        descuento=((precio*cantidad)*50)/100;
        
    }
    else
    {
        switch (cantidad)
        {
            case 5:
            {
                if (marca=="ArgentinaLuz")
                {
                    descuento=((precio*cantidad)*40)/100;
                
                }
                else
                {
                    descuento=((precio*cantidad)*30)/100;  
                }
                break;
            }
            case 4:
            {
                if (marca=="ArgentinaLuz" ||marca=="FelipeLamparas" )
                {
                    descuento=((precio*cantidad)*25)/100;  
                } 
                else
                {
                    descuento=((precio*cantidad)*20)/100;  
                }
                break;

            }
            case 3:
            {

                switch (marca)
                {
                    case "ArgentinaLuz":
                    {
                        descuento=((precio*cantidad)*15)/100; 
                        break;
                    }
                    case "FelipeLamparas":
                    {
                        descuento=((precio*cantidad)*10)/100; 
                        break;
                    }
                    default:
                    {
                        descuento=((precio*cantidad)*5)/100; 
                        break;

                    }

                }
             break;   
            }
            

            
            
        }
    }

  importeF=(precio*cantidad)-descuento;
  if (importeF>120)
  {
    impuesto=importeF*10/100;

  }
  else
  {
      impuesto=0;
  }
    importeF=importeF+impuesto;
   document.getElementById("precioDescuento").value= "El importe total es " + importeF + " Usted pago X de IIBB." + impuesto;

}
