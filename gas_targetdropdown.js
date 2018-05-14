/*    ITSE 2402
 *    Final Project
 *    DFW's Local Music Scene Connection Spot
 *    Author: Gena Saenz
 *    Date:   April 30, 2017

 *    Filename: gas_targetdropdown.js
 */




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropListTarget() {
    document.getElementById("myDropdownTarget").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.targetdropbtn')) {

    var targetdropdowns = document.getElementsByClassName("targetdropdown-content");
    var i;
    for (i = 0; i < targetdropdowns.length; i++) {
      var openDropdown = targetdropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}