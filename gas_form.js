/*    ITSE 2402
 *    Final Project
 *    DFW's Local Music Scene Connection Spot
 *    Author: Gena Saenz
 *    Date:   April 30, 2017

 *    Filename: gas_form.js
 */

 "use strict";
 
 function removeSelectDefaults() {
  var emptyBoxes = document.getElementTagName("select");
  for (var i = 0; i < emptyBoxes.length; i++) {
	  emptyBoxes[i].selectedIndex = -1;
  }
 }
 
  if (window.addEventListener) {
	  window.addEventListener("load", removeSelectDefaults, false);
  } else if (window.attachEvent) {
	  window.attachEvent("onload", removeSelectDefaults);
  }
var formValidity = true;

function setCustomValidity() {
var name = document.getElementById("nameinput");
var ph = document.getElementById("phoneinput");
var em = document.getElementById("emailinput");

	if (name.valueMissing) {
		setCustomValidity("Please enter your name.");
	} 
	if (ph.valueMissing) {
		setCustomValidity("Please enter your name.");
	}
	if (em.valueMissing) {
		setCustomValidity("Please enter your name.");
	}
}

function validateForm(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
	formValidity = true;
	if (formValidity === true) {
		document.getElementById("myForm").innerHTML = "";
		document.getElementById("myForm").style.display = "none";
		document.getElementTagName("form")[0].submit();
	} else {
		document.getElementById("myForm").innerHTML = "Please fill out the required fields and resubmit your feedback.";
		document.getElementById("myForm").style.display = "block";
		scroll(0,0);
	}
}

function createEventListeners() {
	var form = document.getElementsByTagName("form")[0];
	 if (form.addEventListener) {
		 form.addEventListener("submit", validateForm, false);
	 } else if (form.attachEvent) {
		 form.attachEvent("onsubmit", validateForm);
	 }
}