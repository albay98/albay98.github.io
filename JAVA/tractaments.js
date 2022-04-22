function showContTab(evt, target){

	var tab1 = document.getElementById("contTab1");
	var tab2 = document.getElementById("contTab2");
	var tab3 = document.getElementById("contTab3");
	var tab4 = document.getElementById("contTab4");
	var tab5 = document.getElementById("contTab5");

	// AMAGO TOTES
	tab1.style.display= "none";
	tab2.style.display= "none";
	tab3.style.display= "none";
	tab4.style.display= "none";
	tab5.style.display= "none";

	// CANVIAR STYLE.HEIGHT A 0

	var triggertab1 = document.getElementById("triggertab1");
	var triggertab2 = document.getElementById("triggertab2");
	var triggertab3 = document.getElementById("triggertab3");
	var triggertab4 = document.getElementById("triggertab4");
	var triggertab5 = document.getElementById("triggertab5");

	triggertab1.style.backgroundColor = "#5AA9E6";
	triggertab2.style.backgroundColor = "#5AA9E6";
	triggertab3.style.backgroundColor = "#5AA9E6";
	triggertab4.style.backgroundColor = "#5AA9E6";
	triggertab5.style.backgroundColor = "#5AA9E6";

	console.log(evt);

	document.getElementById(target).style.display = "block";
	// CANVIAR HEIGHT A 600PX
	evt.currentTarget.style.backgroundColor = "#FFE45E";

}

