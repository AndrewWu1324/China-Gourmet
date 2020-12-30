// Get the modal
var modal = document.getElementById("myModal");
var modalC = document.getElementById("covidModal")

// Get the button that opens the modal
var btn = document.getElementById("orderBtn");
var btn2 = document.getElementById("orderNowBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modalC.style.display = "none";
}

window.onload = function() {
  modalC.style.display = "block"
}