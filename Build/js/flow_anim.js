const elements=document.getElementsByClassName("anim");for(let e=0;e<elements.length;e++)elements[e].addEventListener("animationend",(function(n){elements[e].classList.remove("anim_rubberBand")})),elements[e].addEventListener("mouseover",(function(n){elements[e].classList.add("anim_rubberBand")}));
//# sourceMappingURL=flow_anim.js.map
