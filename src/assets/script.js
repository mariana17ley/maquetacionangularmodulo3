// defino variables:
var micorreo = "";
var miclave = "";

var contenidoExperiencia = "";
var sumaExperiencia = "";

var contenidoEduc = "";
var sumaEducacion = "";

function misdatos(){
    micorreo = "correo@cosa.com";
    miclave = "Soy Yo";
}

function limpiardatoslogin(){
    // para que no conserve datos c/vez que se conecta:
    document.getElementById("staticEmail").value = "";
    document.getElementById("inputPassword").value = "";
}

// aparece el input con id="inputAcercaDe"
// para editar:
function  showInput() {
    document.getElementById("inputAcercaDe").value=document.getElementById("acercaDe").innerHTML;
    document.getElementById("inputAcercaDe").style.display="block";
    document.getElementById("enviaAcercade").style.display="block";
}

// se pasa el contenido cargado en input con id="inputAcercaDe" dentro del div con id="acercaDe"
// para editar:
function updAcercaDe() {
    document.getElementById("acercaDe").innerHTML=document.getElementById("inputAcercaDe").value;
}

// para Agregar:
function showExperiencia(){
    document.getElementById("inputExperiencia1").style.display="block";
    document.getElementById("enviaExperiencia1").style.display="block";
}

// para Agregar:
function experiencia1Cambiar(){
    // toma lo capturado en: inputExperiencia1 ( ... experiencia1Cambiar() ) 
    // y lo suma a lo contenido en div: contenidoExperiencia1 (al enviar, muestra el total)
    contenidoExperiencia = document.getElementById("contenidoExperiencia1").innerHTML;
    sumaExperiencia =  contenidoExperiencia + "<li>"  + document.getElementById("inputExperiencia1").value+"</li>";
    contenidoExperiencia = "";
}

// para Agregar:
function enviarExperiencia1(){
    if(sumaExperiencia.length > 0){
        // si ingresa vacio, borraba, condicionado: NO
        document.getElementById("contenidoExperiencia1").innerHTML = sumaExperiencia;
    }
    sumaExperiencia = "";
    document.getElementById("inputExperiencia1").style.display="none";
    document.getElementById("enviaExperiencia1").style.display="none";
    document.getElementById("inputExperiencia1").value = "";
    algoenExperienciaEducacion();
}

// para Agregar:
function showEducacion(){
    document.getElementById("inputEducacion").style.display="block";
    document.getElementById("enviaEducacion").style.display="block";
}

// para Agregar:
function educacionCambiar(){
    // document.getElementById("contenidoEducacion").innerHTML=document.getElementById("inputEducacion").value;

    contenidoEduc = document.getElementById("contenidoEducacion").innerHTML;
    sumaEducacion =  contenidoEduc + "<li>" + document.getElementById("inputEducacion").value+"</li>";
    contenidoEduc = "";
}

// para Agregar:
function enviarEducacion(){
    if(sumaEducacion.length > 0){
        document.getElementById("contenidoEducacion").innerHTML = sumaEducacion;
    }
    sumaEducacion = "";
    document.getElementById("inputEducacion").style.display="none";
    document.getElementById("enviaEducacion").style.display="none";
    document.getElementById("inputEducacion").value = "";
    algoenExperienciaEducacion();
}

////////////////////////////
// para Editar Experiencia:
////////////////////////////

function showExperiencia2(){
    // trato distinto al de enviaEducacion que es para agregar, enviaEducacion2 es para editar:
    // muestra campos para editar contenidoEducacion:
    
    document.getElementById("inputExperiencia2").value=document.getElementById("contenidoExperiencia1").innerHTML;
    document.getElementById("inputExperiencia2").style.display="block";
    document.getElementById("enviaExperiencia2").style.display="block";
}

function experiencia2Cambiar2(){
    // toma lo capturado en: inputEducacion ( ... onkeyup="educacionCambiar()" ) y lo pone en div: contenidoEducacion
    document.getElementById("contenidoExperiencia1").innerHTML=document.getElementById("inputExperiencia2").value;
}

function enviarExperiencia2(){
    // envia Educacion (desaparece campos de edicion pero no botones para reaparecer)
    document.getElementById("inputExperiencia2").style.display="none";
    document.getElementById("enviaExperiencia2").style.display="none";
}

//////////////////////////

//////////////////////////
// para Editar Educación:
//////////////////////////

function showEducacion2(){
    // trato distinto al de enviaEducacion que es para agregar, enviaEducacion2 es para editar:
    // muestra campos para editar contenidoEducacion:

    document.getElementById("inputEducacion2").value=document.getElementById("contenidoEducacion").innerHTML;
    document.getElementById("inputEducacion2").style.display="block";
    document.getElementById("enviaEducacion2").style.display="block";
    
}

function educacionCambiar2(){
    // toma lo capturado en: inputEducacion ( ... onkeyup="educacionCambiar()" ) y lo pone en div: contenidoEducacion
    document.getElementById("contenidoEducacion").innerHTML=document.getElementById("inputEducacion2").value;
}

function enviarEducacion2(){
    // envia Educacion (desaparece campos de edicion pero no botones para reaparecer)
    document.getElementById("inputEducacion2").style.display="none";
    document.getElementById("enviaEducacion2").style.display="none";
}

//////////////////////////

// para Editar:
function showIntereses(){
    // muestra campos para editar Intereses:
    document.getElementById("inputIntereses").value=document.getElementById("interes").innerHTML;
    document.getElementById("inputIntereses").style.display="block";
    document.getElementById("enviaIntereses").style.display="block";
}

