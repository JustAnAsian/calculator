// JavaScript Document

//Change Display
function d(val) {
	document.getElementById("d").value = val;
}

//Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

//Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}

function round_() {
	e()
	var x =document.getElementById("d").value;
	x= Math.round(Number(x));
	d(x);
}
function square_() {
	e()
	var x =document.getElementById("d").value;
	x= Math.sqrt(Number(x));
	d(x);
}