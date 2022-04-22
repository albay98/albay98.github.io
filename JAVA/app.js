// Hecho por Alba Yñiguez


var scroll = document.getElementById("top");

window.addEventListener("scroll", function(){
	scroll.style.transform = "rotate("+window.pageYOffset+"deg)";
	// scroll.style.transform = window.pageYOffset;
	// no gira pero hace la misma función de subir a la parte superior
})

