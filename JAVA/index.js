
// SLIDER AUTOMÀTIC

var counterSurt = 0;
var counterEntrar = 0;

  function slideShowAnim(){

    var llistaImgBGAnim = document.getElementsByClassName("fonsTractament");

    // incremento els comptadors
    counterEntrar++;
    counterSurt= counterEntrar-1;


    // resetejo el comptadors

    if (counterEntrar == llistaImgBGAnim.length){

      counterEntrar = 0;
    }


    if (counterSurt <0){
      counterSurt= llistaImgBGAnim.length-1;
    } 


    for (var i=0; i<llistaImgBGAnim.length; i++){

      // aquí trec qualsevol de les classes de l'animació dels meus elements del fons.

      llistaImgBGAnim[i].classList.remove("animEntrar");
      llistaImgBGAnim[i].classList.remove("animSortir");
      llistaImgBGAnim[i].classList.remove("imgAmagada");


      // aquí comprovo i assigno per a cada element del loop quina classe li toca en funció del comptador

      if (i==counterEntrar){

        llistaImgBGAnim[i].classList.add("animEntrar");
      }

      else if (i==counterSurt) {
      llistaImgBGAnim[i].classList.add ("animSortir");

      }

      else{
      llistaImgBGAnim[i].classList.add("imgAmagada");

      }
    }
  }


// LIGHTBOX GALERIA
var numeroIMG=0;
 var llistaSrcImgGal= [];

 function readyLightbox() {

    var llistaImgGal = document.getElementsByClassName("imgGaleria");
    // console.log(llistaImgGal);

    for (var i =0; i<llistaImgGal.length; i++){

      llistaSrcImgGal.push(llistaImgGal[i].src);
    }


    // Aquí loopejo les imatges de la galeria per afergir-hi a cadascuna una listener de click

    for (var i=0; i<llistaImgGal.length; i++){

      llistaImgGal[i].addEventListener("click", openLightbox);
    }

      function openLightbox(){

        var rutaImgClicada =event.currentTarget.src;
      // console.log(rutaImgClicada);
        numeroIMG = llistaSrcImgGal.indexOf(rutaImgClicada);

      
        document.getElementById("modalGal").style.display = "block";
        document.documentElement.style.overflow="hidden";


        document.getElementById("imagetoShow").innerHTML = "<img class='imgLB' src=" + llistaSrcImgGal[numeroIMG]+">";
      }


  }

  function nextImgGal() {

    numeroIMG++;
    // fem la comprovació de si s'ha arribat al final de la llista de les rutes de les imatges. 

    if (numeroIMG==llistaSrcImgGal.length) {

      numeroIMG = 0;
    }

    document.getElementById("imagetoShow").innerHTML = "<img class='imgLB' src=" + llistaSrcImgGal[numeroIMG]+">";
    console.log(numeroIMG);
 }

 function prevImgGal(){
  numeroIMG--;

  if(numeroIMG<0) {

    numeroIMG = llistaSrcImgGal.length-1;
  }
    document.getElementById("imagetoShow").innerHTML = "<img class='imgLB' src=" + llistaSrcImgGal[numeroIMG]+">";
 }

function closeLightbox(){

    document.getElementById("modalGal").style.display = "none";
    document.documentElement.style.overflow="auto";
}




