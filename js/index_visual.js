function cargarlista()
{ 
  debugger;
  $("#tblListestudiante").html(""); 
  $("#tblListestudiante").html(
   "<thead>"+ 
   "     <tr>"+
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
      $("#tblListestudiante tbody").append("<tr>"+ 
       "  <td>"+cli.nombre+"</td>" + 
       "  <td>"+cli.apellido1+"</td>" + 
       "  <td>"+cli.apellido2+"</td>" + 
       "  <td>"+cli.cedula+"</td>" + 
       "  <td>"+cli.carrera+"</td>" + 
       "  <td>"+cli.correo+"</td>" + 
       "  <td><img src="+direccion+" class='foto'></td>" +
       "  </tr>");
    }
  } 