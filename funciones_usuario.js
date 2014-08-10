 var operation = "A"; //"A"=Adding; "E"=Editing 
    var selected_index = -1; //Index of the selected list item 
    var usuarios = localStorage.getItem("usuarios");
$(function()
{ 
   
    usuarios = JSON.parse(usuarios); //Converts string to object 
        if(usuarios == null) //If there is no data, initialize an empty array 
          usuarios = []; 
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

       $("#nuevo_usuario").bind("submit",function()
        { 
          
            if(operation == "A") 
            return Add();
              else 
            return Edit(); 
                  lista();
       }); 
     $(".btnEdit").bind("click", function()
      {
        debugger;
          operation = "E"; 
          selected_index = parseInt($(this).attr("alt").replace("Edit", "")); 
          var carre = JSON.parse(carreras[selected_index]); 
            $("#txtid").val(carre.id_carrera); 
            $("#txtName").val(carre.nombre); 
            $("#txtID").attr("readonly","readonly"); 
            $("#txtName").focus();
       }); 
 }
 function Add()
    { 
      debugger;
     var nombre=document.getElementById("txtnombre").value;
      var usuario = document.getElementById("txtusuario").value;
      var contra = document.getElementById("txtcontra").value;
      var user = {"nombre":nombre,"usuario":usuario,"contra":contra};
          if (usuarios==null) 
        {
          usuarios=[];
        }
          usuarios.push(usuario);
          localStorage.setItem('usuarios',JSON.stringify(usuarios));
              
      alert("usuario creado con exito" );
    } 
   
function cargarusuarios(){
  
  var datos=JSON.parse(localStorage.getItem("usuarios"));
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
        html+="<td>"+datos[i].nombre+"</td>";
        html+="<td>"+datos[i].usuario+"</td>";
        html+="<td>"+datos[i].contra+"</td>";
        html+="<td><button class='buttonedit btn btn-warning' data-carreraeditar="+datos[i].usuario+">Editar</button>"
        html+="<td><button class='buttondelete btn btn-danger' data-carreraborrar="+datos[i].usuario+">Eliminar</button>"
    }
  }
  html=html+"</table>";
  document.getElementById('tabla').innerHTML =html;
   document.getElementById("txtnombre").value = "";
   document.getElementById("txtusuario").value "";
  document.getElementById("txtcontra").value"";
}
