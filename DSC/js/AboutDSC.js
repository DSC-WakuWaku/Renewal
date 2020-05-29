var $target = document.querySelector('.data1')
var $button = document.querySelector('.button')
document.addEventListener("DOMContentLoaded", function(){
  $button.addEventListener('click', function() {
    $target.classList.toggle('is-hidden')
  })
}, false);