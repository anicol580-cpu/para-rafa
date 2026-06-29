let musica = document.getElementById("musicaFondo");
let audioFinal = document.getElementById("audioFinal");
let btnPlay = document.getElementById("btnPlay");

let estaSonando = false;

const textosTerminal = [
  "INICIANDO PROTOCOLO...",
  "VERIFICANDO IDENTIDAD...",
  "USUARIO DETECTADO: RAFA",
  "ACCESO CONCEDIDO...",
  "RECUPERANDO RECUERDOS...",
  "1 ARCHIVO ENCONTRADO."
];

let indiceTexto = 0;

function cambiarTextoTerminal(){
  const texto = document.getElementById("textoTerminal");

  if(indiceTexto < textosTerminal.length){
    texto.textContent = textosTerminal[indiceTexto];

    texto.style.animation = "none";
    void texto.offsetWidth;
    texto.style.animation = "entradaTexto 0.7s ease";

    indiceTexto++;
    setTimeout(cambiarTextoTerminal, 1600);
  } else {
    document.getElementById("btnAcceso").classList.remove("oculto");
  }
}

cambiarTextoTerminal();

document.getElementById("btnAcceso").addEventListener("click", function(){
  document.getElementById("inicio").classList.add("oculto");
  document.getElementById("portada").classList.remove("oculto");
});

btnPlay.addEventListener("click", function(){
  if(!estaSonando){
    musica.volume = 0.4;
    musica.play();
    estaSonando = true;
    btnPlay.innerHTML = "⏸ PAUSE";

    setTimeout(() => {
      document.getElementById("portada").classList.add("oculto");
      document.getElementById("carta").classList.remove("oculto");
    }, 900);

  } else {
    musica.pause();
    estaSonando = false;
    btnPlay.innerHTML = "▶ PLAY";
  }
});

document.getElementById("sobre").addEventListener("click", function(){
  let sobre = document.getElementById("sobre");
  let mensaje = document.getElementById("mensaje");
  let boton = document.getElementById("btnCarta");

  sobre.classList.add("abierto");

  setTimeout(() => {
    mensaje.classList.remove("oculto");
    boton.classList.remove("oculto");
  }, 1100);
});

document.getElementById("btnCarta").addEventListener("click", function(event){
  event.stopPropagation();

  document.getElementById("carta").classList.add("oculto");
  document.getElementById("cartaCompletaSeccion").classList.remove("oculto");

  window.scrollTo(0, 0);
});

document.getElementById("btnRecuerdos").addEventListener("click", function(){
  document.getElementById("cartaCompletaSeccion").classList.add("oculto");
  document.getElementById("distancia").classList.remove("oculto");

  window.scrollTo(0, 0);
});

document.getElementById("btnContinuarRecuerdos").addEventListener("click", function(){
  document.getElementById("distancia").classList.add("oculto");
  document.getElementById("fotos").classList.remove("oculto");

  window.scrollTo(0, 0);
});

document.getElementById("btnAudio").addEventListener("click", function(){
  document.getElementById("fotos").classList.add("oculto");
  document.getElementById("audio").classList.remove("oculto");

  window.scrollTo(0, 0);
});

document.getElementById("btnReproducirFinal").addEventListener("click", function(){
  musica.pause();
  estaSonando = false;
  btnPlay.innerHTML = "▶ PLAY";

  audioFinal.play();
});

document.getElementById("btnFinal").addEventListener("click", function(){
  document.getElementById("audio").classList.add("oculto");
  document.getElementById("final").classList.remove("oculto");

  confetti({
    particleCount:250,
    spread:120,
    origin:{ y:0.6 }
  });
});