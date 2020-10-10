/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
//particlesJS.load('particles-js','js/particlesjs-config.json');
particlesJS('particles-js',
{
    "particles": {
      "number": {
        "value": 47,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#cda830"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "",
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
        "value": 3.945738208161363,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 38.36163836163836,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ebcd6c",
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
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 275.7242757242757,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 119.88011988011988,
          "size": 19.98001998001998,
          "duration": 1.5984015984015985,
          "opacity": 0.4875124875124875,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);