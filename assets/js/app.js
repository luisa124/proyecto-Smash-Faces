//variable para los azar , puntero y intento

var numeroAzar=0;
var puntaje=0;
var intentos=0;
 var caja = [];


$(document).ready(function(){
    $("#mostrar").click(function(){
    $(this).hide("img");    
    $(".img").show("slow");
    });
    
    $("mexico").show(function(){
    $(this).hide("slow");    
    });
});


$("#comprobar").click(function(){

    var nombre=$("#inputText").val();
    console.log("El usuario escribio : " + nombre);
    $("#inputText").val("");

    var nombreAdivinar=nombres[numeroAzar];
    console.log("El nombre correcto es: " + nombreAdivinar);

if(sede === mexico){
    caja = nombre * intentos;
    
}else {
    alert("sigue intentando");
}


/*function init(){
    $('#lima').(navegaLima);
    $('#aqp').click(navegaAqp);
    $('#chile').click(navegaChile);
   
}
//navegacion de 
function navegaLima(){
    $('#secLima').hide();
    $('#secImg').hide();
    
}

function navegaAqp(){
    $('#secAqp').hide();
    $('#sec').hide();
}

function navegaChile(){
    $('#secChile').hide();
    $('#sec').hide();
}*/
