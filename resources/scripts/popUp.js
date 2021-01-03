// Get the modal
var modal = document.getElementById("myModal");
<<<<<<< HEAD
=======
var modal2 = document.getElementById("myModal2");
var modalC = document.getElementById("covidModal")
>>>>>>> parent of 7dbd9f2... Fixed it a bit

// Get the button that opens the modal
var btn = document.getElementById("orderBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
<<<<<<< HEAD

=======
var span2 = document.getElementsByClassName("close2")[0];
var spanC = document.getElementsByClassName("closeC")[0];
>>>>>>> parent of 7dbd9f2... Fixed it a bit

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
<<<<<<< HEAD

=======
btn2.onclick = function() {
  modal2.style.display = "block";
}
window.onload = function() {
  modalC.style.display = "block"
}
>>>>>>> parent of 7dbd9f2... Fixed it a bit

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
<<<<<<< HEAD
=======
span2.onclick = function() {
  modal2.style.display = "none";
}
spanC.onclick = function() {
  modalC.style.display = "none";
}
>>>>>>> parent of 7dbd9f2... Fixed it a bit
