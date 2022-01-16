/*********************************************
 * Uses jQuery!
*********************************************/
function myFunction(x) {
    x.classList.toggle("change");
    $("#mobile-menu").toggleClass("menu-hidden", 800, "easeOutQuint");
  };

  /*********************************************
 * Scroll
*********************************************/
window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  
    for(var i = 0; i < elements.length; i++) {
      let element = elements[i];

      if(element.getBoundingClientRect().top < screenSize) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    }
});

  /*********************************************
 * Loader
*********************************************/

window.onload = function(){
  $('#onload').fadeOut();
  $('body').removeClass('hidden');
}

  /*********************************************
 * Confirm
*********************************************/

function funcionAlerta(){
  alert(envio);
  }