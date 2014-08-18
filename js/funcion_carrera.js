    var selected_index = -1; //Index of the selected list item 
    var cambiar= ""
   function cargarlista()
{
var carreras = JSON.parse(localStorage.getItem("carreras"));
debugger;
 		$("#tblListcarrera").html(""); 
  $("#tblListcarrera").html(
	 "<thead>"+ 
	       "	<tr>"+
	       "   	<th></th>"+
	         "	<th>NOMBRE CARRERA</th>"+
	         "	<th>ID CARRERA</th>"+ 
	         "	</tr>"+ 
       "</thead>"+ 
	     "<tbody>"+
	     "</tbody>" 
        );
       
       if(carreras == null) //If there is no data, initialize an empty array 
          carreras = []; 
	    for(var i=0;i<carreras.length;i++)
        {
              var cli =carreras[i]; 
	       		$("#tblListcarrera tbody").append("<tr>"+ 
	       			 "	<td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" +
               "	<td>"+cli.nombre_carrera+"</td>" + 
               "	<td>"+cli.id_carrera+"</td>" + 
                 "  </tr>");
	    }
}
function prepareBindig()
{
	$("#btnsave").click(function()
	{
    debugger;
    if (cambiar=="ok") 
    {
       alert("se modificara un usuario no se creara uno nuevo");
   editar();
    }
    else 
    {
     agregar();
    }
		
  	});
	$(".btnDelete").click(function()
	{
        selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
        borrar();
        cargarlista();
	});
  $("#btnmodificar").click(function()
  {
    debugger;
    if (cambiar=="ok") 
    {
   editar();
    }
    else 
    {
      alert("se creara un usuario nuevo no selecciono ninguno");
      agregar();
    }
        
       cambiar="";
  });
	$(".btnEdit").click(function()
	{
    debugger;
      var arreglo = JSON.parse(localStorage.getItem("carreras"));
      selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
      var cli = arreglo [selected_index];
      $("#txtnombre").val(cli.nombre_carrera);
      $("#id_carrera").val(cli.id_carrera);
      $("#txtnombre").focus(); 
      cambiar ="ok";
	});
}
function borrar()
{
  debugger;
     var datos=JSON.parse(localStorage.getItem("carreras"));
     datos.splice(selected_index, 1);
     localStorage.setItem("carreras", JSON.stringify(datos));
     alert("carrera borrada."); 
     document.location.href='nuevacarrera.html';
}
function agregar()
{
	debugger;
	  		  var nombre = document.getElementById("txtnombre").value;
          var idcarrera = document.getElementById("id_carrera").value;
   		  	var carrera = {"nombre_carrera":nombre, "id_carrera":idcarrera};
          var carreras=JSON.parse(localStorage.getItem("carreras"));
         if (carreras==null) 
   					{
   						carreras=[];
   					}
          carreras.push(carrera);
          localStorage.setItem('carreras',JSON.stringify(carreras));
          		
   			 cargarlista();
        alert("carrera agregado");
    document.location.href='nuevacarrera.html';
 
}
function editar()
{
debugger;
       var carreras = JSON.parse(localStorage.getItem('carreras'));
        var nombre=document.getElementById("txtnombre").value;
        var idcarrera = document.getElementById("id_carrera").value;
        var carrera = {"nombre_carrera":nombre, "id_carrera":idcarrera};
    carreras[selected_index] = carrera;//Alter the selected item on the table 
     localStorage.setItem("carreras", JSON.stringify(carreras));
     alert("carrera modificada") ;
      document.location.href='nuevacarrera.html';
}