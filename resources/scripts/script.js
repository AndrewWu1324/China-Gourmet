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


/*idk about this part*/
soup = document.getElementById('soups');
glider = document.getElementsByClassName('glider');
soup.onclick = function(){
  glider.scrollItem(2, true);
};