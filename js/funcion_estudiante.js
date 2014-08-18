
var selected_index = -1; //Index of the selected list item 
    var cambiar= ""
    function cargarlista()
{ 
  debugger;
     $("#tblList").html(""); 
  $("#tblList").html(
   "<thead>"+ 
      "     <tr>"+
         "    <th></th>"+
           "  <th>NOMBRE</th>"+
           "  <th>APELLIDO1</th>"+ 
           "  <th>APELLIDO2</th>"+ 
           "  <th>CEDULA</th>"+ 
           "  <th>CARRERA</th>"+ 
           "  <th>EMAIL</th>"+
           "  <th>FOTO</th>"+ 
         "  </tr>"+ 
       "</thead>"+ 
       "<tbody>"+
       "</tbody>" 
        );
        var estudiantes = localStorage.getItem("estudiantes");
        var estparse = JSON.parse(estudiantes);
       if(estparse == null) //If there is no data, initialize an empty array 
          estparse = []; 
      for(var i=0;i<estparse.length;i++)
        {
                   debugger;
              var foto=JSON.stringify(estparse[i].foto);
              var direccion="";
               var contador=15;
              for (var e=0;e<foto.length-1;e++) 
                  {
                    if (e>=contador) 
                      {
                      direccion = direccion+foto[e];
                      }
                  }
                  var cli=estparse[i];
                  direccion="img/"+direccion;
            $("#tblList tbody").append("<tr>"+ 
               "  <td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" +
               "  <td>"+cli.nombre+"</td>" + 
               "  <td>"+cli.apellido1+"</td>" + 
               "  <td>"+cli.apellido2+"</td>" + 
               "  <td>"+cli.cedula+"</td>" + 
               "  <td>"+cli.carrera+"</td>" + 
               "  <td>"+cli.correo+"</td>" + 
               "  <td><img src="+direccion+"></td>" +
          "  </tr>");
           }
        } 
 function prepareBinding()
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
       var estudiantes =localStorage.getItem("estudiantes")
      var estuparse = JSON.parse(estudiantes);
      selected_index = parseInt($(this).attr("alt").replace("Edit", "")); 
      var cli = estuparse [selected_index];
       $("#txtnombre").val(cli.nombre);
        $("#txtapellido1").val(cli.apellido1); 
        $("#txtapellido2").val(cli.apellido2);
        $("#txtcedula").val(cli.cedula);
        $("#combo").val(cli.carrera);
        $("#txtcorreo").val(cli.correo);
        $("#txtcedula").attr("readonly","readonly"); 
        $("#txtnombre").focus();
      cambiar = "ok";
       }); 
 }
   
 function agregar()
 {
 	debugger;
        var nombre=document.getElementById("txtnombre").value;
        var ape1 = document.getElementById("txtapellido1").value;
        var ape2 = document.getElementById("txtapellido2").value;
        var ced = document.getElementById("txtcedula").value;
        var carre = document.getElementById("combo").value;
        var mail = document.getElementById("txtcorreo").value;
        var img = document.getElementById("txtfoto").value;
        var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
   		  var estudiante = {"nombre":nombre, "apellido1":ape1,"apellido2":ape2,"cedula":ced,"carrera":carre,"correo":mail,"foto":img};
     if (estudiantes==null) 
   			{
   				estudiantes=[];
   			}
          estudiantes.push(estudiante);
          localStorage.setItem('estudiantes',JSON.stringify(estudiantes));
          		
   		alert("estudiante creado con exito" );
 
      document.location.href='estudiantes.html';
 }


function editar()
{ 
  debugger;
       var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
        var nombre=document.getElementById("txtnombre").value;
        var ape1 = document.getElementById("txtapellido1").value;
        var ape2 = document.getElementById("txtapellido2").value;
        var ced = document.getElementById("txtcedula").value;
        var carre = document.getElementById("combo").value;
        var mail = document.getElementById("txtcorreo").value;
        var img = document.getElementById("txtfoto").value;
      var estudiante = {"nombre":nombre, "apellido1":ape1,"apellido2":ape2,"cedula":ced,"carrera":carre,"correo":mail,"foto":img};
    estudiantes[selected_index] = estudiante;//Alter the selected item on the table 
     localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
     alert("estudiante modificado") ;
     document.location.href='estudiantes.html';
  } 
function borrar()

{ 
    var datos=JSON.parse(localStorage.getItem("estudiantes"));
     datos.splice(selected_index, 1);
     localStorage.setItem("estudiantes", JSON.stringify(datos));
     alert("estudiante borrado."); 
     document.location.href='estudiantes.html';

} 
function cargarcombo()
{
  debugger;
  var string="";
  var carreras = JSON.parse(localStorage.getItem("carreras"));
       if(carreras == null) //If there is no data, initialize an empty array 
          carreras = []; 
      for(var i=0;i<carreras.length;i++)
        {
              var cli =carreras[i]; 
              string = string+"<option value ='"+cli.nombre_carrera+"'>"+cli.nombre_carrera+"</option>"
           
        }

    $("#combo").html(""); 
    $("#combo").html(
       "<select>"+
       "<option selected>---</option>"+
       string+
       "</select>"
        );
       
}

