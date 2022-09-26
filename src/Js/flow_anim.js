const elements = document.getElementsByClassName("anim");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('animationend', function(e) {
    elements[i].classList.remove('anim_rubberBand');
  });

 elements[i].addEventListener('mouseover', function(e) {
   elements[i].classList.add('anim_rubberBand')
 })
}