// para Editar:
function interesesCambiar(){
    // toma lo capturado en: inputIntereses ( ... onkeyup="interesesCambiar()" ) y lo pone en div: interes
    document.getElementById("interes").innerHTML=document.getElementById("inputIntereses").value;
}

// para Editar:
function enviarIntereses(){
    // envia intereses (desaparece campos de edicion pero no botones para reaparecer)
    document.getElementById("inputIntereses").style.display="none";
    document.getElementById("enviaIntereses").style.display="none";
}

//////////////////////////

// para Editar:
function showLogros(){
    // muestra campos para editar Intereses:
    document.getElementById("inputLogros").value=document.getElementById("logros").innerHTML;
    document.getElementById("inputLogros").style.display="block";
    document.getElementById("enviaLogros").style.display="block";
}

// para Editar:
function logrosCambiar(){
    // toma lo capturado en: inputIntereses ( ... onkeyup="interesesCambiar()" ) y lo pone en div: interes
    document.getElementById("logros").innerHTML=document.getElementById("inputLogros").value;
}

// para Editar:
function enviarLogros(){
    // envia intereses (desaparece campos de edicion pero no botones para reaparecer)
    document.getElementById("inputLogros").style.display="none";
    document.getElementById("enviaLogros").style.display="none";
}
 
/////////////////////////////////////////////

function enviarAcercaDe(){
    // envia intereses (desaparece campos de edicion pero no botones para reaparecer)
    document.getElementById("inputAcercaDe").style.display="none";
    document.getElementById("enviaAcercade").style.display="none";
}

function acceso() {
    correo = document.getElementById("staticEmail").value;
    clave = document.getElementById("inputPassword").value;

    console.log("correo: "+correo+" clave: "+clave);

    misdatos();

    if(correo == micorreo && clave == miclave){
        limpiardatoslogin();
        // coloco boton para cerrar:
        document.getElementById("loginlogaout").innerHTML=`
        <a href="#" data-bs-toggle="modal" data-bs-target="#logout" alt="perfil" width="100" height="100">
            <img src="assets/images/log-out-g941e9a8fe_1280.png" alt="Desconectar" width="30" height="24" title="Salir">
        </a>
        `

        // mostrar botones para cambios: block/inline/inline-block
        // Mostrar opciones: Intereses-Agreagr Seccion-Mas
        // document.getElementById("intsecmas").style.display="inline";

        // Mostrar opcion: editar acercade
        document.getElementById("acercadePencil").style.display="inline";

        // Mostrar opciones para cambios de Experiencia
        document.getElementById("opcionesExperiencia").style.display="inline";

        // Mostrar opciones para cambios de Educacion
        document.getElementById("opcionesEducacion").style.display="inline";
        algoenExperienciaEducacion();

        document.getElementById("interesesPencil").style.display="inline";

        document.getElementById("logrosPencil").style.display="inline-block";

        console.log('Veririfica datos antes de hacer cambios');

        // cerrar modal:  data-bs-dismiss="modal" debe estar en la definicion del modal (aqui, NADA)
    }else{
        alert("Dátos Incorrectos ... ");
        limpiardatoslogin();
    }

}

function algoenExperienciaEducacion(){
    contenidoEduc = document.getElementById("contenidoEducacion").innerText;
    contenidoExperiencia = document.getElementById("contenidoExperiencia1").innerText;
    console.log(contenidoEduc.length);
    if(contenidoEduc.length > 0){
        // activar botonoes de edicion/borrado:
        document.getElementById("editaEducacion").style.display="inline-block";
        document.getElementById("borrarEducacion").style.display="inline-block";
    }

    if(contenidoExperiencia.length > 0){
        // activar botonoes de edicion/borrado:
        document.getElementById("editaExperiencia").style.display="inline-block";
        document.getElementById("borrarExperiencia").style.display="inline-block";
    }
}

function desconectar(){

    // reactivo: login:
    document.getElementById("loginlogaout").innerHTML=`
    <a href="#" data-bs-toggle="modal" data-bs-target="#login"  alt="perfil" width="100" height="100">
        <img src="assets/images/person.svg" alt="Login" width="30" height="24" title="Conectar" class="bootstrap-icons bg-white">
    </a>
    `

    // escondo edicion:     
    // ocultar opciones: Intereses-Agreagr Seccion-Mas:
    // document.getElementById("intsecmas").style.display="none";

    // ocultar opcion: editar acercade y todo lo relacionado (enviar: tambien oculta) :
    document.getElementById("inputAcercaDe").style.display="none";
    document.getElementById("enviaAcercade").style.display="none";
    document.getElementById("acercadePencil").style.display="none";

    // ocultar opciones para cambios de Experiencia:
    document.getElementById("opcionesExperiencia").style.display="none";

    // ocultar opciones para cambios de Educacion:
    document.getElementById("opcionesEducacion").style.display="none";

    // ocultar opciones para cambios de Intereses:
    document.getElementById("inputIntereses").style.display="none";
    document.getElementById("enviaIntereses").style.display="none";
    document.getElementById("interesesPencil").style.display="none";

    document.getElementById("logrosPencil").style.display="none";

}

function borrarExperiencia(){
    contenidoExperiencia = "";
    document.getElementById("contenidoExperiencia1").innerHTML = "";
    document.getElementById("editaExperiencia").style.display="none";
    document.getElementById("borrarExperiencia").style.display="none";
}

function borrarEducacion(){
    contenidoEduc = "";
    document.getElementById("contenidoEducacion").innerHTML = "";
    document.getElementById("editaEducacion").style.display="none";
    document.getElementById("borrarEducacion").style.display="none";
}

function contacto(){
    alert("Estaremos en Contacto a la brevedad. Gracias.");
}