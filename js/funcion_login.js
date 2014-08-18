

function prepareBinding()
{


	$( "#btnentrar" ).click(function() { 
    acceso();  
  });

}
function acceso()
{
 var usuarios=JSON.parse(localStorage.getItem("usuarios"));
 var usuario =document.getElementById("usuario").value;
 var contra = document.getElementById("contra").value;
 var entro = false;
 if(usuario==null || contra==null )
  alert("Debe ingresar los datos");

else	
  for(var i=0;i<usuarios.length;i++)
  {
   if(usuarios[i].usuario==usuario & usuarios[i].contra==contra)
   {
    entro = true;
    alert("Bienvenido "+ usuario);
    if (usuarios[i].tipo=="admin")
    {
     location.href='index.html';
   }
   else
   {
     location.href='index_visual.html'; 
   }
   
 }
}   
if (entro==false){
  alert("usuario o contraseña incorrecto");
} 

}    