document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
  navegacionFija();
  scrollNav();
}

/**************************  navegacion stiky **************************/

function navegacionFija() {
  const barra = document.querySelector('.header');
  const sobreFestival = document.querySelector('.about');
  const body = document.querySelector('body');

  window.addEventListener('scroll', function() {
      if( sobreFestival.getBoundingClientRect().top <= 0) {
        // barra.classList.add('animate__animated');
        barra.classList.remove('anim_faster');
        barra.classList.remove('anim_slideOutUp');
        barra.classList.add('anim_slideInDown');

        barra.classList.add('fijo');
        body.classList.add('body-scroll');
      } else if(sobreFestival.getBoundingClientRect().top >= 0 && sobreFestival.getBoundingClientRect().top <= 650){ 
        barra.classList.remove('anim_slideInDown');
        barra.classList.add('anim_slideOutUp');   
        barra.classList.add('anim_faster');     
      }else {
        barra.classList.remove('anim_faster');
        barra.classList.remove('anim_slideOutUp');

        barra.classList.remove('fijo');
        body.classList.remove('body-scroll');
      }
  });
}

/**************************  smooth scroll **************************/

function scrollNav() {
  const enlaces = document.querySelectorAll('.menu-horizontal a');

  enlaces.forEach( enlace => {
      enlace.addEventListener('click', function(e) {
          e.preventDefault();

          const seccionScroll = e.target.attributes.href.value;
          const seccion = document.querySelector(seccionScroll);
          seccion.scrollIntoView({ behavior: "smooth"});
      });
  });
}

/**************  accion del boton de hamburguesa **************/

document.querySelector(".mobile-menu").addEventListener("click", animateBars,);

var line1__bars = document.querySelector(".line1__mobile-menu");
var line2__bars = document.querySelector(".line2__mobile-menu");
var line3__bars = document.querySelector(".line3__mobile-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__mobile-menu");
    line2__bars.classList.toggle("activeline2__mobile-menu");
    line3__bars.classList.toggle("activeline3__mobile-menu");
};

document.querySelector('.mobile-menu').addEventListener('click', navegacionResponsive);

function navegacionResponsive() {
  const navegacion = document.querySelector('.navegacion');

  navegacion.classList.toggle('mostar');
}

/************** Reset scroll proyects **************/

// var contenedores = document.querySelectorAll('.contenedor-proyectos');

// contenedores.forEach(contenedor => {
//     var scroller = contenedor.querySelector('.scroller');

//     contenedor.addEventListener('mouseout', () => {
//         scroller.scrollTop = 0;
//         scroller.scrollIntoView({ behavior: "smooth"});
//         // console.log('Scrollbar reset to top');
//     });
// });

var contenedores = document.querySelectorAll('.contenedor-proyectos');
contenedores.forEach(contenedor => {
    var scroller = contenedor.querySelector('.scroller');

    contenedor.addEventListener('mouseout', () => {
        setTimeout(() => {
            scroller.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            // console.log('Scrollbar reset to top with smooth scroll');
        }, 50); // Retardo de 100 milisegundos
    });
});


/************** SCROLL ANIMATIONS **************/

  // function onScrollInit(items, elemTrigger) {
  //   var offset = $(window).height() / 1.6;
  //   items.each(function() {
  //     var elem = $(this),
  //       animationClass = elem.attr('data-animation'),
  //       animationDelay = elem.attr('data-delay');

  //     elem.css({
  //       '-webkit-animation-delay': animationDelay,
  //       '-moz-animation-delay': animationDelay,
  //       'animation-delay': animationDelay
  //     });

  //     var trigger = elemTrigger ? trigger : elem;

  //     trigger.waypoint(
  //       function() {
  //         elem.addClass('animated').addClass(animationClass);
  //       },
  //       {
  //         triggerOnce: true,
  //         offset: offset
  //       }
  //     );
  //   });
  // }

  // setTimeout(function() {onScrollInit($('.waypoint'));}, 10);

/**************  video en proyectos **************/

  // // Obtén la referencia al elemento de video
  // var video = document.getElementById('youtube-video');

  // // Define la ID del video de YouTube
  // var videoId = 'bPRBphnmPjA'; // Reemplaza 'ID_DEL_VIDEO' con la ID real del video de YouTube

  // // Crea la URL del video de YouTube utilizando la ID
  // var videoUrl = 'https://www.youtube.com/embed/' + videoId;

  // // Establece la fuente del video en el elemento <video>
  // video.src = videoUrl;


/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);