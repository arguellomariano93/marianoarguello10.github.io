//Funcion que redirecciona entre paginas 
const rendirectAbout =()=>{

    let nuevaURL = 'http://127.0.0.1:5500/sobre.html'; // La URL de destino.
    let espera   =  1; // La espera en segundos antes de ejecurtar la redirección.
   
    //Mostrar un mensaje sobre que el contenido cambio de ubicación y esperar x segundos para que sea leído.
    function paginaCargaCompleta(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    };

    //Aca ejecutamos la redireccion a la pagina que queremos. 
    paginaCargaCompleta( function(){
          espera = parseInt(espera);
        setTimeout('location.href="'+nuevaURL+'"', espera*1000);
})}
const rendirectContact =()=>{

    let nuevaURL = 'http://127.0.0.1:5500/contacto.html'; // La URL de destino.
    let espera   =  1; // La espera en segundos antes de ejecurtar la redirección.
   
    function paginaCargaCompleta(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    };
    
    paginaCargaCompleta( function(){
          espera = parseInt(espera);
        setTimeout('location.href="'+nuevaURL+'"', espera*1000);
})}