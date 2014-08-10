    var operation = "A"; //"A"=Adding; "E"=Editing 
    var selected_index = -1; //Index of the selected list item 
    var carreras = localStorage.getItem("carreras");
$(function()
{ 
   
    carreras = JSON.parse(carreras); //Converts string to object 
        if(carreras == null) //If there is no data, initialize an empty array 
          carreras = []; 
}); 
function prepareBinding() 
{    
       $( ".buttondelete" ).click(function() { 
        borrar();  
        });

$(".btnte").bind("click", function()
  { 
    selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
    borrar();
    lista();
  }); 

       $("#nueva_carrera").bind("submit",function()
        { 
          
            if(operation == "A") 
            return Add();
              else 
            return Edit(); 
                  lista();
       }); 
     $(".btnEdit").bind("click", function()
      {
        
          operation = "E"; 
          selected_index = parseInt($(this).attr("alt").replace("Edit", "")); 
          var carre = JSON.parse(carreras[selected_index]); 
            $("#txtid").val(carre.id_carrera); 
            $("#txtName").val(carre.nombre); 
            $("#txtID").attr("readonly","readonly"); 
            $("#txtName").focus();
       }); 
 }
function borrar()
{
  debugger;
  var traercarreras = JSON.parse(localStorage.getItem('carreras'));
 traercarreras.splice(selected_index, 1);
  localStorage.setItem("carreras", JSON.stringify(traercarreras)); 
    alert("carrera borrada.");
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
   
function cargarcarreras(){
  
  var datos=JSON.parse(localStorage.getItem("carreras"));
  var html="<table id=tabla class=table>";
      html+="<h2> Carreras</h2>";
        html+="<tr id=row0 style='background-color: #0099CC;color:white'>";
          html+="<td><strong>Codigo Carrera</strong></td>";
          html+="<td><strong>Nombre</strong></td>";
          html+="<td><strong>Editar</strong></td>";
          html+="<td><strong>Eliminar</strong></td>";
        html+="</tr>";
  for(var i=0;i<datos.length;i++){
    if(datos[i]==null){

    }
    else{
      html+="<tr id=row"+(i+1)+" style='color:#0099CC'>";
        html+="<td>"+datos[i].id_carrera+"</td>";
        html+="<td>"+datos[i].nombre+"</td>";
        html+="<td><button class='buttonedit btn btn-warning' data-carreraeditar="+datos[i].id_carrera+">Editar</button>"
        html+="<td><button class='buttondelete btn btn-danger' data-carreraborrar="+datos[i].id_carrera+">Eliminar</button>"
    }
  }
  html=html+"</table>";
  document.getElementById('tabla').innerHTML =html;
}

function Edit()
{
 carreras[selected_index] = JSON.stringify(
 { 
     id_carrera : $("#txtID").val(), 
         nombre : $("#txtName").val()
  
 });//Alter the selected item on the table 
  localStorage.setItem("tbClients", JSON.stringify(tbClients)); 
  alert("The data was edited.");
  operation = "A"; //Return to default value 
  return true;
 } 

