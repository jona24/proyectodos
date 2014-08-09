
function prepareBinding() 
{    
        $("#guardar").click(function()
      { 
         Add();
         lista();
      });
       $("#borrar").click(function()
      { 
         borrar();
      });
 }

function Add()
    { 
      
      var nombre=document.getElementById("nombre").value;
      var id_carrera = document.getElementById("id_carrera").value;
   		var carrera = {"nombre":nombre, "id_carrera":id_carrera};
      		if (carreras==null) 
   			{
   				carreras=[];
   			}
          carreras.push(carrera);
          localStorage.setItem('carreras',JSON.stringify(carreras));
          		
   		alert("carrera creada con exito" );
    } 
   
function lista()
    {  

       
      $("#tblList").html("");
       $("#tblList").html(
         "<thead>"+ 
         "   <tr>"+ 
         "   <th></th>"+
         "   <th>ID CARRERA </th>"+ 
         "   <th> NOMBRE</th>"+ 
         "   </tr>"+ 
         "</thead>"+ 
         "<tbody>"+ 
         "</tbody>" );
       var traercarreras = JSON.parse(localStorage.getItem('carreras'));
           for(var i=0 ; i<traercarreras.length;i++)
            { 
              var carre = traercarreras[i];
               $("#tblList tbody").append(
                "<tr>"+
                "  <td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" + 
                "  <td>"+carre.id_carrera+"</td>" + 
                "  <td>"+carre.nombre+"</td>" +
                "</tr>");
             }
     } 
$(function()
{ 
var operation = "A"; //"A"=Adding; "E"=Editing 
var selected_index = -1; //Index of the selected list item 
var carreras = localStorage.getItem("carreras");//Retrieve the stored data 
carreras = JSON.parse(carreras); //Converts string to object 
if(carreras == null) //If there is no data, initialize an empty array 
carreras = []; 
}); 