   var operation = "A"; //"A"=Adding; "E"=Editing 
    var selected_index = -1; //Index of the selected list item 
    var estudiantes = localStorage.getItem("estudiantes");
$(function()
{ 
   
    estudiantes = JSON.parse(estudiantes); //Converts string to object 
        if(estudiantes == null) //If there is no data, initialize an empty array 
          estudiantes = []; 
}); 
 function prepareBinding()
 {

 	 $("#nuevo_estudiante").bind("submit",function()
        { 
          debugger;

        if(operation == "A")
        {
          nuevo(); 
        } 
        if(operation == "E")
        edit();              
       }); 


   $(".btnDelete").bind("click", function()
    { 
      selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
       borrar(); 
       list(); 
     }); 



   $(".btnEdit").bind("click", function()
    {
      debugger;
        operation = "E";
      var arreglo = JSON.parse(localStorage.getItem("estudiantes"));
      selected_index = parseInt($(this).attr("alt").replace("Edit", "")); 
      var cli = arreglo [selected_index];
       $("#txtnombre").val(cli.nombre);
        $("#txtapellido1").val(cli.apellido1); 
        $("#txtapellido2").val(cli.apellido2);
        $("#txtcedula").val(cli.cedula);
        $("#txtcarrera").val(cli.carrera);
        $("#txtcorreo").val(cli.correo);
        $("#txtfoto").val(cli.foto);
       $("#txtID").attr("readonly","readonly"); 
      $("#txtName").focus();
       }); 

 }
 
  var operation = "A"; //"A"=Adding; "E"=Editing 
  var selected_index = -1; //Index of the selected list item 
   $(function()
{ 
       
}); 
 function nuevo()
 {
 	
        var nombre=document.getElementById("txtnombre").value;
        var ape1 = document.getElementById("txtapellido1").value;
        var ape2 = document.getElementById("txtapellido2").value;
        var ced = document.getElementById("txtcedula").value;
        var carre = document.getElementById("txtcarrera").value;
        var mail = document.getElementById("txtcorreo").value;
        var img = document.getElementById("txtfoto").value;
   		  var estudiante = {"nombre":nombre, "apellido1":ape1,"apellido2":ape2,"cedula":ced,"carrera":carre,"correo":mail,"foto":img};
     if (estudiantes==null) 
   			{
   				estudiantes=[];
   			}
          estudiantes.push(estudiante);
          localStorage.setItem('estudiantes',JSON.stringify(estudiantes));
          		
   		alert("estudiante creado con exito" );
    

 }
 function cargar_estudiantes()
 {
  debugger;
 	var datos=JSON.parse(localStorage.getItem("estudiantes"));
    var html="<table id=tabla class=table>";
      html+="<h2> Carreras</h2>";
        html+="<tr id=row0 style='background-color: #0099CC;color:white'>";
          html+="<td><strong>Nombre</strong></td>";
          html+="<td><strong>APELLIDO 1 </strong></td>";
          html+="<td><strong>APELLIDO 2 </strong></td>";
          html+="<td><strong>CEDULA</strong></td>";
          html+="<td><strong>CARRERA</strong></td>";
          html+="<td><strong>CORREO</strong></td>";
           html+="<td><strong>FOTO</strong></td>";
        html+="</tr>";
  for(var i=0;i<datos.length;i++){
    if(datos[i]==null){

    }
    else{
      html+="<tr id=row"+(i+1)+" style='color:#0099CC'>";
        html+="<td>"+datos[i].nombre+"</td>";
        html+="<td>"+datos[i].apellido1+"</td>";
        html+="<td>"+datos[i].apellido2+"</td>";
        html+="<td>"+datos[i].cedula+"</td>";
        html+="<td>"+datos[i].carrera+"</td>";
        html+="<td>"+datos[i].correo+"</td>";
        html+="<td><img src='"+datos[i].foto+"'></td>";
        html+="<td><button class='buttonedit btn btn-warning' data-carreraeditar="+datos[i].cedula+">Editar</button>"
        html+="<td><button class='buttondelete btn btn-danger' data-carreraborrar="+datos[i].cedula+">Eliminar</button>"
    }
  }
  html=html+"</table>";
  document.getElementById('tabla').innerHTML =html;
 }
function list()
{	
  var estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
 		$("#tblList").html(""); 
  $("#tblList").html(
	 "<thead>"+ 
	    "	    <tr>"+
	       "   	<th></th>"+
	         "	<th>NOMBRE</th>"+
	         "	<th>APELLIDO1</th>"+ 
	         "	<th>APELLIDO2</th>"+ 
	         "	<th>CEDULA</th>"+ 
	         "	<th>CARRERA</th>"+ 
	         "	<th>EMAIL</th>"+
	         "	<th>FOTO</th>"+ 
	       "	</tr>"+ 
       "</thead>"+ 
	     "<tbody>"+
	     "</tbody>" 
        );
       
       if(estudiantes == null) //If there is no data, initialize an empty array 
          estudiantes = []; 
	    for(var i=0;i<estudiantes.length;i++)
        {
              var cli =estudiantes[i]; 
	       		$("#tblList tbody").append("<tr>"+ 
	       			 "	<td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" +
               "	<td>"+cli.nombre+"</td>" + 
               "	<td>"+cli.apellido1+"</td>" + 
               "	<td>"+cli.apellido2+"</td>" + 
               "  <td>"+cli.cedula+"</td>" + 
               "  <td>"+cli.carrera+"</td>" + 
               "  <td>"+cli.correo+"</td>" + 
               "  <td>"+cli.foto+"</td>" +
          "  </tr>");
	       	 }
} 
function edit()
{ 
  debugger;
       var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
        var nombre=document.getElementById("txtnombre").value;
        var ape1 = document.getElementById("txtapellido1").value;
        var ape2 = document.getElementById("txtapellido2").value;
        var ced = document.getElementById("txtcedula").value;
        var carre = document.getElementById("txtcarrera").value;
        var mail = document.getElementById("txtcorreo").value;
        var img = document.getElementById("txtfoto").value;
      var estudiante = {"nombre":nombre, "apellido1":ape1,"apellido2":ape2,"cedula":ced,"carrera":carre,"correo":mail,"foto":img};
    estudiantes[selected_index] = estudiante;//Alter the selected item on the table 
     localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
     alert("estudiante modificado") ;
     operation = "A";
  } 
function borrar()

{ 
    var datos=JSON.parse(localStorage.getItem("estudiantes"));
     datos.splice(selected_index, 1);
     localStorage.setItem("estudiantes", JSON.stringify(datos));
     alert("estudiante borrado."); 

} 



