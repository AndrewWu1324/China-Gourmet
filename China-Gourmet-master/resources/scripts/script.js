
window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
})


/*idk about this part*/
let soup = document.getElementById('soups');
let glider = document.getElementsByClassName('glider');
soup.onclick = function(){
  glider.scrollTo(2);
};