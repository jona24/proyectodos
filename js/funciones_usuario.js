  var selected_index = -1; //Index of the selected list item 
  var cambiar= ""
  function cargarlista()
  {
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    debugger;
    $("#tblistusuario").html(""); 
    $("#tblistusuario").html(
     "<thead>"+ 
     "  <tr>"+
     "    <th></th>"+
     "  <th>NOMBRE USUARIO</th>"+
     "  <th>USUARIO</th>"+ 
     "  <th>CONTRASEÑA</th>"+
     "  <th>TIPO USUARIO</th>"+  
     "  </tr>"+ 
     "</thead>"+ 
     "<tbody>"+
     "</tbody>" 
     );
    
       if(usuarios == null) //If there is no data, initialize an empty array 
        usuarios = []; 
      for(var i=0;i<usuarios.length;i++)
      {
        var cli =usuarios[i]; 
        $("#tblistusuario tbody").append("<tr>"+ 
         "  <td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" +
         "  <td>"+cli.nombre_usuario+"</td>" + 
         "  <td>"+cli.usuario+"</td>" + 
         "  <td>"+cli.contra+"</td>" + 
         "  <td>"+cli.tipo+"</td>" + 
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
        var arreglo = JSON.parse(localStorage.getItem("usuarios"));
        selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
        var cli = arreglo [selected_index];
        $("#txtnombre").val(cli.nombre_usuario);
        $("#txtusuario").val(cli.usuario);
        $("#txtcontra").val(cli.contra);
        $("#combo").val(cli.tipo);
        $("#txtnombre").focus(); 
        cambiar ="ok";
      });
    }
    function borrar()
    {
      debugger;
      var datos=JSON.parse(localStorage.getItem("usuarios"));
      datos.splice(selected_index, 1);
      localStorage.setItem("usuarios", JSON.stringify(datos));
      alert("usuario borrado."); 
      document.location.href='nuevousuario.html';
    }
    function agregar()
    {
      debugger;
      var nombre = document.getElementById("txtnombre").value;
      var usuario = document.getElementById("txtusuario").value;
      var contra= document.getElementById("txtcontra").value;
      var tipo= document.getElementById("combo").value;
      var usuario = {"nombre_usuario":nombre, "usuario":usuario,"contra":contra,"tipo":tipo};
      var usuarios=JSON.parse(localStorage.getItem("usuarios"));
      if (usuarios==null) 
      {
        usuarios=[];
      }
      usuarios.push(usuario);
      localStorage.setItem('usuarios',JSON.stringify(usuarios));
      
      cargarlista();
      alert("usuario agregado");
      document.location.href='nuevousuario.html';
      
    }
    function editar()
    {
      debugger;
      var usuarios = JSON.parse(localStorage.getItem('usuarios'));
      var nombre = document.getElementById("txtnombre").value;
      var usuario = document.getElementById("txtusuario").value;
      var contra= document.getElementById("txtcontra").value;
      var tipo= document.getElementById("combo").value;
      var usuario = {"nombre_usuario":nombre, "usuario":usuario,"contra":contra,"tipo":tipo}; 
    usuarios[selected_index] = usuario;//Alter the selected item on the table 
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("usuario modificado") ;
    document.location.href='nuevousuario.html';
  }
