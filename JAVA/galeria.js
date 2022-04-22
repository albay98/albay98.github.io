
//Pestanyes de la Galeria


// function tabDepilacion(){
//   var tab1 = document.getElementById("conTabDepilacion");

//   // ensenya
//   tab1.classList.toggle("showDepilacion");

// }











































//Lightbox de la Galeria
 
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