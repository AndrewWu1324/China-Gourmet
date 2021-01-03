window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
})

<<<<<<< HEAD
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("dots");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
=======

/*idk about this part*/
soup = document.getElementById('soups');
glider = document.getElementsByClassName('glider');
soup.onclick = function(){
  glider.scrollItem(2, true);
};


function myFunction() {
  document.getElementById("glider-dots").classList.toggle("show");
}

/*
window.onclick = function(event) {
  if (!event.target.matches('.')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */
>>>>>>> parent of 7dbd9f2... Fixed it a bit
