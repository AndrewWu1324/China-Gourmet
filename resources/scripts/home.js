// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modalC = document.getElementById("covidModal");

// Get the button that opens the modal
var btn = document.getElementById("orderBtn");
var btn2 = document.getElementById("orderNowBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var spanC = document.getElementsByClassName("closeC")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
window.onload = function() {
  modalC.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
spanC.onclick = function() {
  modalC.style.display = "none";
}

var modalM = document.getElementById("mobileModal");
var btnM = document.getElementById("mobileBtn");
var spanM = document.getElementsByClassName("closeM")[0];
btnM.onclick = function() {
  modalM.style.display = "block";
}
spanM.onclick = function() {
  modalM.style.display = "none";
}