let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asigtarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if(numeroUsuario === numeroSecreto){
        asigtarTextoElemento('p',`Acertate el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //limpiar las cajas
        if(numeroUsuario > numeroSecreto){
            asigtarTextoElemento('p','El número secreto es menor');
        }else{
            asigtarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
    
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
    

function gerarNumeroSecreto() {

    

    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);

    //si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.length == numeroMaximo){
        asigtarTextoElemento('p','ya se sortearon todos los números posibles');
    }else{

        //si numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return gerarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}
function condicionesIniciales(){
    asigtarTextoElemento('h1', 'Juego del número secreto');
    asigtarTextoElemento('p', 'Indique un número del 1 al 10');
    numeroSecreto = gerarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //gerar el numero aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}
condicionesIniciales();
// reiniciarJuego();






